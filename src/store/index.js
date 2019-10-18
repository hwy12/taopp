import Vue from 'vue'
import Vuex from 'vuex'

import FilmModule from './modules/film'
import CinemasModule from './modules/cinemas'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    film: FilmModule,
    cinemas: CinemasModule
  }
})

export default store
