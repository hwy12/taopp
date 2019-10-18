<template>
  <van-dropdown-menu active-color="#ff2e62" class="a">
    <van-dropdown-item v-model="value1" :options="option1" class="create" />
    <van-dropdown-item v-model="value2" :options="option2" />
    <van-dropdown-item v-model="value3" :options="option3" />
  </van-dropdown-menu>
</template>
<script>
import Vue from 'vue'
import { DropdownMenu, DropdownItem } from 'vant'
import axios from 'axios'
Vue.use(DropdownMenu).use(DropdownItem)
export default {
  data () {
    return {
      cinemasList: [],
      creaList: [],
      value1: 0,
      value2: 'a',
      value3: 'A',
      option1: [
        { text: '全城', value: 0 },
        { text: '福田区', value: '福田区' },
        { text: '南山区', value: 2 },
        { text: '龙华区', value: 3 },
        { text: '龙岗区', value: 4 },
        { text: '宝安区', value: 5 },
        { text: '罗湖区', value: 6 },
        { text: '盐田区', value: 7 },
        { text: '坪山区', value: 8 }
      ],
      option2: [
        { text: 'App订票', value: 'a' },
        { text: '前台兑换', value: 'b' }
      ],
      option3: [
        { text: '最近去过', value: 'A' },
        { text: '前台兑换', value: 'B' }
      ]
    }
  },
  watch: {
    value1 (a) {
      this.getNew()
    }
  },
  methods: {
    getNew () {
      axios
        .get('https://m.maizuo.com/gateway', {
          params: {
            cityId: 440300,
            ticketFlag: 1,
            k: 4297776
          },
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"157052860619327352833105"}',
            'X-Host': 'mall.film-ticket.cinema.list'
          }
        })
        .then(response => {
          this.cinemasList = response.data.data.cinemas
          console.log(this.value1)
          for (var i = 0; i < this.cinemasList.length; i++) {
            if (this.value1 === this.cinemasList[i].districtName) {
              this.creaList.push(this.cinemasList[i])
            }
          }
          console.log(this.creaList)
        })
    }
  }
}
</script>
<style lang="scss">
</style>
