<template>
  <!-- 大盒子 -->
  <div class="mainBox">
    <ul>
      <li class="liBox" v-for="(item, index) in musicInfo" :key="index">
        <div class="container" @click="getDetail(item.id)">
          <!-- 图片 -->
          <div class="pic">
            <img :src="item.picUrl" alt="" />
          </div>
          <!-- 播放数量 -->
          <div class="count">
            <span>{{ (item.playCount / 10000).toFixed(0) + "万" }}</span>
            <i class="el-icon-headset" />
          </div>
          <!-- 播放按钮 -->
          <div class="play">
            <i class="el-icon-video-play"></i>
          </div>
          <!-- 顶部描述文字 -->
          <div class="topText">{{ item.text }}</div>
        </div>
        <!-- 底部歌单信息 -->
        <router-link class="textBox" to="">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: "musicCard",
  props: {
    musicInfo: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    // 跳转详情页
    getDetail(id) {
      router.push(`/listDetail${id}`);
      // console.log(this.musicInfo);
    },
  },
  created() {},
  watch: {
    musicInfo: {
      handler: function (value) {
        this.musicInfo = value;
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="less" scoped>
.mainBox {
  position: relative;
  width: 100%;
}
.mainBox ul {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

.mainBox ul li {
  flex: 0 0 20%;
  list-style: none;
  margin-bottom: 30px;
}

.container {
  position: relative;
  overflow: hidden;
  .pic {
    width: 175px;
    height: 175px;
    margin: 0 auto;
    cursor: pointer;
  }

  .pic img {
    height: 100%;
  }

  .count {
    position: absolute;
    right: 10px;
    top: 0;
    width: 100px;
    height: 20px;
    line-height: 20px;
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.3),
      rgba(255, 255, 255, 0)
    );
    .el-icon-headset,
    span {
      float: right;
      line-height: 20px;
      color: #fff;
      font-size: 12px;
    }
    span {
      margin-left: 2px;
      margin-right: 3px;
    }
  }
  .play {
    position: absolute;
    top: 135px;
    right: 15px;
    font-size: 30px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    transform: translateX(115%);
    opacity: 0;
  }

  .topText {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(51, 51, 51, 0.473);
    color: #fff;
    text-align: left;
    text-overflow: ellipsis;
    width: 175px;
    height: 35px;
    line-height: 35px;
    overflow: hidden;
    margin-left: 8px;
    font-size: 12px;
    // display: none;
    transform: translateY(-35px);
  }
}

.container:hover {
  .topText {
    display: block;
    transition: all 0.5s;
    transform: translateY(0);
  }
  .play {
    transform: translateX(0);
    transition: all 0.5s;
    opacity: 1;
  }
  .count {
    opacity: 0;
  }
}

.textBox {
  font-size: 13px;
  overflow: hidden;
  text-decoration: none;
  color: black;
  overflow: hidden;
}
</style>
