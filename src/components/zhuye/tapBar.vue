<template>
  <div class="tapBar">
    <div class="box">
      <!-- 菜单栏 -->
      <el-menu
        default-active="my"
        class="el-menu-demo"
        mode="horizontal"
        background-color="transparent"
        active-text-color="red"
        text-color="black"
        router
      >
        <!-- @select="handleSelect" -->
        <el-menu-item index="my">个性推荐</el-menu-item>
        <el-menu-item index="list">歌单</el-menu-item>
        <el-menu-item index="radio">主播电台</el-menu-item>
        <el-menu-item index="rank">排行榜</el-menu-item>
        <el-menu-item index="singer">歌手</el-menu-item>
        <el-menu-item index="new">最新音乐</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "tapBar",
  data() {
    return {};
  },
  components: {},
};
</script>

<style>
.box {
  border-bottom: 1px solid #e6e6e6;
}
.el-menu-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  width: 510px;
  margin: 0 auto;
}
.el-menu-item {
  flex: 1;
  height: 50px;
  padding: 0;
  text-align: center;
  color: #000;
  font-size: 14px;
  line-height: 40px;
}
.el-menu.el-menu--horizontal {
  border: 0;
}
.el-menu--horizontal > .el-menu-item {
  height: 40px;
  line-height: 40px;
}
</style>
