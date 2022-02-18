<template>
  <div class="tool-container">
    <div class="tool-title">常用在线小工具</div>
    <ul class="tool-content">
      <li v-for="item in tool" :key="item" class="tool-item">
        <span class="circle" :style="{ background: item.color }"></span>
        <a :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "OnlineTools",
  components: {},
  setup() {
    const tool = [
      {
        name: "JavaScript代码格式化工具",
        url: "http://tools.jb51.net/code/js",
        color: "#ff3300",
      },
      {
        name: "在线XML格式化/压缩工具",
        url: "http://tools.jb51.net/code/xmlformat",
        color: "#ff6600",
      },
      {
        name: "php代码在线格式化美化工具",
        url: "http://tools.jb51.net/code/phpformat",
        color: "#ff9900",
      },
      {
        name: "sql代码在线格式化美化工具",
        url: "http://tools.jb51.net/code/sqlcodeformat",
        color: "#666666",
      },
      {
        name: "在线HTML转义/反转义工具",
        url: "http://tools.jb51.net/transcoding/html_transcode",
        color: "#666666",
      },
      {
        name: "在线JSON代码检验/检验/美化/格式化",
        url: "http://tools.jb51.net/code/json",
        color: "#666666",
      },
      {
        name: "JavaScript正则在线测试工具",
        url: "http://tools.jb51.net/regex/javascript",
        color: "#666666",
      },
      {
        name: "在线生成二维码工具(加强版)",
        url: "http://tools.jb51.net/transcoding/jb51qrcode",
        color: "#666666",
      },
      {
        name: "更多在线工具",
        url: "http://tools.jb51.net/",
        color: "#666666",
      },
    ];

    return {
      tool,
    };
  },
});
</script>
<style lang="less" scoped>
.tool-container {
  width: 100%;
  padding: 10px 0;
}
.tool-title {
  width: 100%;
  height: 48px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  text-align: left;
  padding-left: 10px;
}
.tool-content {
  padding: 0 10px;
}
.tool-item {
  padding: 10px 0;
  border-bottom: 1px solid #eaeaea;
  .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }
  a {
    color: #666;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
