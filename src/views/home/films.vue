<template>
    <div class="page-home">
        <!-- 二级路由，影片列表 -->

         <!-- head 头部 -->

        <div class="head">

            <!-- city 城市 -->

            <div class="city i-logo">
                <div>北京</div>            
                <span></span>             
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
            height: 42px;
            

            .i-logo{ 
                background-image: url(//gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg);
                background-size: 25px 25px;
                background-repeat: no-repeat;
                background-position: 15px;
                padding-left: 50px;
            }
            .city{
                width: 85px;
                line-height: 42px;
                display: inline-block;

                div{
                    display: inline-block;
                }
            }
        }
        .tablist{
            display: inline-block;

            li{

            }
        }
    }
</style>