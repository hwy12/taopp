<template>
  <div class="page-register">
    <!-- 一级路由，注册也 -->

    <div class="register-logo">
      <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" />
    </div>
    <!-- logo  end -->

    <form class="register-form">
      <div class="form-tel">
        <input type="tel" v-model="phone" @blur="checkphone()" placeholder="请输入手机号码" />
        <p class="errorP">{{telError}}</p>
      </div>

      <div class="form-tel">
        <input type="password" v-model="pwd" @keyup="checkpwd()" placeholder="请输入密码" />
        <p class="errorP">{{ pwdError }}</p>
      </div>

      <router-link tag="p" class="phoneLogin" to="/login">账号密码登录</router-link>

      <!-- register-form  end  -->

      <div class="tel-empty"></div>

      <!--tel-erro  end  -->

      <div class="register-button">
        <!-- <router-link tag="button" @click="register()" to="#">注册</router-link> -->
        <button @click="register()">注册</button>
      </div>

      <div class="agreeItem">
        <input type="checkbox" v-model="check" @click="checkagree()" />
        <span class="agree">同意"服务条款"和"隐私权相关政策"</span>
        <p class="agreeP">{{agreeMsg}}</p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      pwd: "",
      agreeMsg: "",
      telError: "",
      pwdError: "",
      check: true
    };
  },

  methods: {
    checkphone() {
      let phone = this.phone;
      if (phone.length === 0) {
        this.telError = "手机号码不能为空";
      } else if (!/^1[3456789]\d{9}$/.test(phone)) {
        this.telError = "手机号码有误,请重新输入";
      } else {
        this.telError = "";
      }

      return phone.length > 0;
    },

    checkpwd() {
      let word = this.pwd.trim();
      if (word.length === 0) {
        this.pwdError = "密码不能为空";
      } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(word)) {
        this.pwdError = " 密码至少包含数字和英文，长度为6-20";
      } else {
        this.pwdError = "";
      }

      return word.length > 0;
    },

    checkagree() {
      if (this.check) {
        this.agreeMsg = "";
      } else {
        this.agreeMsg = "必须勾选";
      }
      return this.check;
    },

    register() {
      var _this = this;
      if (this.checkphone() && this.checkpwd() && this.checkagree()) {
        console.log("注册成功");
        // 1. 使用输入的手机号,做一个查询操作,如果能够查询得到,就提示已经被注册过了.直接return
        axios
          .get("http://localhost:3000/todos", {
            params: {
              phone: this.phone
            }
          })
          .then(response => {
            let result = response.data;
            console.log(result);

            if (result.length > 0) {
              this.telError = "该手机号码已被注册";
            } else {
              // 2. 查询不到的时候,再做增加操作
              axios.post("http://localhost:3000/todos", {
                phone: this.phone,
                pwd: this.pwd
              });
              _this.$router.push({ path: "/login" });
            }
          });
      } else {
        console.log("注册失败");
      }
    }
  }
};
</script>

<style lang="scss">
.page-register {
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

      .errorP {
        width: 100%;

        margin-top: 10px;
        font-size: 14px;
        color: #ff5000;
      }
    }

    .phoneLogin {
      margin-left: 20px;
      padding-top: 20px;
      color: #555;
      font-size: 14px;
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

    .agreeItem {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      .agree {
        font-size: 16px;
        color: #333;
      }

      .agreeP {
        font-size: 12px;
        color: #ff5000;
        margin-top: 5px;
      }
    }
  }
}
</style>
