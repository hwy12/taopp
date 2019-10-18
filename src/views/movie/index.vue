<template>
  <div class="page-movie">
    <!-- 一级路由，电影影院选择列表 -->
    <!-- 日期选择 -->
    <div class="heder">
      <ul>
        <li @click="fn1('a')">
          <h1 id="ho-a" class="hei zt">今天</h1>
          <span>10月16日</span>
        </li>
        <li @click="fn1('b')">
          <h1 id="ho-b" class="hei">明天</h1>
          <span>10月16日</span>
        </li>
        <li @click="fn1('c')">
          <h1 id="ho-c" class="hei">后天</h1>
          <span>10月16日</span>
        </li>
        <li @click="fn1('d')">
          <h1 id="ho-d" class="hei">明天</h1>
          <span>10月16日</span>
        </li>
        <li @click="fn1('e')">
          <h1 id="ho-e" class="hei">明天</h1>
          <span>10月16日</span>
        </li>
        <li @click="fn1('f')">
          <h1 id="ho-f" class="hei">明天</h1>
          <span>10月16日</span>
        </li>
      </ul>
      <div class="xiahuaxian">
        <p id="xia"></p>
      </div>
    </div>
    <van-dropdown-menu active-color="#ff2e62" class="a">
      <van-dropdown-item v-model="value1" :options="option1" class="create" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <ul class="cinemasUl">
      <router-link
        tag="li"
        :to="`/${cinemas.cinemaId}/cinema`"
        class="cinemasLi"
        v-for="cinemas in arr"
        :key="cinemas.cinemaId"
      >
        <div class="list-item-container">
          <a class="list-item-in list-item-anchor">
            <h3 class="list-title-warper">
              <div class="list-title-left">
                <span class="list-title">{{cinemas.name}}</span>
              </div>
              <span class="list-price">
                <i>￥</i>
                {{cinemas.lowPrice/100}}
                <i>起</i>
              </span>
            </h3>
            <div class="list-address">
              <div class="list-location">{{cinemas.address}}</div>
            </div>
            <!-- <ul class="list-activity">
              <li class="activity-item">
                <span class="hui">惠</span>
                中国机长等5部影片特惠
              </li>
            </ul> -->
          </a>
          <!-- <div class="line"></div> -->
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { DropdownMenu, DropdownItem } from 'vant'
Vue.use(DropdownMenu).use(DropdownItem)
export default {
  data () {
    return {
      cinemasList: [],
      arr: [],
      id: 111,
      value1: 0,
      value2: 'a',
      value3: 'A',
      option1: [{ text: '全城', value: 0 }],
      option3: [
        { text: '最近去过', value: 'A' },
        { text: '前台兑换', value: 'B' }
      ]
    }
  },
  methods: {
    fn1 (id) {
      let bid = document.getElementById(`ho-${id}`)
      let xia = document.getElementById('xia')
      let le = bid.offsetLeft
      xia.style.left = le + 4 + 'px'
      let hei = document.getElementsByClassName('hei')
      for (var i = 0; i < hei.length; i++) {
        hei[i].style.color = '#999'
      }
      bid.style.color = '#000'
      // console.log(le)
    },
    rescinemasList () {
      this.arr = this.cinemasList
      if (this.value1 !== 0) {
        this.arr = []
        for (let i = 0; i < this.cinemasList.length; i++) {
          if (this.value1 === this.cinemasList[i].districtName) {
            this.arr.push(this.cinemasList[i])
          }
        }
      }
    },
    getNew () {
      let _this = this
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
          _this.rescinemasList()
        })
    }
  },
  created: function () {
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
        this.arr = response.data.data.cinemas
        this.cinemasList = this.arr
        let tmp = this.cinemasList.map(tiem => {
          return tiem.districtName
        })
        let diqu = Array.from(new Set(tmp))
        for (var index = 0; index < diqu.length; index++) {
          this.option1.push({ text: String(diqu[index]), value: String(diqu[index]) })
        }
        console.log(this.option1)
      })
  },
  watch: {
    value1 (a) {
      this.getNew()
    }
  }
}
</script>

<style lang="scss">
.page-movie {
  height: 100%;
  overflow: hidden;
  .cinemasUl {
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    .cinemasLi {
      margin-left: 15px;
      height: 90px;
      .list-item-container {
        height: 118px;
        .list-item-in {
          // height: 104px;
          color: #000;
          text-decoration: none;
          display: block;
          position: relative;
          padding-top: 15px;
          .list-title-warper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2px;
            .list-title-left {
              .list-title {
                overflow: hidden;
                text-overflow: ellipsis;
                vertical-align: top;
                margin-right: 5px;
                font-size: 14px;
              }
            }
            .list-price {
              line-height: 24px;
              color: #ff2e62;
              font-size: 15px;
              font-weight: 400;
              margin-right: 15px;
            }
          }
          .list-address {
            position: relative;
            padding-right: 15px;
            .list-location {
              width: 270px;
              color: #666;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 13px;
            }
          }
          .list-status {
            margin-top: 5px;
            display: flex;
            .tpp-lbl-outline {
              color: #ccc;
              font-size: 10px;
              position: relative;
              margin: 2px;
              padding: 1px;
              border: #ccc solid 1px;
              border-radius: 3px;
              text-align: center;
            }
          }
          .list-activity {
            .activity-item {
              line-height: 15px;
              color: #999;
              font-size: 12px;
              margin-top: 4.87px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              .hui {
                background-color: #ff9c1c;
                color: #fff;
                border: #ff9c1c 1px solid;
                border-radius: 5px;
              }
            }
          }
        }
        .line {
          margin-right: 15px;
          height: 0.5px;
          background: #ccc;
          width: 300px;
        }
      }
    }
  }
  .heder {
    height: 47px;
    font-size: 14px;
    overflow-x: auto;
    ul {
      display: flex;
      margin-top: 10px;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #999;
        flex-shrink: 0;
        h1 {
          font-weight: 600;
        }
        .zt {
          color: #000;
        }
      }
    }
    .xiahuaxian {
      height: 4px;
      margin-top: 4px;
      position: relative;
      p {
        width: 20px;
        height: 4px;
        background: #ff2e62;
        border-radius: 4px;
        position: absolute;
        top: 0;
        left: 20px;
      }
    }
  }
  .select {
    display: flex;
    font-size: 14px;
    align-items: center;
    color: #666;
    margin: 10px 0 10px 10px;
    .iconfont {
      font-size: 8px;
    }
    .icon-sousuo {
      font-size: 20px;
      color: #000;
    }
    .condition {
      display: flex;
      margin-left: 40px;
      p {
        border: 0.5px solid #ccc;
        border-radius: 4px;
        padding: 4px;
        text-align: center;
        line-height: 100%;
        margin-right: 4px;
      }
    }
    .sousuo {
      margin-left: 6px;
    }
  }
}
</style>
