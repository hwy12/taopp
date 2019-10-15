<template>
  <div class="film-list">
    <!-- 正在热映 -->
    <ul>
      <li>
        <div class="left">
          <img src="https://static.maizuo.com/pc/v5/usr/movie/ab0ee357e3fb0718059df8d8717a1bf7.jpg?x-oss-process=image/quality,Q_70" alt="">
        </div>
        <div class="center">
          <div class="name">中国机长</div>
          <div class="grade">
            淘票票评分
            <span>7</span>
          </div>
          <div class="actors">主演：张三、李四、王麻子、赵倩、随礼、周五、郑旺</div>
          <div class="detail">中国大陆 | 111分钟</div>
        </div>
        <div class="right">
          <div>
            <button class="buy">购票</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NowPlaying'
}
</script>

<style lang="scss">
@import '../assets/styles/common/mixins.scss';
  .film-list {
    ul{
      margin-left: 15px;
    }
    
     li {
      @include border-bottom;
      display: flex;
      height: 94px;
      padding: 15px 15px 15px 0;
      overflow: hidden;
      .left {
        width: 66px;
        flex-shrink: 0; //不被压迫
        img {
          width: 100%;
        }
      }
      .center {
        flex: 1;
        padding: 0 10px;
        line-height: 1.5;
        overflow: hidden;
        > div {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .right {
        width: 50px;
        flex-shrink: 0;
        display: flex;
        align-items: center;

        .buy {
          width: 50px;
          height: 26px;
          border: none;
          background: #ff2e62;
          border-radius: 13px; 
          color: #fff;
          line-height: 26px;
          align-content: center;
        }
      }
    }
  }
</style>