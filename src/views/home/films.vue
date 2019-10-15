<template>
  <div class="page-home">
    <!-- 二级路由，影片列表 -->

    <!-- head 头部 -->

    <div class="head">
      <!-- city 城市 -->

      <div class="city i-logo">
        <div>北京</div>
        <span class="arrow"></span>
      </div>

      <!-- Tabt 切换 -->

      <div class="tablist">
        <ul>
          <li>正在热映</li>
          <li>即将上映</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.page-home {
  .head {
    height: 50px;
    display: flex;

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

      .arrow:after {
        content: "";
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #333;
        display: block;
        position: absolute;
        margin: -1px 0 0 -4px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
      }
    }
  }
  .tablist {
    ul {
      display: flex;
      justify-content: space-between;

      li {
        height: 50px;
        line-height: 50px;
        padding: 0 15px;
        color: #777;
      }
    }
  }
}
</style>
