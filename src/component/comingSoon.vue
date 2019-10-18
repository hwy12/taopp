<template>
<!-- 即将上映 -->
  <div class="film-list">
    <ul>
      <router-link tag="li" :to="`/film/${film.filmId}`" v-for="film in filmList" :key="film.filmId">
            <div class="left">
          <img :src="film.poster" alt />
        </div>
        <div class="center">
          <div class="name">{{ film.name }}</div>
          <div class="grade" style="visibility: hidden">
            淘票票评分
            <span>{{ film.grade }}</span>
          </div>
          <div class="actors">导演：{{ film.director }}</div>
          <div class="detail">{{ film.nation }} | {{ film.runtime }}分钟</div>
        </div>
        <router-link class="right"  to="/movie/111">
          <div>
            <div class="buy">预售</div>
          </div>
        </router-link>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ComingSoon',

  computed: {
    ...mapState('film', ['filmList'])
  },

  methods: {
    ...mapActions('film', ['getFilmList'])
  },

  created () {
    this.getFilmList({
      type: 2
    })
  }
}
</script>

<style lang="scss">
@import '../assets/styles/common/mixins.scss';
  .film-list {
    overflow: auto;

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
          background: #1d8622;
          border-radius: 13px;
          text-align: center;
          color: #fff;
          line-height: 26px;
          align-content: center;
          font-size: 12px;
        }
      }
    }
  }
</style>
