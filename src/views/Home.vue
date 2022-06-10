<template>
  <div class="background">
    <div class="mainBox">
      <!-- 顶部盒子 -->
      <div class="top_container"><topHead></topHead></div>
      <!-- 中间盒子 -->
      <div class="center_container">
        <!-- 左边菜单栏 -->
        <div class="left_container"><leftContainer></leftContainer></div>
        <!-- 右边内容盒子 -->
        <div class="right_container"><router-view></router-view></div>
      </div>
      <!-- 底部盒子 -->
      <div class="footer_container"><bottomContain></bottomContain></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import topHead from "@/components/Home/topHead.vue";
import bottomContain from "@/components/Home/bottomContain.vue";
import leftContainer from "@/components/Home/leftContainer.vue";
// import { _logout } from "@/request/login.js";
export default {
  name: "Home",
  components: {
    topHead,
    bottomContain,
    leftContainer,
  },
  methods: {
    createAll() {
      if (!this.$store.state.islogin) {
        // localStorage.clear();
        // _logout();
      }
    },
  },
  created() {
    this.createAll();
  },
};
</script>
<style lang="less" scoped>
.mainBox {
  width: 1200px !important;
  height: 670px;
  margin: 0 auto;
  box-shadow: 0 0 30px #ccc;
  background-color: #f5f5f5;
  margin-top: 30px;
  // overflow: hidden;
}

.top_container {
  height: 50px;
}
.center_container {
  height: 570px;
}
.footer_container {
  height: 50px;
  border-top: 0.5px solid #e6e6e6;
}
.left_container {
  float: left;
  width: 200px;
  height: 570px;
  overflow: hidden;
}

.right_container {
  float: left;
  width: 1000px;
  height: 570px;
  max-height: 570px;
  overflow: auto;
  transition: all 3s;
}
</style>
