<template>
    <div class="page-home">
        <!-- 一级路由，首页 -->
        <router-view class="box"></router-view>
        <ul class="navbar">
            <router-link tag="li" to="/films"><i class="iconfont icon-dianying"></i><p>热映</p></router-link>
            <router-link tag="li" to="/cinemas"><i class="iconfont icon-yingyuana"></i><p>影院</p></router-link>
            <router-link tag="li" to="/center"><i class="iconfont icon-wode"></i><p>我的</p></router-link>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.page-home{
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .box{
        flex: 1;
    }
    .navbar{
        height: 50px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-around;
        background: #fff;
        z-index: 999;
        font-size: 12px;
        color: #777;

        .iconfont{
            font-size: 20px;
        }
        .router-link-exact-active{
            color: #ff4d64;
        }
    }
}
</style>
