<template>
  <div class="contain">
    <tapBar></tapBar>
  </div>
</template>

<script>
import tapBar from "@/components/zhuye/tapBar";
export default {
  name: "zhuYe",
  components: { tapBar },
};
</script>

<style lang="less" scoped>
.contain {
  width: 950px;
  // background-color: pink;
  text-align: center;
  margin: 0 auto;
}
</style>
