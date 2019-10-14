<template>
  <div class="page-home">
    <!-- 二级路由，个人中心页 -->

    <div class="center-header">
      <div>
        <img src="http://gw.alicdn.com/tfs/TB1GJJtd2WG3KVjSZPcXXbkbXXa-180-180.png_.webp" alt />
        <p>张三</p>
      </div>
    </div>

    <!--center-header  end  -->

    <div class="center-nav">
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-home {
  .center-header {
    height: 150px;
    background: #ff2e62;
    padding-top: 20px;
    padding-left: 20px;
    div {
      display: flex;
      height: 72.5px;

      img {
        width: 72.5px;
        height: 72.5px;
        border-radius: 50%;
      }

      p {
        line-height: 72.5px;
        margin-left: 10px;
        color: #fff;
        font-size: 20px;
      }
    }
  }

  .center-nav {
    height: 110px;
  }
}
</style>
