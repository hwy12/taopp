<template>
  <div class="page-city">
    <!-- 一级路由，城市选择 -->
    <div class="nav">
      <div></div>
      <h1>城市选择</h1>
      <i class="iconfont icon-error" @click="goback"></i>
    </div>
    <div class="xuanz">
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
          <li>北京</li>
        </ul>
      </div>
      <div>
        <p>A</p>
        <ul>
          <li>北京</li>
        </ul>
      </div>
      <ul class="abc">
        <li>当前</li>
        <li>GPS</li>
        <li>热门</li>
        <li>A</li>
        <li>A</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'city',
  methods: {
    goback () {
      this.$router.back()
    },
    citysj: function () {}
  },

  created () {
    axios.get('https://m.maizuo.com/gateway?k=5048855', {
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"157085205520267950670338"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(response => {
      let result = response.data
      console.log(result)
    })
  }
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
    .abc {
      position: absolute;
      width: 40px;
      text-align: center;
      right: 0;
      top: 12px;
      color: #1394f3;
      font-size: 12px;

      li {
        line-height: 18px;
      }
    }
  }
}
</style>
