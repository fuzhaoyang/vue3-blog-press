<template>
  <span @click="setLang()" class="f-color cur-pointer m-r-10">{{$t(`language`)}}</span>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance} from "vue";
export default defineComponent({
  name: "Langage",
  setup() {
    const { proxy } = getCurrentInstance() as any;
    let lang = localStorage.getItem('lang') || 'zh_CN';
    const setLang = () => {
      if (lang === 'zh_CN') {
        proxy.$i18n.locale = "en";
      } else {
        proxy.$i18n.locale = "zh_CN";
      }
      lang = proxy.$i18n.locale;
      localStorage.setItem("lang", lang);
    };

    return {
      setLang
    };
  },
});
</script>

<style lang="less" scoped></style>
