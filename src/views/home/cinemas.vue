<template>
    <div class="page-home-filmas">
        <!-- 二级路由页，影院列表 -->
        <router-view></router-view>
        <ul>
            <li class="cinemasLi">
                <div class="list-item-container">
                    <a href="#" class="list-item-in list-item-anchor">
                        <h3 class="list-title-warper">
                            <div class="list-title-left">
                                <span class="list-title ">深圳博纳国际影城华强店</span>
                            </div>
                            <span class="list-price">￥19.9起</span>
                        </h3>
                        <div class="list-address">
                            <div class="list-location">福田区华强北茂业百货九楼</div>
                        </div>
                        <div class="list-status">
                            <div class="tpp-lbl tpp-lbl-outline">改签</div>
                            <div class="tpp-lbl tpp-lbl-outline">观影小食</div>
                            <div class="tpp-lbl tpp-lbl-outline">3D眼镜收费</div>
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
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Cinemas',
  data () {
    return {
      cinemasList: []
    }
  },
  created: function () {
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        cityId: 440300,
        ticketFlag: 1,
        k: 1218797
      },
      headers: {
        'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"157052860619327352833105"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    })
      .then(response => {
        this.cinemasList = response
        console.log(this.cinemasList)
        //    console.log(response)
      })
  }
}

</script>
<style lang="scss">
.page-home-filmas{
    flex: 1;
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
                    margin-bottom:2px;
                    .list-title-left{
                        .list-title{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        vertical-align: top;
                        margin-right: 12px;
                        }
                    }
                    .list-price{
                        line-height: 24px;
                        color: #ff2e62;
                        margin-right:1.25px;
                        font-size: 15px;
                        font-weight: 400;
                        margin-right: 25px;
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
                        color: #999;
                        font-size: 12px;
                        position: relative;
                        margin: 2px;
                        // border: #666 solid 1px;
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
                        }
                    }
                }
            }
            .line{
                margin-right: 15px;
                height:0.5px;
                background: #666;
                width:300px;
            }
        }

    }
}
</style>
