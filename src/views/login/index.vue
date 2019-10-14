<template>
  <div class="page-login">
    <!-- 一级路由，注册也 -->

    <div class="register-logo">
      <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" />
    </div>
    <!-- logo  end -->

    <form class="register-form">
      <div class="form-tel">
        <input type="text" placeholder="请输入手机号码/用户名" />
      </div>

      <div class="form-tel">
        <input type="password" placeholder="请输入密码" />
      </div>

      <!--register-form  end  -->

      <div class="tel-erro">
        <p>用户名或密码错误,请重新输入</p>
      </div>

      <div class="tel-empty"></div>

      <!--tel-erro  end  -->

      <div class="register-button">
        <button type="submit">登录</button>
      </div>
    </form>
  </div>
</template>
<style lang="scss">
.page-login {
  .register-logo {
    display: flex;
    justify-content: center;
    height: 120px;
    position: relative;

    img {
      width: 80px;
      position: absolute;
      bottom: 0;
    }
  }

  .register-form {
    .form-tel {
      margin-top: 40px;
      height: 26px;
      margin-left: 20px;
      margin-right: 20px;
      border-bottom: 1px solid #ff5000;

      input {
        outline: none;
        border: none;
        height: 20px;
        width: 290px;
        font-size: inherit;
        color: #333;
      }
    }

    .tel-erro {
      display: flex;
      justify-content: center;
      // display: none;

      p {
        width: 320px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background: rgb(0, 0, 0, 0.6);
        color: #fff;
        margin-top: 16px;
        margin-bottom: 16px;
        border-radius: 6px;
      }
    }

    .tel-empty {
      height: 60px;
      display: none;
    }

    .register-button {
      display: flex;
      justify-content: center;

      button {
        width: 330px;
        height: 45px;
        border-radius: 22px;
        background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
        border: none;
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>
