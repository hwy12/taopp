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
    </div>
  </div>
</template>
<script>
export default {
  name: 'city',
  methods: {
    goback () {
      this.$router.back()
    }
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
}
</style>
