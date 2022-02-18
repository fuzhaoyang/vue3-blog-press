<template>
  <KeletonComment v-if="skeleton && loading" :showTitle="showTitle"></KeletonComment>
   <h3 class="emoji-tip" v-if="!loading && showTitle">{{ $t(`myMessage`) }}</h3>
  <div id="SOHUCS" :sid="id" v-show="!loading"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  getCurrentInstance,
  ref
} from "vue";
import loadScript from "../hooks/loadScript";
import KeletonComment from "../skeleton/KeletonComment.vue"
export default defineComponent({
  name: "Comment",
  props: ["id",'showTitle','skeleton'],
  components:{
    KeletonComment
  },
  setup() {
    const instance = getCurrentInstance() as any;
    let loading = ref(true);
    nextTick(() => {
      loadScript(["https://cy-cdn.kuaizhan.com/upload/changyan.js"]).then(
        () => {
          instance.proxy.$window.changyan.api._config = { showScore: true };
          instance.proxy.$window.changyan.api.config({
            appid: "cytkdolPb",
            conf: "prod_90f4798cfd1b467adca65f01c30b15d9",
          });
          setTimeout(()=> {
            loading.value = false;
          },2000);
        }
      );
    });
    onBeforeMount(() => {
      console.log("销毁");
      try {
        // eslint-disable-next-line no-useless-escape
        const removeRep = /^http(s)?\:\/\/changyan\./;
        const $head =
          document.getElementsByTagName("head")[0] ||
          document.head ||
          document.documentElement;
        const $script = $head.querySelectorAll("script");
        $script.forEach((item) => {
          const src = item.getAttribute("src");
          if (src && removeRep.test(src)) {
            $head.removeChild(item);
          }
        });
        for (const key in window) {
          if (/^(changyan(\d)?|cyan)/.test(key)) {
            console.log(key);
            (window as any)[key] = undefined;
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
    return {
      loading
    }
  },
});
</script>
<style lang="less" scoped>
.emoji-tip {
  text-align: center;
  width: 100px;
  height: 30px;
  margin: 30px auto;
}
</style>
