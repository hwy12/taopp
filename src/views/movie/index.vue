<template>
  <div class="page-movie">
    <!-- 一级路由，电影影院选择列表 -->

    <!-- 日期选择 -->
    <div class="heder">
     <ul>
       <li @click="fn1('a')">
         <h1 id="ho-a" class="hei zt">今天</h1>
         <span>10月16日</span>
       </li>
       <li @click="fn1('b')">
         <h1 id="ho-b" class="hei">明天</h1>
         <span>10月16日</span>
       </li>
       <li @click="fn1('c')">
         <h1 id="ho-c" class="hei">后天</h1>
         <span>10月16日</span>
       </li>
       <li @click="fn1('d')">
         <h1 id="ho-d" class="hei">明天</h1>
         <span>10月16日</span>
       </li>
       <li @click="fn1('e')">
         <h1 id="ho-e" class="hei">明天</h1>
         <span>10月16日</span>
       </li>
       <li @click="fn1('f')">
         <h1 id="ho-f" class="hei">明天</h1>
         <span>10月16日</span>
       </li>
     </ul>
     <div class="xiahuaxian">
       <p id="xia"></p>
     </div>
    </div>
    <!-- 城市选择 -->
    <div class="select">
      <div class="city">
        <router-link tag="p" to="/city">城市<i class="iconfont icon-xiajiantou"></i></router-link>
      </div>
      <div class="condition">
        <p>全城<i class="iconfont icon-xiajiantou"></i></p>
        <p>筛选<i class="iconfont icon-xiajiantou"></i></p>
        <p>综合排序<i class="iconfont icon-xiajiantou"></i></p>
      </div>
      <div class="iconfont icon-sousuo sousuo"></div>
    </div>
  </div>
</template>

<script>
export default {
  // mounted(){
  //    fn1(id) {
  //     let bid=document.getElementById(id);
  //     let xia=document.getElementById(xia);
  //     let le=bid.clientLeft;
  //     xia.style.left=le;
  //   }
  // }
  // data(){
  //   return {
  //     left:''
  //   }
  // },
  methods: {
    fn1 (id) {
      let bid = document.getElementById(`ho-${id}`)
      let xia = document.getElementById('xia')
      let le = bid.offsetLeft
      xia.style.left = le + 4 + 'px'
      let hei = document.getElementsByClassName('hei')
      for (var i = 0; i < hei.length; i++) {
        hei[i].style.color = '#999'
      }
      bid.style.color = '#000'
      // console.log(le)
    }
  }
}
</script>

<style lang="scss">
.page-movie{
  height: 100%;
  overflow: hidden;
  .heder{
    height: 47px;
    font-size: 14px;
    overflow-x: auto;
    ul{
      display: flex;
      margin-top: 10px;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #999;
        flex-shrink: 0;
        h1{
          font-weight: 600;
        }
        .zt{
          color: #000;
        }
    }
  }
  .xiahuaxian{
    height: 4px;
    margin-top: 4px;
    position: relative;
       p{
        width: 20px;
        height: 4px;
        background: #ff2e62;
        border-radius: 4px;
        position: absolute;
        top: 0;
        left: 20px;
      }
    }
 }
 .select{
   display: flex;
   font-size: 14px;
   align-items: center;
   color: #666;
   margin:10px 0 10px 10px;
   .iconfont{
     font-size: 8px;
   }
   .icon-sousuo{
       font-size: 20px;
       color: #000;
     }
   .condition{
     display: flex;
     margin-left: 40px;
     p{
       border: 0.5px solid #ccc;
       border-radius: 4px;
       padding: 4px;
       text-align: center;
       line-height: 100%;
       margin-right:4px ;
     }
   }
   .sousuo{
     margin-left: 6px;
   }
 }
}

</style>
