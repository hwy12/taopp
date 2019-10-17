<template>
    <div class="page-home-filmas">
        <!-- 二级路由页，影院列表 -->
        <router-view></router-view>
        <ul class="cinemasUl">
            <router-link tag="li" :to="`/${cinemas.cinemaId}/cinema`" class="cinemasLi" v-for='cinemas in cinemasList' :key='cinemas.cinemaId'>
                <div class="list-item-container">
                    <a  class="list-item-in list-item-anchor" >
                        <h3 class="list-title-warper">
                            <div class="list-title-left">
                                <span class="list-title ">{{cinemas.name}}</span>
                            </div>
                            <span class="list-price"><i>￥</i>{{cinemas.lowPrice/100}}<i> 起</i></span>
                        </h3>
                        <div class="list-address">
                            <div class="list-location">{{cinemas.address}}</div>
                        </div>
                        <div class="list-status">
                            <div class="tpp-lbl tpp-lbl-outline">改签</div>
                            <div class="tpp-lbl tpp-lbl-outline">观影小食</div>
                            <div class="tpp-lbl tpp-lbl-outline">可停车</div>

                        </div>
                        <ul class="list-activity">
                            <li class="activity-item">
                                <span class="hui">惠</span>
                                中国机长等5部影片特惠
                            </li>
                        </ul>
                    </a>
                    <div class="line"></div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Cinemas',
  data () {
    return {
      cinemasList: [],
      id: 111
    }
  },
  methods: {

  },
  created: function () {
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        cityId: 440300,
        ticketFlag: 1,
        k: 4297776
      },
      headers: {
        'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"157052860619327352833105"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    })
      .then(response => {
        this.cinemasList = response.data.data.cinemas
      })
  }
}

</script>
<style lang="scss">
.page-home-filmas{
    height: 100%;
    flex: 1;
    .cinemasUl{
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
         .cinemasLi{
            margin-left: 15px;
            height:120px;
            .list-item-container{
                height: 118px;
                .list-item-in {
                    height: 104px;
                    color: #000;
                    text-decoration: none;
                    display: block;
                    position: relative;
                    padding-top: 15px;
                    .list-title-warper{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom:2px;
                        .list-title-left{
                            .list-title{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            vertical-align: top;
                            margin-right: 5px;
                            font-size: 14px;
                            }
                        }
                        .list-price{
                            line-height: 24px;
                            color: #ff2e62;
                            font-size: 15px;
                            font-weight: 400;
                            margin-right: 15px;
                        }
                    }
                    .list-address{
                        position: relative;
                        padding-right: 15px;
                        .list-location {
                            width: 270px;
                            color: #666;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            font-size:13px;
                        }
                    }
                    .list-status{
                        margin-top: 5px;
                        display: flex;
                        .tpp-lbl-outline{
                            color: #ccc;
                            font-size: 10px;
                            position: relative;
                            margin: 2px;
                            padding: 1px;
                            border: #ccc  solid 1px;
                            border-radius: 3px;
                            text-align: center;
                        }
                    }
                    .list-activity{
                        .activity-item{
                            line-height: 15px;
                            color: #999;
                            font-size: 12px;
                            margin-top: 4.87px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            .hui{
                                background-color: #ff9c1c;
                                color: #fff;
                                border:  #ff9c1c 1px solid;
                                border-radius: 5px;
                            }
                        }
                    }
                }
                .line{
                    margin-right: 15px;
                    height:0.5px;
                    background: #ccc;
                    width:300px;
                }
            }

        }
    }
}
</style>
