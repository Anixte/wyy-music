<template>
  <div class="main">
    <div class="head">
      <div class="left">
        <img :src="this.coverImgUrl" alt="" />
      </div>
      <div class="center">
        <div class="title">
          <span>歌单</span>
          <h2>{{ this.name }}</h2>
        </div>
        <div class="nickname">
          <img :src="this.creator_avatarUrl" alt="" />
          <span class="name">{{ this.creator_nickname }}</span>
          <span class="time">{{ timeCreat }}创建</span>
        </div>
        <div class="chose">
          <el-button-group>
            <el-button class="playAll">
              <i class="el-icon-video-play" />播放全部</el-button
            >
            <el-button><i class="el-icon-plus" /></el-button>
          </el-button-group>
          <el-button class="shouCang">
            <i class="el-icon-folder-add"></i>
            收藏({{ subscribedCount }})</el-button
          >
          <el-button class="share">分享({{ shareCount }})</el-button>
          <el-button class="downAll">
            <i class="el-icon-download"></i>
            下载全部</el-button
          >
        </div>
        <div class="tabs">
          <a href="#" v-for="(item, index) in tabs" :key="index">
            {{ item }}
          </a>
        </div>
        <div class="description">{{ description }}</div>
      </div>
      <div class="right">
        <div class="count">
          <div>歌曲：{{ this.trackCount }}</div>
          <div>播放：{{ (this.playCount / 10000).toFixed(0) }}万</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { _getListDetail } from "@/request/listDetail.js";
import { _formatDate } from "@/utils/tool.js";
export default {
  name: "listDetail",
  data() {
    return {
      id: 0,
      // 歌单名
      name: "",
      // 封面图
      coverImgUrl: "",
      // 创建时间
      createTime: 0,
      // 简介
      description: "",
      // 歌曲数
      trackCount: "",
      // 播放数
      playCount: "",
      // 分享数
      shareCount: "",
      // 收藏数
      subscribedCount: "",
      // 标签
      tabs: [],
      // 创建者
      creator_nickname: "",
      // 创建者头像
      creator_avatarUrl: "",
    };
  },
  methods: {
    // 获取歌单详情
    async getListDetail(id) {
      // console.log(id);
      await _getListDetail(id).then((res) => {
        // console.log(res.data);
        this.name = res.data.playlist.name;
        this.coverImgUrl = res.data.playlist.coverImgUrl;
        this.createTime = res.data.playlist.createTime;
        this.description = res.data.playlist.description;
        this.trackCount = res.data.playlist.trackCount;
        this.playCount = res.data.playlist.playCount;
        this.shareCount = res.data.playlist.shareCount;
        this.subscribedCount = res.data.playlist.subscribedCount;
        this.tabs = res.data.playlist.tags;
        this.creator_nickname = res.data.playlist.creator.nickname;
        this.creator_avatarUrl = res.data.playlist.creator.avatarUrl;
        // console.log(this.coverImgUrl);
        this.getCreateTime();
      });
    },
    getCreateTime() {
      _formatDate(this.createTime);
    },
  },
  computed: {
    timeCreat: function () {
      return _formatDate(this.createTime);
    },
  },
  created() {
    this.getListDetail(this.$route.params.id);
  },
};
</script>

<style lang="less" scoped>
.main {
  .head {
    margin: 30px 25px 25px;
    background-color: skyblue;
    display: flex;
    height: 250px;
    .left {
      flex: 0 0 24%;
      background-color: #fff;
      img {
        width: 200px;
        height: 200px;
        margin-left: 5px;
        border: 1px solid rgba(117, 117, 117, 0.2);
      }
    }
    .center {
      flex: 0 0 61%;
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      .title {
        position: relative;
        span {
          border: 1px solid red;
          font-size: 10px;
          float: left;
          position: absolute;
          top: 0;
          left: 0;
          margin: 5px;
          padding: 2px 5px;
          color: red;
          border-radius: 1px;
        }
        h2 {
          margin: 0 0 0 48px;
          font-weight: 400;
          font-size: 22px;
        }
      }
      .nickname {
        position: relative;
        margin: 10px 0;
        height: 30px;
        line-height: 30px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          position: absolute;
        }
        .name {
          margin: 0 0 0 40px;
          font-size: 14px;
          color: rgba(55, 55, 55, 0.8);
        }
        .time {
          font-size: 10px;
          color: rgba(112, 112, 112, 0.8);
          margin-left: 15px;
        }
      }
      .chose {
        margin-top: 5px;
        .el-button {
          border: 1px solid #ccc;
          border-radius: 2px;
          padding: 6px 12px;
        }
        .el-button:hover {
          color: tomato;
        }
        .el-button-group {
          margin-right: 12px;
          border-radius: 10px;
        }
      }
    }
    .right {
      flex: 0 0 15%;
      background-color: red;
    }
  }
}
</style>
