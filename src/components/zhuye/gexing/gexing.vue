<template>
  <div>
    <!-- 轮播图 -->
    <swiper></swiper>
    <!-- 推荐歌单 -->
    <div class="recomm">
      <div>推荐歌单</div>
      <div class="more" @click="moreList">更多 ></div>
    </div>
    <musicCard :musicInfo="musicInfo"></musicCard>
    <!-- 独家放送 -->
    <div class="recomm">
      <div>独家放送</div>
      <div class="more" @click="moreContent">更多 ></div>
    </div>
    <privateContent :contentInfo="contentInfo"></privateContent>
  </div>
</template>

<script>
import swiper from "@/components/zhuye/gexing/swiper.vue";
import privateContent from "@/common/privateContent.vue";
import musicCard from "@/common/music_card.vue";
import { _getPersonalized, _getPrivateContent } from "@/request/discover.js";
import router from "@/router/index.js";
export default {
  name: "gexing",
  data() {
    return {
      // 歌单信息
      musicInfo: [],
      // 独家信息
      contentInfo: [],
    };
  },
  components: { swiper, musicCard, privateContent },
  methods: {
    // 获取推荐歌单信息
    async geiMusicInfo() {
      var list = [];
      await _getPersonalized(10).then((res) => {
        // console.log(res);
        // 循环将歌单信息给数组list[],直接赋值给musicInfo[]好像不行
        for (let i = 0; i < res.data.result.length; i++) {
          list[i] = {
            picUrl: res.data.result[i].picUrl,
            id: res.data.result[i].id,
            name: res.data.result[i].name,
            playCount: res.data.result[i].playCount,
            index: i,
            text: res.data.result[i].description
              ? res.data.result[i].description
              : "歌单暂无描述",
          };
        }
        this.musicInfo = JSON.parse(JSON.stringify(list));
        // 解决方法：https://www.jianshu.com/p/84bb42a14eaa 深拷贝问题 传参不过去
      });

      // console.log(this.musicInfo);
    },
    // 获取独家放送栏目信息
    async getPrivate() {
      await _getPrivateContent().then((res) => {
        // console.log(res);
        let Info = [];
        for (let i = 0; i < res.data.result.length; i++) {
          Info[i] = {
            picUrl: res.data.result[i].sPicUrl,
            id: res.data.result[i].id,
            name: res.data.result[i].name,
            index: i,
            text: res.data.result[i].copywriter
              ? res.data.result[i].copywriter
              : "MV暂无描述",
          };
        }
        this.contentInfo = JSON.parse(JSON.stringify(Info));
        // console.log(this.contentInfo);
      });
    },
    // 更多歌单
    moreList() {
      router.push("list");
    },
    // 更多独家放送
    moreContent() {
      router.push("/contentDetail");
    },
  },
  created() {
    this.geiMusicInfo();
    this.getPrivate();
    // console.log(this.musicInfo);
  },
};
</script>

<style lang="less" scoped>
.recomm {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 25px;
  border-bottom: 1px solid #c0c4cc;
  font-size: 17px;
}
.recomm .more {
  font-size: 12px;
  color: gray;
  cursor: pointer;
}
</style>
