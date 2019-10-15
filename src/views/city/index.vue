<template>
  <div class="page-city">
    <!-- 一级路由，城市选择 -->
    <div class="nav">
      <div></div>
      <h1>城市选择</h1>
      <i class="iconfont icon-error" @click="goback"></i>
    </div>
    <div class="xuanz" ref="box">
      <div>
        <p>当前</p>
        <ul>
          <li>北京</li>
        </ul>
      </div>
      <div>
        <p>GPS</p>
        <ul>
          <li>北京</li>
        </ul>
      </div>
      <div>
        <p>热门</p>
        <ul>
          <li v-for="item in remen" :key="item.cityId">{{item.name}}</li>
        </ul>
      </div>
      <div :id="`ho-${item.py}`" v-for="item in cityList" :key="item.py">
        <p>{{item.py}}</p>
        <ul>
          <li v-for="city in item.list" :key="city.cityId">{{city.name}}</li>
        </ul>
      </div>
      
    </div>
    <ul class="abc">
        <li>当前</li>
        <li>GPS</li>
        <li>热门</li>
        <li v-for="item in cityList" :key="item.py" @click="fn1(item.py)">{{item.py}}</li>
      </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'city',
  data () {
    return {
      cityList: [],//所有城市列表
      remen:[] //热门城市
    }
  },
  methods: {
    goback () {
      this.$router.back()
    },
     fn1(py) {
       let dom = document.getElementById(`ho-${py}`)
       let top=dom.offsetTop
       this.$refs.box.scrollTop=top
     }
  },

  created () {
    axios.get('https://m.maizuo.com/gateway?k=5048855', {
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"157085205520267950670338"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(response => {
      // console.log( response.data.data.cities)
      let arr = response.data.data.cities
      let res = []
      let rm = []
      arr.forEach(city => { // 循环
        let sz = city.isHot//拿到热门城市的编号
        if(sz>0){
          rm.push(city)//判断大于0就是热门城市就push到rm数组中
        }

        let py = city.pinyin.charAt(0).toUpperCase()// 循环拿到没一项的首字母
        let index = res.findIndex(item => item.py === py)// 判断方式
        if (index > -1) { // 判断这个首字母在数组中是否存在
          res[index].list.push(city)// 存在就把这个城市直接添加到list这个数组中
        } else {
          let obj = {// 不存在就再开启一个对象 把城市存到这个对象的list数组中
            py: py,
            list: [city]
          }
          res.push(obj)
        }
      })
      this.cityList = res.sort((a, b) => { // 升降排序
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
      this.remen=rm
       //console.log(rm)
    })
  },
}
</script>
<style lang="scss">
.page-city {
  height: 100%;
  display: flex;
  flex-direction: column;
  .nav {
    height: 45px;
    display: flex;
    justify-content: space-between;
    margin-right: 8px;
    align-items: center;
    font-size: 16px;

    .icon-error {
      font-size: 26px;
      color: #777;
    }
  }
  .xuanz {
    flex: 1;
    overflow: auto;
    position: relative;

    div {
      p {
        font-size: 12px;
        padding: 9px 12px;
        background: #eee;
        color: #777;
      }
      li {
        color: #777;
        font-size: 16px;
        padding: 12px 12px 12px 15px;
      }
    }
  }
  .abc {
      position: absolute;
      width: 40px;
      text-align: center;
      right: 0;
      top: 57px;
      color: #1394f3;
      font-size: 12px;

      li {
        line-height: 18px;
      }
    }
}
</style>
