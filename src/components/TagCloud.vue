<template>
  <div class="tag-cloud-container">
    <div class="tag-title">技术社区</div>
    <div class="tag-content">
      <template v-for="item in tagArr" :key="item">
        <a
          :href="item.url"
          target="_blank"
          :style="{ background: item.color }"
          >{{ item.name }}</a
        >
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TagCloud",
  setup() {
    const tagArr = [
      {
        name: "掘金",
        url: "https://juejin.cn/",
        color: "#def6ff",
      },
      {
        name: "CSDN",
        url: "https://www.csdn.net/",
        color: "#f2fbf2",
      },
      {
        name: "开课吧",
        url: "https://www.kaikeba.com/",
        color: "#fff3f3",
      },
      {
        name: "前端小阳仔",
        url: "https://fuchaoyang.com/",
        color: "#f8f3fe",
      },
      {
        name: "杨青青的个人博客",
        url: "https://www.qingqingblog.com/",
        color: "#fff7f0",
      },
      {
        name: "慕课网",
        url: "https://www.imooc.com/",
        color: "#edf9fe",
      },
      {
        name: "脚本之家",
        url: "https://www.jb51.net/",
        color: "#fff7f0",
      },
      {
        name: "51CTO",
        url: "https://blog.51cto.com/",
        color: "#f2fbf2",
      },
      {
        name: "W3",
        url: "https://www.w3.org/",
        color: "#f8f3fe",
      },
      {
        name: "Mozilla社区",
        url: "https://developer.mozilla.org/",
        color: "#fff7f0",
      },
      {
        name: "前端里",
        url: "http://www.yyyweb.com/",
        color: "#fff3f3",
      },
      {
        name: "ECMAScript 6 ",
        url: "https://es6.ruanyifeng.com/",
        color: "#edf9fe",
      },
      {
        name: "jQuery插件",
        url: "https://www.jq22.com/",
        color: "#f1f3fd",
      },
      {
        name: "菜鸟教程",
        url: "https://www.runoob.com/",
        color: "#f1f3fd",
      },
      {
        name: "HTML5",
        url: "https://www.zhihu.com/topic/19557564/hot",
        color: "#fff7f0",
      },
       {
        name: "H5基地",
        url: "http://html5.360.cn/",
        color: "#edf9fe",
      },
    ];
    return {
      tagArr,
    };
  },
});
</script>
<style lang="less" scoped>
.tag-cloud-container {
  .tag-content {
    display: flex;
    justify-content: flex-start;
    padding-top: 15px;
    flex-wrap: wrap;
    a {
      display: block;
      line-height: 34px;
      text-align: center;
      position: relative;
      color: #2c3e50;
      margin: 4px 5px;
      padding: 0 14px;
      border-radius: 3px;
      transition: 0.2s;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .tag-title {
    width: 100%;
    height: 50px;
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    font-size: 18px;
    text-align: left;
  }
}
</style>
