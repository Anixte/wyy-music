<template>
  <!-- 顶部盒子 -->
  <div class="top">
    <!-- 顶部左边 -->
    <div class="topLeft">
      <!-- logo部分 -->
      <div class="logo">
        <div class="imgBox">
          <img src="@/assets/image/topbar.png" alt="" />
        </div>
      </div>
      <!-- 前进后退按钮 -->
      <div class="arrow">
        <i class="el-icon-arrow-left"></i>
        <i class="el-icon-arrow-right"></i>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <el-input
          placeholder="搜索音乐，视频，歌词，电台"
          v-model="searchContent"
          class="searchBox"
        >
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <!-- 顶部右边 -->
    <div class="topRight">
      <!-- 头像部分 -->
      <div class="touXiang" @click="login">
        <img
          :src="this.$store.state.islogin ? this.$store.state.avatarUrl : img"
          alt=""
          class="pic"
        />
        <el-button type="text" class="text">{{
          this.$store.state.islogin ? this.$store.state.nickname : "登录"
        }}</el-button>
      </div>
      <!-- 设置部分 -->
      <div class="sitting">
        <i class="iconfont icon-pifu"></i>
        <i class="iconfont icon-email"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>
      <!-- 小分割线 -->
      <div class="fenge">|</div>
      <!-- 最大最小化开关 -->
      <div class="swicth">
        <i class="iconfont icon-minimize1"></i>
        <i class="iconfont icon-zuixiaohua"></i>
        <i class="iconfont icon-zuidahua"></i>
        <i class="iconfont icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";
import img from "@/assets/logo.png";
export default {
  name: "topHead",
  data() {
    return {
      //搜索框内容
      searchContent: "",
      input: "",
      img: img,
    };
  },
  methods: {
    login() {
      // router.replace({ path: "/Login" });
      router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: #d61010f5;
}
.topLeft {
  flex: 1;
  float: left;
  display: inline-flex;
}

// 图标部分
.logo {
  width: 192px;
  height: 50px;
}

.imgBox {
  position: relative;
  width: 150px;
  height: 50px;
  overflow: hidden;
}
.logo .imgBox img {
  // width: 85%;
  width: 178px;
  position: absolute;
  left: 13px;
  top: -2px;
}

//前进后退部分
.arrow {
  width: 60px;
  line-height: 50px;
}

.arrow i {
  color: rgba(131, 23, 23, 0.74);
  font-size: 14px;
  font-weight: 700;
  padding: 1px 5px;
  border: 1px solid rgba(131, 23, 23, 0.74);
  border-radius: 3px;
}
// 搜索部分
.searchBox {
  margin-left: 5px;
  color: rgba(241, 36, 36, 0.39);
}
.searchBox /deep/ .el-input__inner {
  height: 20px;
  border-radius: 15px;
  font-size: 12px;
  line-height: 20px;
  padding: 0 46px 0 8px;
  background-color: rgba(168, 31, 31, 0.719);
  border-color: transparent;
}
.topRight {
  flex: 1;
  display: inline-flex;
  color: rgba(255, 255, 255, 0.75);
}

// 头像部分
.touXiang {
  position: relative;
  width: 125px;
  height: 50px;
  line-height: 50px;
  margin-left: 240px;
}
.touXiang img {
  position: absolute;
  left: 0;
  top: 12px;
  width: 24px;
  border-radius: 50%;
  background-color: #fff;
}

.touXiang .text {
  font-size: 12px;
  padding-left: 30px;
  color: #fff;
}
/deep/.el-dialog .el-dialog__body {
  height: 150px;
}
.el-dialog .success {
  position: absolute;
  top: 135px;
  left: 120px;
  font-size: 16px;
  font-weight: 700;
  color: skyblue;
}
.el-dialog img {
  position: absolute;
  left: 92px;
  top: 42px;
  width: 250px;
  border-radius: 0;
}

//设置部分
.sitting {
  float: right;
}

.sitting i {
  font-size: 20px;
  padding-right: 20px;
}

.sitting i:nth-child(3) {
  font-size: 16px;
}

//分割线
.fenge {
  color: rgba(131, 23, 23, 0.74);
}
//开关控制部分
.swicth {
  float: right;
  box-sizing: border-box;
}

.swicth i {
  font-size: 16px;
  padding: 0 3px;
}

.swicth i:nth-child(1) {
  font-size: 13px;
  margin-left: 18px;
}

.el-dialog__body .el-input {
  width: 250px;
  padding-left: 65px;
}
</style>
