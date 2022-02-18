<template>
  <div class="tool hidden-xs" :class="{ 'display-styel': winScroll > 300 }">
    <div class="tbox item-style"></div>
    <div class="tbox1 item-style"></div>
    <div class="tbox2 item-style">
      <div class="erweima"></div>
    </div>
    <div class="tbox3 item-style" @click="toTop"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import scrollAnimation from "../hooks/scrollAnimation";
export default defineComponent({
  name: "ScrollBar",
  setup() {
    const winScroll = ref(0);
    const store = useStore();
    window.onscroll = () => {
      winScroll.value = document.documentElement.scrollTop;
      store.commit("setScrollTop", winScroll.value);
    };
    let toTop = () => {
      const currentY = document.documentElement.scrollTop;
      scrollAnimation(currentY, 0);
      store.commit("setScrollTop", 0);
    };
    return {
      winScroll,
      toTop,
    };
  },
});
</script>
<style lang="less" scoped>
/*工具条样式开始*/
.tool {
  width: 0;
  height: 0;
  position: fixed;
  right: -52px;
  bottom: 0;
  background: #f9f2f4;
  transition: all 1s;
  .item-style {
    width: 52px;
    height: 52px;
    cursor: pointer;
  }
  .tbox {
    background: url("https://fcyblog.com/statics/images/tg/toolbar.png") 0 485px;
    transition: all 0.5s;
  }
  .tbox:hover {
    background: url("https://fcyblog.com/statics/images/tg/toolbar.png") 0 425px;
  }
  .tbox1 {
    background: url("https://fcyblog.com/statics/images/tg/toolbar.png") 0 361px;
    transition: all 0.5s;
  }
  .tbox1:hover {
    background: url("https://fcyblog.com/statics/images/tg/toolbar.png") 0 300px;
  }
  .tbox2 {
    background: url("https://fcyblog.com/statics/images/tg/toolbar.png") 0 113px;
    transition: all 0.5s;
    position: relative;
    .erweima {
      width: 0;
      height: 0;
      background: red;
      position: absolute;
      right: 52px;
      bottom: 0;
      transition: all 0.5s;
      background: url("https://fcyblog.com/statics/images/tg/toolbar.png") 0
        700px;
    }
  }
  .tbox2:hover {
    background: url("https://fcyblog.com/statics/images/tg/toolbar.png") 0 50px;
    .erweima {
      width: 165px;
      height: 200px;
    }
  }
  .tbox3 {
    background: url("https://fcyblog.com/statics/images/tg/toolbar.png") 0 235px;
    transition: all 0.5s;
  }
  .tbox3:hover {
    background: url("https://fcyblog.com/statics/images/tg/toolbar.png") 0 170px;
  }
}
.display-styel {
  right: 0;
  width: 52px;
  height: 200px;
  bottom: 80px;
}

</style>
