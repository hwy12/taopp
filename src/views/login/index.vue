<template>
  <div class="page-login">
    <!-- 一级路由，注册也 -->

    <div class="register-logo">
      <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" />
    </div>
    <!-- logo  end -->

    <form class="register-form">
      <div class="form-tel">
        <input
          type="tel"
          v-model="phone"
          @focus="inputphoneEnter"
          @blur="inputphoneLeave"
          placeholder="请输入手机号码/账号"
        />
        <p class="inputTip">{{ userPhoneTip }}</p>
      </div>

      <div class="form-tel">
        <input
          type="password"
          v-model="pwd"
          @focus="inputpwdEnter"
          @blur="inputpwdLeave"
          placeholder="请输入密码"
        />
        <p class="inputTip">{{ userPwdTip }}</p>
      </div>

      <router-link tag="p" class="phoneRegister" to="/register">用户注册</router-link>

      <!--register-form  end  -->

      <div class="tel-erro" v-if="isShow">
        <p>用户名或密码错误,请重新输入</p>
      </div>

      <div class="tel-empty" v-if="!isShow"></div>

      <!--tel-erro  end  -->

      <div class="register-button">
        <button type="submit" @click="login()">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      pwd: "",
      userPhoneTip: "",
      userPwdTip: "",
      isShow: false
    };
  },

  methods: {
    inputphoneEnter() {
      this.userPhoneTip = "请输入11位数手机号码";
    },
    inputphoneLeave() {
      this.userPhoneTip = "";
    },

    inputpwdEnter() {
      this.userPwdTip = "请输入密码";
    },
    inputpwdLeave() {
      this.userPwdTip = "";
    },

    login() {
      var _this = this;
      // 根据输入的账号密码查询数据库
      axios
        .get("http://localhost:3000/todos", {
          params: {
            phone: this.phone,
            pwd: this.pwd
          }
        })
        .then(response => {
          let result = response.data;

          console.log(result);
          // console.log(result[0].phone);
          // 若该用户存在且账号密码输入正确则返回该用户信息,表示登录成功,否则登录失败
          if (result.length > 0) {
            console.log("登录成功");
            window.localStorage.setItem(
              "userInfo",
              JSON.stringify({
                phone: _this.phone,
                pwd: _this.pwd
              })
            );

            let redirect = _this.$route.query.redirect || "/films";
            _this.$router.replace(redirect);
            _this.isShow = false;
          } else {
            console.log("登录失败");
            _this.isShow = true;
          }
        });
    }
  }
};
</script>

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

      .inputTip {
        margin-top: 5px;
        color: #ff5000;
        font-size: 12px;
      }
    }

    .phoneRegister {
      margin-left: 20px;
      margin-top: 20px;
      color: #555;
      font-size: 14px;
    }

    .tel-erro {
      display: flex;
      justify-content: center;

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
      height: 40px;
      // display: none;
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
