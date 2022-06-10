<template>
  <div>
    <el-carousel
      :interval="4000"
      type="card"
      height="200px"
      style="margin-top: 20px"
    >
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <a :href="item.url">
          <img :src="item.imageUrl" alt="" height="100%" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { _getBanner } from "@/request/discover.js";
export default {
  name: "swiper",
  data() {
    return {
      banners: [],
    };
  },
  methods: {
    // 获取轮播图数据
    async geiSwiper() {
      await _getBanner().then((res) => {
        this.banners = res.data.banners;
      });
      // console.log(res);

      // console.log(this.banners);
    },
  },
  created() {
    this.geiSwiper();
  },
};
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/deep/.el-carousel__indicator.is-active button {
  background-color: red;
}

/deep/.el-carousel__indicators--outside button {
  background-color: #c0c4cc;
  width: 15px;
  height: 4px;
  border-radius: 2px;
}
</style>
