<template>
  <div class="page-cinema">
    <!-- 一级路由，影院详情 -->
    <div class="cinema-information">
      <div class="cinema-name">{{cinemaDetail.name}}</div>
      <div class="cinema-address">{{cinemaDetail.address}}</div>
    </div>
    <div class="card-wrap">
      <div class="card-logo iconfont icon-card"></div>
      <div class="card-container">
        <div class="card-title">联合优惠专区</div>
        <div class="card-content">银行、运营商特惠</div>
      </div>
      <div class="jiantou-logo iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></div>
    </div>
    <div class="backgroundImg abc" :style="`background:url(${imgList.poster})`" v-if="imgList.poster">
    </div>
    <div class="swiper-container box" ref="slider" >
        <div class="swiper-wrapper" v-if="filmsList[this.showDateIndex]">
          <div class="swiper-slide" v-for="(films,index) in filmsList" :key="index">
            <!-- <img :src="films.poster " @click="clickfun(index,$event)" ref="img" /> -->
            <img :src="films.poster " ref="img" />
          </div>
        </div>
    </div>

    <div class="movie-name" v-if="filmsList[this.showDateIndex]">
      <a href>
        <span class="showname">{{filmsList[this.showDateIndex].name}}</span>
        <span class="score-name">淘票票评分</span>
        <span class="star-remark">{{filmsList[this.showDateIndex].grade}}分</span>
        <p>{{filmsList[this.showDateIndex].runtime}}分钟 | {{filmsList[this.showDateIndex].category}} | {{formatActors(filmsList[this.showDateIndex].actors)}}</p>
      </a>
    </div>
    <ul class="dataUl" id="dataUl">
      <li v-for="(date,index) in showDate" :key="index" @click="getShowDateIndex(index)">
        <div class="cn-date">{{formatCnDate(date)}}</div>
        <div class="num-date">{{formatNumDate(date)}}</div>
      </li>
      <div id="active-line"></div>
    </ul>
    <ul class="schedules-list">
      <li v-for="schedule in scheduleList" :key="schedule.id">
        <a href="#">
          <div class="item-wrap">
            <div class="item-contain">
              <span class="item-clock">
                {{formatShowAt(schedule.showAt)}}
                <span
                  class="item-type"
                >{{schedule.filmLanguage}} {{schedule.imagery}}</span>
              </span>
              <p>
                <span class="item-price">
                  <span>
                    ￥
                    <span class="price">{{schedule.salePrice/100}}</span>
                  </span>
                </span>
              </p>
            </div>
            <div class="item-contain">
              <span class="item-end">
                {{formatShowAt(schedule.endAt)}}散场
                <span class="item-hall">{{schedule.hallName}}</span>
              </span>
            </div>
          </div>
          <div class="btn-wrap">
            <span class="tpp-btn">购票</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Swiper from 'swiper'
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'CinemaDetail',
  data () {
    return {
      imgList: {},
      active: true,
      filmsList: [], // 影片详情列表数组
      cinemaDetail: [], // 影院详情数组
      scheduleList: [], // 影片播放列表数组
      showDate: [],
      showDateIndex: 0,
      getIndex: 0, // 今天明天日期数据的下标
      filmId: 1, // 影片id
      dateId: 1 // 影片播放列表id
    }
  },
  methods: {
    getShowDateIndex (index) {
      // 点击日期事件
      this.getIndex = index // 动态改变今天明天日期数据的下标
      // console.log(index);
      // console.log(  this.filmsList[this.showDateIndex].showDate)
      this.dateId = this.filmsList[this.showDateIndex].showDate[this.getIndex] // 通过点击日期修改影片播放列表的id
      // console.log(this.filmsList[this.showDateIndex].showDate[this.getIndex]);
      this.filmId = this.filmsList[this.showDateIndex].filmId //
      this.getScheduleList(this.getIndex)
      // let bid = document.getElementById('dataUl')
      let activeLine = document.getElementById('active-line')
      if (this.showDate.length <= 3) {
        activeLine.style.left = 30 + index * 57 + 'px'
      } else {
        activeLine.style.left = 22 + index * 60 + 'px'
      }
    },
    formatCnDate (date) {
      // 处理今天明天时间
      // 今天
      let dateNum = date * 1000
      moment.locale('zh-cn')
      return moment(dateNum).calendar('', {
        // 调用moment插件事件格式化时间
        sameDay: '[今天]',
        nextDay: '[明天]',
        nextWeek: 'ddd',
        lastWeek: 'ddd',
        sameElse: 'ddd'
      })
    },
    formatNumDate (date) {
      let dateNum = date * 1000 // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      moment.locale('zh-cn')
      return moment(dateNum).format('MM-DD')
    },
    formatActors (actors) {
      // 演员列表数据
      let tmp = actors.map(item => {
        return item.name
      })
      return tmp.join('、')
    },
    formatShowAt (time) {
      let date = new Date(time * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      let m =
        date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      return h + ':' + m
    },

    /**
     * 获取影院基本信息
     */
    getCinemaInfo () {
      axios
        .get('https://m.maizuo.com/gateway', {
          // 电影列表
          params: {
            cinemaId: this.$route.params.id,
            k: 5597837
          },
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"157052860619327352833105"}',
            'X-Host': 'mall.film-ticket.film.cinema-show-film'
          }
        })
        .then(response => {
          this.filmsList = response.data.data.films
          this.imgList = response.data.data.films[0]
          console.log(this.imgList, 111)
          this.showDate = this.filmsList[this.showDateIndex].showDate
          this.filmId = this.filmsList[0].filmId
          this.dateId = this.filmsList[0].showDate[0]
          this.getScheduleList() // getScheduleList这个请求需要在获取影院基本信息和获取影片基本信息之后才可以发送
        })
    },
    /*****
     * 获取影片基本信息
     */
    getFilmListByCinema (index) {
      axios
        .get('https://m.maizuo.com/gateway', {
          params: {
            cinemaId: this.$route.params.id,
            k: 5597837
          },
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"157052860619327352833105"}',
            'X-Host': 'mall.film-ticket.cinema.info'
          }
        })
        .then(response => {
          this.cinemaDetail = response.data.data.cinema
          let _this = this
          /* eslint-disable */
          new Swiper(".swiper-container", {
            slidesPerView: 3,
            slideToClickedSlide: true,
            centeredSlides: true,
            on: {
              slideChange: function() {
                // console.log(this.activeIndex);
                _this.showDateIndex = this.activeIndex; //改变影片展示的下标
                _this.showDate = _this.filmsList[_this.showDateIndex].showDate; // 动态生成影片时间展示
                // console.log(_this.showDateIndex);
                _this.dateId = _this.filmsList[_this.showDateIndex].showDate[0];
                _this.filmId = _this.filmsList[_this.showDateIndex].filmId;

                _this.imgList = _this.filmsList[this.activeIndex]; //根据下标得到背景图
                console.log(_this.imgList);
                _this.getScheduleList();
              }
            }
          });
        });
    },
    /****获取影片播放时间表 */
    getScheduleList() {
      axios
        .get("https://m.maizuo.com/gateway", {
          params: {
            filmId: this.filmId,
            cinemaId: this.$route.params.id,
            date: this.dateId,
            k: 5418481
          },
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"157052860619327352833105"}',
            "X-Host": "mall.film-ticket.schedule.list"
          }
        })
        .then(response => {
          this.scheduleList = response.data.data.schedules;
        });
      this.dateId = this.filmsList[this.showDateIndex].showDate[0];
    }
  },
  created: function() {
    this.getCinemaInfo();
    this.getFilmListByCinema();
  }
};
</script>
<style lang="scss">
.page-cinema {
  height: 100%;
  position: relative;
  .abc{
  filter: blur(15px);
  width: 100%;
  height: 120px;
  }
  .box{
position: absolute;
top: 140px
  }
  .cinema-information {
    margin-left: 20px;
    margin-right: 20px;
    overflow: hidden;
    border-bottom: 1px solid #c8c8c8;
    .cinema-name {
      margin-top: 30px;
      font-weight: 700;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .cinema-address {
      font-size: 12px;
      margin-bottom: 8px;
      color: #666;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .card-wrap {
    margin-left: 23px;
    width: 264px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 20px;
    .card-logo {
      color: #ffaf25;
      margin-right: 30px;
      margin-left: 5px;
    }
    .card-title {
      color: #000;
      font-size: 13px;
      margin-bottom: 2px;
    }
    .card-content {
      color: #999;
      font-size: 12px;
      line-height: 1.25;
    }
    .jiantou-logo {
      margin-left: 100px;
      font-size: 12px;
      color: #ccc;
    }
  }
// .backgroundImg {

    
//     }
  .box {
    width: 100%;
    height: 120px;
    
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      // -webkit-box-pack: center;
      // -ms-flex-pack: center;
      // -webkit-justify-content: center;
      justify-content: center;
      // -webkit-box-align: center;
      // -ms-flex-align: center;
      // -webkit-align-items: center;
      align-items: center;
      transition: 300ms;
      transform: scale(0.6);
      img {
        width: 100%;
      }
    }
    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      transform: scale(1);
    }
  }
  // }
  .movie-name {
    width: 320px;
    height: 45px;
    overflow: hidden;
    a {
      display: block;
      text-align: center;
      margin-top: 5px;
      color: #000;
      text-decoration: none;
      margin-left: 10px;
      margin-right: 10px;
      .showname {
        line-height: 1.25;
        font-size: 0.875rem;
        font-weight: 700;
        overflow: hidden;
        word-break: break-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 16.25rem;
        margin-right: 3px;
        max-width: 69.33333333vw;
      }
      .score-name {
        font-size: 12px;
        color: #666;
        margin-right: 3px;
      }
      .star-remark {
        font-size: 14px;
        line-height: 1.25;
        vertical-align: middle;
        color: #ff9c1c;
      }
      p {
        margin-top: 6px;
        color: #666;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .dataUl {
    margin-top: 5px;
    display: flex;
    position: relative;
    li {
      margin-right: 5px;
      margin-left: 20px;
      position: relative;
      .cn-date {
        top: 1px;
        font-weight: 700;
        font-size: 14px;
      }
      .num-date {
        font-size: 12px;
        margin-bottom: 5px;
        margin-top: 2px;
      }
    }
    #active-line {
      position: absolute;
      height: 2px;
      width: 15px;
      top: 35px;
      left: 30px;
      display: block;
      width: 15px;
      height: 2px;
      margin: auto;
      background: #ff2e62;
    }
  }
  .schedules-list {
    margin-top: 10px;
    margin-left: 15px;
    li {
      height: 85px;
      width: 295px;
      border-bottom: #ccc 1px solid;
      margin-right: 25px;
      overflow: hidden;
      a {
        display: block;
        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;
        margin-top: 20px;
        .item-wrap {
          position: relative;
          display: block;
          flex: 1;
          width: 100%;
          overflow: hidden;
          .item-contain {
            align-items: center;
            display: flex;
            justify-content: space-between;
            .item-clock {
              float: left;
              height: 24px;
              line-height: 24px;
              color: #000;
              font-size: 20px;
            }
            .item-type {
              color: #666;
              font-size: 12px;
              margin-left: 10px;
            }
            .item-price {
              flex-shrink: 0;
              color: #ff2e62;
              text-align: right;
              overflow: visible;
              font-size: 12px;
              padding-left: 5px;
              margin-right: 20px;
              .price {
                font-weight: 700;
                font-size: 20px;
              }
            }
            .item-end {
              float: left;
              height: 24px;
              line-height: 24px;
              color: #666;
              font-size: 12px;
              vertical-align: bottom;
            }
            .item-hall {
              color: #666;
              font-size: 12px;
              white-space: normal;
              overflow: hidden;
              margin-bottom: 5px;
            }
          }
        }
        .btn-wrap {
          .tpp-btn {
            color: #ff2e62;
            border: 1px solid #ff2e62;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
