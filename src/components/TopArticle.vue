<template>
  <div class="top-container">
    <div class="title">{{ title }}</div>
    <ul>
      <li v-for="(list, index) in topList" :key="list">
        <span class="tag">{{ index + 1 }}</span>
        <span class="ar-list">
          {{ list?.title?.rendered }}
          <i class="iconfont icon-07jiantouxiangyoufill"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TopArticle",
  props: ["topList", "title"],
  setup() {},
});
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  height: 50px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  text-align: left;
  line-height: 60px;
  padding-left: 5px;
}

ul li {
  width: 100%;
  height: 40px;
  line-height: 50px;
  padding-left: 5px;
  border-bottom: 1px solid #eaeaea;
  overflow: hidden;
}
.tag {
  margin: 15px 10px 0px 0px;
  width: 20px;
  height: 20px;
  text-align: center;
  color: #d52b2b;
  line-height: 15px;
  overflow: hidden;
  font-family: "georgia", "STHeiti", "Microsoft YaHei", "simsun", "sans-serif",
    Arial;
  font-size: 20px;
  font-style: italic;
  float: left;
}
.ar-list {
  .icon-07jiantouxiangyoufill {
    display: none;
  }
  &:hover {
    padding-left: 20px;
    text-decoration: underline;
    transition: all 1s;
    cursor: pointer;
    color: #4caf50;
    font-weight: bold;
    .icon-07jiantouxiangyoufill {
      display: inline-block;
    }
  }
}
</style>
