<template>
  <!-- 底部栏 -->
  <div class="bottomBox">
    <!-- 播放按钮 -->
    <div class="iconBox">
      <div class="pre">
        <a href="#" title="上一首">
          <img src="@/assets/audio/上一首.png" alt="上一首"
        /></a>
      </div>
      <div class="play">
        <a href="#" title="播放" v-if="!isplay"
          ><img src="@/assets/audio/播放.png" alt=""
        /></a>

        <a href="#" title="暂停" v-if="isplay"
          ><img src="@/assets/audio/暂停.png" alt=""
        /></a>
      </div>
      <div class="next">
        <a href="#" title="下一首">
          <img src="@/assets/audio/下一首.png" alt=""
        /></a>
      </div>
    </div>
    <!-- 进度条 -->
    <div class="lineBox">
      <span class="startTime">1</span>
      <el-slider :v-model="100" :show-tooltip="false"></el-slider>
      <span class="endTime">100</span>
    </div>
    <!-- 音量调整 -->
    <div class="yinliang"></div>
    <!-- 循环按钮 -->
    <div class="xunhuan"></div>
    <!-- 音质按钮 -->
    <div class="yinzhi"></div>
    <!-- 音效按钮 -->
    <div class="yinxiao"></div>
    <!-- 歌词按钮 -->
    <div class="geci"></div>
    <!-- 播放列表 -->
    <div class="liebiao"></div>
    <!-- 媒体播放 -->
    <audio></audio>
  </div>
</template>

<script>
export default {
  name: "bottomContain",
  data() {
    return {
      isplay: false,
    };
  },
};
</script>

<style lang="less" scoped>
.bottomBox {
  height: 50px;
  float: left;
  // background-color: yellow;
  box-sizing: border-box;
  div {
    float: left;
  }
}

.iconBox {
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 14px;
  box-sizing: border-box;

  .pre,
  .play,
  .next {
    text-align: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    img {
      width: 20px;
      height: 20px;
    }
  }

  .play {
    width: 35px;
    height: 35px;
  }
}

.lineBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 670px;
  height: 50px;
  .el-slider {
    width: 560px;
    margin-left: 2px;
    /deep/ .el-slider__bar {
      height: 4px;
      background-color: #e83c3c;
    }
    /deep/ .el-slider__button {
      border: 1px solid #ccc;
      width: 10px;
      height: 10px;
    }
    /deep/ .el-slider__runway {
      height: 4px;
      background-color: rgba(119, 118, 118, 0.473);
    }
  }
}
</style>
