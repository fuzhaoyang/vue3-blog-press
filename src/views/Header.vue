<template>
  <header>
    <div class="snow-container">
      <canvas width="100%" height="300" class="snow"></canvas>
    </div>
    <div class="header-container">
      <div class="welcome-container navbar-bg">
        <div class="container">
          <p class="f-color">{{ $t(`header.welcome`) }}</p>
          <div class="skin-container">
            <Langage></Langage>
            <Skin></Skin>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="header-info">
          <div class="text f-color">
            {{ $t(`header.lifePerception`) }}
          </div>
          <div class="title f-color">{{ $t(`header.blogger`) }}</div>
          <p class="info f-color">{{ $t(`header.blogTips`) }}</p>
        </div>
      </div>
      <div
        class="nav-container"
        :class="{
          fixTop: isFixTop,
          'navbar-bg-opacity': isFixTop,
          'navbar-bg': !isFixTop,
        }"
      >
        <div class="logo f-color cur-pointer" v-if="isFixTop">
          <router-link to="/home">
            <span class="f-color">{{ $t(`header.blogger`) }}</span>
          </router-link>
        </div>
        <Navbar :navbarData="headerData.navbarData"></Navbar>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { useStore } from "vuex";
//import { useI18n } from "vue-i18n"; //要在js中使用国际
import Navbar from "../components/Navbar.vue";
import Skin from "../components/Skin.vue";
import Langage from "../components/Langage.vue";
export default defineComponent({
  name: "Header",
  components: {
    Navbar,
    Skin,
    Langage,
  },
  setup() {
    //const { t } = useI18n();
    const headerData = reactive({
      navbarData: [
        {
          // name: t("navbar.home"),
          name: "navbar.home",
          path: "/home",
          active: true,
          id: 2,
        },
        {
          name: "navbar.brokenWords",
          path: "/article",
          active: false,
          id: 3,
        },
        {
          name: "navbar.knowledge",
          path: "/article",
          active: false,
          id: 4,
        },
        {
          name: "navbar.life",
          path: "/article",
          active: false,
          id: 5,
        },
        {
          name: "navbar.studentForum",
          path: "/article",
          active: false,
          id: 6,
        },
        {
          name: "navbar.download",
          path: "/article",
          active: false,
          id: 7,
        },
        {
          name: "navbar.musicCircle",
          path: "/article",
          active: false,
          id: 8,
        },
        {
          name: "绿色下载",
          path: "/download",
          active: false,
          id: 9,
        },
        {
          name: "navbar.message",
          path: "/message",
          active: false,
          id: 10,
        },
      ],
    });
    const store = useStore();
    const isFixTop = computed(
      () => store.getters.getScrollTop > 300 && window.screen.width < 768
    );
    return {
      isFixTop,
      headerData,
    };
  },
});
</script>
<style lang="less" scoped>
@import "../../public/static/theme.less";
.snow-container {
  position: fixed;
  top: 0px;
  left: 0;
  height: 250px;
  pointer-events: none;
  z-index: 100001;
  opacity: 0.2;
  overflow: hidden;
}
.header-container {
  width: 100%;
  height: 300px;
}

.welcome-container {
  width: 100%;
  height: 20px;
}
.container {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  text-align: left;
  p {
    float: left;
  }
  .skin-container {
    float: right;
  }
}
.header-info {
  width: 300px;
  color: #fff;
  padding-top: 15px;
  height: 230px;
}
.text {
  height: 100px;
  line-height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.title {
  margin-top: 10px;
  font-size: 36px;
}
.info {
  margin-top: 10px;
  font-size: 14px;
}
.nav-container {
  width: 100%;
  height: 50px;
  position: relative;
}
.fixTop {
  position: fixed;
  top: 0;
  z-index: 999;
}
.logo {
  width: 155px;
  position: absolute;
  height: 50px;
  left: 3%;
  text-align: center;
  line-height: 45px;
  font-size: 20px;
}
@media (max-width: 768px) {
  .logo {
    display: none;
  }
  .welcome-container {
    height: 28px;
    padding: 4px 0;
  }
}
</style>
