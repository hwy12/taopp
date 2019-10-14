<template>
    <div class="page-home">
        <!-- 一级路由，首页 -->
        <router-view></router-view>
        <ul class="navbar">
            <router-link tag="li" to="/films">热映</router-link>
            <router-link tag="li" to="/cinemas">影院</router-link>
            <router-link tag="li" to="/center">我的</router-link>
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
    .navbar{
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}
</style>
