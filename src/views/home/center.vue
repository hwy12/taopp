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
        <li>
          <i class="iconfont icon-dianying"></i>
          <span>电影票</span>
        </li>
        <li>
          <i class="iconfont icon-wodeyouhuijuan"></i>
          <span>优惠券</span>
        </li>
      </ul>
    </div>

    <!-- center-nav  end -->
    <div class="center-main">
      <div class="center-card">
        <p>淘票票乐影卡</p>
        <span>></span>
      </div>

      <div class="center-card">
        <p>帮助与反馈</p>
        <span>
          <i class="chat">咨询票小蜜</i>>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-home {
  height: 667px;
  background: #f5f5f5;
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
    background: #fff;
    ul {
      display: flex;
      justify-content: space-around;
      margin: 0 10px 10px 10px;
      border-bottom: 1px solid #bcbcbc;
      padding-bottom: 10px;
      padding-top: 50px;

      li {
        display: flex;
        flex-direction: column;
        text-align: center;

        &:first-child .iconfont {
          font-size: 27px !important;
          color: #ff4d64 !important;
        }

        &:last-child .iconfont {
          font-size: 27px !important;
          color: #fea54c !important;
        }

        span {
          font-size: 12px;
          color: #bcbcbc;
          margin-top: 10px;
        }
      }
    }
  }

  .center-main {
    background: #fff;
    .center-card {
      display: flex;
      justify-content: space-between;
      margin: 0 10px 0 10px;
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      border-bottom: 1px solid #bcbcbc;

      span {
        color: #bcbcbc;
      }

      &:last-child {
        border-bottom: none;
      }

      .chat {
        font-size: 12px;
      }
    }
  }
}
</style>
