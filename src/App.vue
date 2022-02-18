<template>
  <div class="animate-container">
    <Header></Header>
    <div class="topline"></div>
    <router-view />
    <Robot></Robot>
    <ScrollBar></ScrollBar>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import "ant-design-vue/dist/antd.css";
import Header from "./views/Header.vue";
import Robot from "./components/Robot.vue";
import ScrollBar from "./components/ScrollBar.vue";
import Footer from "./views/Footer.vue";
import less from "less";
import themeConfig from "./hooks/themeConfig";
export default defineComponent({
  name: "App",
  components: {
    Header,
    Robot,
    ScrollBar,
    Footer,
  },
  setup() {
    let theme = localStorage.getItem("theme") || "theme5";
    const loadBgImg = (delay: number) => {
      setTimeout(() => {
        let imgArr = [
          require("@/assets/img/bg4.jpg"),
          require("@/assets/img/bg3.jpg"),
          require("@/assets/img/bg2.jpg"),
          require("@/assets/img/bg1.png"),
          require("@/assets/img/bg-girl.jpg"),
        ];
        for (let i = 0; i < imgArr.length; i++) {
          new Image().src = imgArr[i];
        }
      }, delay);
    };
    onMounted(() => {
      const screeWidth = window.screen.width;
      const homeAnimate = sessionStorage.getItem("homeAnimate");
      if (screeWidth > 768 && !homeAnimate) {
        const bodyBg = {
          "@body-bg":
            "url(" + require("@/assets/img/wutai.jpg") + ") !important",
        };
        less.modifyVars({
          ...bodyBg,
          ...themeConfig(theme),
        });
        loadBgImg(10000);
      } else {
        less.modifyVars(themeConfig(theme));
        loadBgImg(10000);
      }
    });
  },
});
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.animate-container {
  width: 100%;
  background-repeat: no-repeat !important;
}
.topline {
  width: 100%;
  height: 5px;
  background: rgba(85, 76, 76, 0.1);
}
</style>
