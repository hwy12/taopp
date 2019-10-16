import axios from 'axios'

export default {
  namespaced: true,

  state: {
    filmList: []
  },

  getters: {},

  mutations: {
    setFilmList (state, payload) {
      state.filmList = payload
    }
  },

  actions: {
    getFilmList (context, payload) {
      axios.get('https://m.maizuo.com/gateway', {
        params: {
          cityId: 440300,
          pageNum: 1,
          pageSize: 10,
          type: 1,
          k: 5608586
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"157112793921131239097394"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      })
        .then(response => {
          let result = response.data
          console.log(result)
          if (result.status === 0) {
            context.commit('setFilmList', result.data.films)
          }
        })
    }
  }
}
