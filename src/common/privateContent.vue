<template>
  <div class="main">
    <ul>
      <li v-for="(item, index) in this.contentInfo" :key="index" class="item">
        <img :src="item.picUrl" alt="" class="pic" />
        <p class="textBox">{{ item.name }}</p>
        <span><i class="el-icon-video-camera"></i></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "privateContent",
  props: {
    contentInfo: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.main {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: space-between;
}
li {
  flex: 0 0 33.33333%;
  position: relative;
  img {
    height: 168px;
    width: 302px;
  }
}
.textBox {
  font-size: 13px;
  overflow: hidden;
  text-decoration: none;
  color: black;
  overflow: hidden;
  text-align: left;
  margin: 0 6px;
  cursor: pointer;
}
span {
  position: absolute;
  top: 5px;
  left: 15px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  line-height: 30px;
  i {
    color: #fff;
  }
}
</style>
