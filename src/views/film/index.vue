<template>
  <div class="page-film">
    <!-- 一级路由，影片详情 -->
    <div class="bannner">
      <router-link class="goBack" to="/films">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
        />
      </router-link>
      <img :src="filmdata.poster" />
    </div>

    <!--bannner  end  -->

    <div class="film-detail">
      <div class="film-name">
        <span class="name">{{ filmdata.name }}</span>
        <span class="item">{{ filmdata.filmType && filmdata.filmType.name }}</span>
        <span class="grade" v-if="filmdata.grade">{{ filmdata.grade }}分</span>
      </div>

      <div class="film-category">{{ filmdata.category }}</div>

      <div class="film-premiere-time">{{formatTime( filmdata.premiereAt )}} 上映</div>

      <div class="film-nation-runtime">{{ filmdata.nation }} | {{ filmdata.runtime }}</div>

      <!-- 影片简介 -->
      <!-- <div
        class="film-synopsis grey-text hidde"
        v-if="isShow"
      >机组执行航班任务时，在万米高空突遇驾驶舱风挡玻璃爆裂脱落、座舱释压的极端罕见险情，生死关头，他们临危不乱、果断应对、正确处置，确保了机上全部人员的生命安全，创造了世界民航史上的奇迹。</div>-->

      <div
        class="film-synopsis grey-text"
        :style="{ height : isShow ?  '38px' : '' }"
      >{{ filmdata.synopsis }}</div>

      <!-- 影片简介小图标的方向 -->
      <div class="toggle" @click="clickToggle">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
          v-if="isShow"
        />

        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
          class="upper"
          v-else
        />
      </div>
    </div>

    <!-- film-detail  end -->

    <div class="actors">
      <div class="actors-title-bar">
        <span class="actors-title-text">演职人员</span>
      </div>

      <div class="row-scroll-wrapper">
        <ul class="row-scroll-items-nav">
          <li v-for="(item, index) in filmdata.actors" :key="index">
            <img :src="item.avatarAddress" alt />
            <p class="actors-name">{{ item.name }}</p>
            <p class="actors-role">{{ item.role }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- actors  end  -->

    <div class="photos">
      <div class="photos-title-bar">剧照</div>

      <div class="photo-wrap">
        <ul class="photo-list">
          <li v-for="(item, index) in filmdata.photos" :key="index">
            <img :src="item" />
          </li>
        </ul>
      </div>
    </div>

    <!-- photos  end -->

    <router-link class="goSchedule" tag="div" to="/hello">选座购票</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'filmDetail',

  data () {
    return {
      isShow: true,
      filmdata: {}
    }
  },

  methods: {
    clickToggle () {
      this.isShow = !this.isShow
    },
    formatTime (date) {
      let newDate = date * 1000
      return moment(newDate).format('YYYY-MM-HH')
    }
  },
  created () {
    // console.log(this.$route.params.id);
    // var _this = this;
    this.formatTime()
    axios
      .get('https://m.maizuo.com/gateway', {
        params: {
          //   k: 765611,
          filmId: this.$route.params.id
        },
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"157070578019774029431301"}',
          'X-Host': 'mall.film-ticket.film.info'
        }
      })
      .then(response => {
        let result = response.data
        this.filmdata = result.data.film
        // console.log(this.filmdata);
      })
  }
}
</script>

<style lang="scss">
.page-film {
  background: #f4f4f4;
  overflow-y: auto;

  .bannner {
    height: 210px;

    .goBack {
      height: 30px;
      position: absolute;
      top: 5px;
      left: 5px;
      img {
        width: 30px;
        height: 30px;
      }
    }

    img {
      width: 375px;
      height: 210px;
    }
  }

  .film-detail {
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;

    .film-name {
      span {
        vertical-align: middle;
      }
      .name {
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
      }

      .item {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        display: inline-block;
      }

      .grade {
        font-size: 18px;
        text-align: right;
        color: #ffb232;
        display: inline-block;
        position: absolute;
        right: 20px;
      }
    }

    .film-category {
      font-size: 13px;
      color: #797d82;
      margin-top: 10px;
    }

    .film-premiere-time {
      font-size: 13px;
      color: #797d82;
      margin-top: 10px;
    }

    .film-nation-runtime {
      font-size: 13px;
      color: #797d82;
      margin-top: 10px;
    }

    .hidde {
      height: 38px !important;
      overflow: hidden;
    }

    .film-synopsis {
      transition: all 2s;
      overflow: hidden;
    }

    .film-synopsis {
      margin-top: 16px;
    }

    .grey-text {
      font-size: 13px;
      color: #797d82;
      line-height: 20px;
    }

    .toggle {
      text-align: center;
      display: block;
      height: auto;
      width: 20px;
      margin: auto;
      line-height: normal;

      img {
        width: 8px;
        margin: auto;
      }
    }

    .upper {
      transform: rotate(180deg);
    }
  }

  .actors {
    margin-top: 10px;
    background-color: #fff;

    .actors-title-bar {
      width: 100%;

      .actors-title-text {
        font-size: 16px;
        text-align: left;
        color: #191a1b;

        display: inline-block;
        height: 22.5px;
        line-height: 22px;

        margin: 15px;
      }
    }

    .row-scroll-wrapper {
      width: 100%;
      //   height: 140px;
      background: #fff;
      overflow: hidden;
      overflow-x: auto;

      &::-webkit-scrollbar {
        display: none; /*隐藏滚动条*/
      }

      .row-scroll-items-nav {
        display: flex;
        // width: 500px;
        padding-right: 15px;

        li {
          margin-left: 15px;

          &:last-child {
            padding-right: 15px;
          }
          img {
            width: 84px;
          }

          .actors-name {
            padding-top: 10px;
            font-size: 12px;
            color: #191a1b;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 80px;
            white-space: nowrap;
          }

          .actors-role {
            font-size: 10px;
            color: #797d82;
            text-align: center;
            line-height: 26px;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 80px;
            white-space: nowrap;
          }
        }
      }
    }
  }

  .photos {
    background: #fff;
    margin-top: 10px;
    margin-bottom: 60px;
    .photos-title-bar {
      font-size: 16px;
      text-align: left;
      color: #191a1b;

      display: inline-block;
      height: 22.5px;
      line-height: 22px;

      margin: 15px;
    }

    .photo-wrap {
      width: 100%;
      height: 115px;
      overflow: hidden;
      overflow-x: auto;
      &::-webkit-scrollbar {
        display: none; /*隐藏滚动条*/
      }

      .photo-list {
        height: 115px;
        padding-bottom: 15px;
        display: flex;

        padding-right: 15px;

        li {
          margin-left: 15px;

          &:last-child {
            padding-right: 15px;
          }
          img {
            width: 150px;
          }
        }
      }
    }
  }

  .goSchedule {
    height: 49px;
    position: fixed;
    bottom: 0px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
  }
}
</style>
