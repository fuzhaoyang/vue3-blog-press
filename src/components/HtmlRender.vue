<template>
  <template v-for="item in renderArr" :key="item">
    <pre
      v-highlight
      v-if="item.type === 'css' || item.type === 'javascript'"
    ><code :class="item.type">{{item.value}}</code></pre>
    <div v-html="item.value" v-if="item.type === 'html'"></div>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { escape2Html } from "../utils/utils";
export default defineComponent({
  name: "HtmlRender",
  props: ["content"],
  setup(props) {
    let arr = escape2Html(props.content).split("<pre");
    let renderArr = ref();
    if (arr.length) {
      let contentArr: any[] = [];
      for (let i = 0; i < arr.length; i++) {
        let c = arr[i].split("</pre>");
        if (c.length > 1) {
          contentArr = [...contentArr, ...c];
        } else {
          contentArr = [...contentArr, arr[i]];
        }
      }
      renderArr.value = contentArr.map((item) => {
        let type = "";
        let value = "";
        if (item.includes("<code")) {
          type = "javascript";
          value = item
            .replace(/><code class="language-javascript">/, "")
            .replace(/><code class="language-css">/, "")
            .replace(/class="wp-block-code"><code>/, "")
            .replace(/<code>/, "")
            .replace("><code>", "")
            .replace("</code>", "");
        } else {
          type = "html";
          value = item;
        }
        return {
          type: type,
          value: value.trim(),
        };
      });
    }
    return {
      renderArr,
    };
  },
});
</script>
