<template>
  <div class="main">
    <div class="recomm">独家放送</div>
    <privateContent :contentInfo="contentInfo"></privateContent>
  </div>
</template>

<script>
import privateContent from "@/common/privateContent.vue";
import { _getPrivateList } from "@/request/discover.js";
export default {
  name: "contentDetail",
  data() {
    return {
      contentInfo: [],
    };
  },
  components: { privateContent },
  methods: {
    async getPrivate() {
      await _getPrivateList(60, 1).then((res) => {
        console.log(res);
        let Info = [];
        for (let i = 0; i < res.data.result.length; i++) {
          Info[i] = {
            picUrl: res.data.result[i].picUrl,
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
  },
  created() {
    this.getPrivate();
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 950px;
  // background-color: pink;
  text-align: center;
  margin: 0 auto;
}
.recomm {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 25px;
  border-bottom: 1px solid #c0c4cc;
  font-size: 17px;
  margin-top: 30px;
}

/deep/ img.pic {
  height: 112px;
}
/deep/ li.item {
  margin-bottom: 40px;
}
</style>
