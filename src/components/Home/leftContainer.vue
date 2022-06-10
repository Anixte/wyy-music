<template>
  <!-- 左边栏 -->
  <div class="leftContainer">
    <!-- 推荐盒子 -->
    <div class="recommend">
      <p>推荐</p>
      <ul>
        <li>
          <router-link to="/"
            ><i class="iconfont icon-yinle"></i>发现音乐</router-link
          >
        </li>
        <li>
          <router-link to="/fm"
            ><i class="iconfont icon-xinhao"></i>私人FM
          </router-link>
        </li>
        <li>
          <router-link to="/look"
            ><i class="iconfont icon-zhibo"></i>LOOK直播</router-link
          >
        </li>
        <li>
          <router-link to="/videos"
            ><i class="iconfont icon-18"></i>视频</router-link
          >
        </li>
        <li>
          <router-link to="friends"
            ><i class="iconfont icon-pengyou"></i>朋友</router-link
          >
        </li>
      </ul>
    </div>
    <!-- 我的音乐盒子 -->
    <div class="myMusic">
      <p>我的音乐</p>
      <ul>
        <li>
          <router-link to="/myMusic"
            ><i class="iconfont icon-bendiyinle"></i>本地音乐</router-link
          >
        </li>
        <li>
          <router-link to="/Download"
            ><i class="iconfont icon-xiazaiguanli"></i>下载管理</router-link
          >
        </li>
        <li>
          <router-link to="/Clouds"
            ><i class="iconfont icon-yunyunpan"></i>我的音乐云盘</router-link
          >
        </li>
        <li>
          <router-link to="/myRadio"
            ><i class="iconfont icon-diantai"></i>我的电台</router-link
          >
        </li>
        <li>
          <router-link to="/myCollection"
            ><i class="iconfont icon-wodeshoucang1"></i>我的收藏</router-link
          >
        </li>
      </ul>
    </div>
    <!-- 我创建的歌单 -->
    <div class="myCreate">
      <p>创建的歌单</p>
      <ul>
        <li>
          <a href="#"
            ><i class="iconfont icon-wodeshoucang" style="font-size: 15px"></i
            >我喜欢的音乐</a
          >
        </li>
        <li>
          <a href="#"><i class="iconfont icon-gedan"></i>2022年度歌单</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftContainer",
};
</script>

<style lang="less" scoped>
// 整体盒子
.leftContainer {
  background-color: rgba(128, 128, 128, 0.2);
  box-sizing: border-box;
}
.leftContainer p {
  display: block;
  height: 30px;
  font-size: 10px !important;
  line-height: 30px;
  margin: 0;
  margin-left: 10px;
  color: gray;
}

ul {
  margin: 0;
  padding: 0;
}
ul li {
  text-decoration: none;
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
  padding-left: 20px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
}
ul li:hover {
  background-color: rgba(128, 128, 128, 0.5);
}
ul li a {
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 12px;
  line-height: 30px;
  margin: 2px 0;
}

ul li a i {
  margin-right: 8px;
  font-size: 18px;
}

.recommend ul li:last-child {
  margin-bottom: 14px;
}

.myMusic ul li i {
  font-size: 16px;
}

.myMusic ul li:last-child {
  margin-bottom: 14px;
}
</style>
