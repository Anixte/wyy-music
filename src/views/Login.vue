<template>
  <div class="bigBox">
    <!-- 整体布局 -->
    <div class="container right-panel-active">
      <!-- 二维码登录 -->
      <div class="container_from container--signup">
        <form action="#" class="from" id="from1">
          <h2 class="from_title">二维码登录</h2>
          <img :src="this.longinPic" alt="" v-if="!this.$store.state.islogin" />
          <span v-if="this.$store.state.islogin" class="success"
            >登录成功！！点击确定返回</span
          >
          <button class="btn" @click="checkLogin">点击返回</button>
        </form>
      </div>

      <!-- 手机号登录 -->
      <div class="container_from container--signin">
        <form action="#" class="from" id="form2">
          <h2 class="from_title">欢迎登录</h2>
          <input
            type="text"
            class="input"
            placeholder="Phone"
            v-model="phone"
          />
          <!-- <input type="email" class="input" placeholder="Email" /> -->
          <input
            type="password"
            class="input"
            placeholder="Password"
            v-model="password"
          />
          <a href="#" class="link">忘记密码？</a>
          <button class="btn" @click="phoneLogin">登录</button>
        </form>
      </div>

      <div class="container_overlay">
        <div class="overlay">
          <div class="overlay_panel overlay--left">
            <button class="btn" id="signin" @click="remove">手机号登录</button>
          </div>

          <div class="overlay_panel overlay--right">
            <button class="btn" id="signup" @click="add">二维码登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  _getQR,
  _createQR,
  _checkQR,
  _phoneLogin,
  _checkLogin,
} from "@/request/login.js";
import router from "@/router/index.js";
export default {
  name: "Login",
  data() {
    return {
      longinPic: "",
      code: 801,
      phone: "",
      password: "",
    };
  },
  methods: {
    // 模块切换
    remove() {
      const container = document.querySelector(".container");
      container.classList.remove("right-panel-active");
    },
    add() {
      const container = document.querySelector(".container");
      container.classList.add("right-panel-active");
    },
    // 二维码检验
    check() {
      this.timer = window.setInterval(() => {
        setTimeout(() => {
          _checkQR(this.key).then((res) => {
            this.code = res.data.code;
            // console.log(this.code);
          });
          if (this.code == 801 || this.code == 802) {
            _checkQR(this.key).then((res) => {
              this.code = res.data.code;
              if (this.code == 803) {
                // console.log(res.data);
                // this.$store.commit("addUser", res.data);
                localStorage.setItem("cookie", res.data.cookie);
                window.clearInterval(this.timer);
                this.checkLogin();
              }
            });
          }
        }, 0);
      }, 3000);
    },
    // 二维码创建
    login() {
      _getQR().then((res) => {
        this.key = res.data.data.unikey;
        _createQR(this.key).then((res) => {
          this.longinPic = res.data.data.qrimg;
        });
      });
      this.check();
    },
    // 手机号登录
    phoneLogin() {
      // console.log(this.phone, this.password);
      _phoneLogin(this.phone, this.password);
      this.checkLogin();
    },
    // 检查登录状态
    checkLogin() {
      _checkLogin().then((res) => {
        // console.log(res);
        this.$store.commit("addUser", res.data.data);
        localStorage.setItem("avatar", res.data.data.profile.avatarUrl);
        localStorage.setItem("uid", res.data.data.profile.userId);
        setTimeout(router.push("/home"), "2000");
      });
    },
  },
  created() {
    this.login();
  },
};
</script>

<style lang="less" scoped>
.bigBox {
  align-items: center;
  background-color: #e9e9e9;
  background: url("../assets/image/lake.jpg") no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
  margin: 0;
  padding: 0;
}

.from_title {
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.25rem;
}

.link {
  color: #333;
  font-size: 0.9rem;
  margin: 1.5rem 0;
  text-decoration: none;
}

.container {
  background-color: #e9e9e9;
  border-radius: 0.7rem;
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25);
  height: 420px;
  max-width: 758px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.container_from {
  height: 420px;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
}

.container--signin {
  left: 0;
  width: 50%;
  height: 420px;
  z-index: 2;
}

.container.right-panel-active .container--signin {
  transform: translateX(100%);
}

.container--signup {
  left: 0;
  opacity: 0;
  width: 50%;
  height: 420px;
  z-index: 1;
  img {
    margin-bottom: 15px;
  }
}

.container.right-panel-active .container--signup {
  animation: show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;
}

.container_overlay {
  height: 420px;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;
}

.container_from {
  height: 420px;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
}

.container--signin {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .container--signin {
  transform: translateX(100%);
}

.container--signup {
  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
}

.container.right-panel-active .container--signup {
  animation: show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;
}

.container.right-panel-active .container_overlay {
  transform: translateX(-100%);
}

.overlay {
  background-color: #008997;
  background: url("../assets/image/lake.jpg") no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 420px;
  left: -100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay_panel {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 420px;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;
}

.overlay--left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
  transform: translateX(0);
}

.overlay--right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay--right {
  transform: translateX(20%);
}

.btn {
  background-color: #0367a6;
  background-image: linear-gradient(90deg, #0367a6 0%, #008997 75%);
  border-radius: 20px;
  border: 1px solid #0367a6;
  color: #e9e9e9;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.form > .btn {
  margin-top: 1.5rem;
}

.btn:active {
  transform: scale(0.95);
}

.btn:focus {
  outline: none;
}

.from {
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
}

.input {
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
</style>
