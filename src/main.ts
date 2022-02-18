import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueI18n from "./language";
import lazyPlugin from "vue3-lazy";
import "./assets/css/common.css";
import "./assets/iconfont/iconfont.css";
// highlight 的样式，依赖包，组件
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const app = createApp(App);
app.config.globalProperties.$window = window;
app
  .use(router)
  .use(store)
  .use(Antd)
  .use(VueI18n)
  .use((app) => {
    app.directive("highlight", {
      mounted(el) {
        const blocks = el.querySelectorAll("pre code"); // querySelectorAll可以根据自己的富文本生成的代码做调整 我这里默认刚好
        blocks.forEach((block: any) => {
          // 在forEach中做一些操作
          // 1.创建ul节点
          const ul = document.createElement("ul");
          // 2.根据换行符获取行数，根据获取的行数生成行号
          const rowCount = block.outerHTML.split("\n").length;
          for (let i = 1; i <= rowCount; i++) {
            //创建li节点，创建文本节点
            const li = document.createElement("li");
            const text = document.createTextNode(String(i));
            //为li追加文本节点，将li加入ul
            li.appendChild(text);
            ul.appendChild(li);
          }
          // 3.给行号添加类名
          ul.className = "pre-numbering";
          // 4.将ul节点加到 代码块
          block.parentNode.appendChild(ul);
          hljs.highlightBlock(block);
        });
      },
    });
  })
  .use(lazyPlugin, {
    loading: "https://fuchaoyang.com/statics/img/webinfo/loading.gif", // 图片加载时默认图片
    error: "https://fuchaoyang.com/statics/img/webinfo/articleError.png", // 图片加载失败时默认图片
  })
  .mount("#app");
