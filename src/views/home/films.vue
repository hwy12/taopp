<template>
  <div class="page-home">
    <!-- 二级路由，影片列表 -->

    <!-- head 头部 -->

    <div class="head">
      <!-- city 城市 -->

      <router-link to="/city" class="city i-logo">
        <div>北京</div>
        <i class="iconfont icon-xiajiantou"></i>
      </router-link>

      <!-- Tabt 切换 -->

      <div class="tablist">
        <ul>
          <li :class="{'active':curFilmType === 'nowPlaying'}" @click="chgFilmType('nowPlaying')">正在热映</li>
          <li :class="{'active':curFilmType === 'comingSoon'}" @click="chgFilmType('comingSoon')">即将上映</li>
        </ul>

        <!-- 控制滑块的滑动 -->
        <div class="active-line" :style="{'left': curFilmType === 'nowPlaying' ? '0' : '50%'}">
          <span></span>
        </div>
      </div>
    </div>

    <!-- 影片列表的数据 使用动态组件来控制 -->
    <component :is="curFilmType" />

  </div>
</template>

<script>

// 引入上映、热映组件
import nowPlaying from '../../component/nowPlaying'
import comingSoon from '../../component/comingSoon'

export default {
  name: 'Films',

  // 注册局部组件

  components: {
    nowPlaying,
    comingSoon
  },

  data () {
    return {
      curFilmType: 'nowPlaying' // 默认当前影片类型
    }
  },

  methods: {
    /**
     * 切换当前影片类型
     */
    chgFilmType (type) {
      this.curFilmType = type
    }
  }

}
</script>

<style lang="scss">
@import '../../assets/styles/common/mixins.scss';
.page-home {
  .head {
    height: 50px;
    display: flex;
    @include border-bottom;

    .i-logo {
      background-image: url(//gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg);
      background-size: 25px 25px;
      background-repeat: no-repeat;
      background-position: 15px;
      padding-left: 50px;
    }
    .city {
      width: 85px;
      line-height: 50px;

      div {
        display: inline-block;
      }

      i{
        margin-left: 5px;
      }
    }
  }
  .tablist {
    position: relative;

    ul {
      display: flex;
      justify-content: space-between;

      li {
        height: 50px;
        line-height: 50px;
        padding: 0 15px;
        color: #777;

        &.active {
          color: #ff2e62;
        }
      }
    }
    .active-line{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      height: 2px;
      transition: left 0.5s;

      span{
        display: block;
        width: 16px;
        height: 2px;
        background:  #ff2e62;
        margin: auto;
      }
    }
  }
}
</style>
