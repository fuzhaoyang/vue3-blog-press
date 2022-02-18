<template>
  <div class="container">
    <ul class="pc-navbar-style hidden-xs hidden-sm">
      <li
        v-for="list in navbarData"
        :key="list"
        :class="{ active: list.active }"
        @click="changeTab(list)"
      >
        <a class="nav-style f-color">
          {{ $t(`${list.name}`) }}
        </a>
      </li>
    </ul>
  </div>
  <div class="mobile-navbar-container hidden-md hidden-lg">
    <div class="mobile-button-container">
      <div class="logo f-color">
        <span class="f-color" v-if="isFixTop">{{ $t(`header.blogger`) }}</span>
      </div>
      <div class="search">
        <input
          type="text"
          v-if="isFixTop"
          class="top-search placeholder-search"
          placeholder="搜索你喜欢的文章"
        />
      </div>
      <div class="toggle" @click="toggle">
        <i class="iconfont icon-mulu1 f-color f-22" icon-sel></i>
      </div>
    </div>
    <ul class="mobile-navbar-style" v-show="showMobileList">
      <li
        v-for="list in navbarData"
        :key="list"
        :class="{ active: list.active }"
        @click="changeTab(list)"
      >
        <router-link :to="list.path">
          <a class="nav-style">
            {{ $t(`${list.name}`) }}
          </a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
interface NavbarList {
  id: number;
  name: string;
  path: string;
  active: boolean;
}
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "Navbar",
  props: ["navbarData"],
  components: {},
  setup(props) {
    const showMobileList = ref(false);
    const router = useRouter();
    const store = useStore();
    const isFixTop = computed(() => store.getters.getScrollTop > 300);
    const path = window.location.href;
    const id = Number(path.split("?id=")[1]);
    props.navbarData.forEach((item: NavbarList) => {
      if (id) {
        return (item.active = item.id === id);
      } else {
        if (path.indexOf("home") > -1) {
          return (item.active = item.id === 2);
        }
        if (path.indexOf("message") > -1) {
          return (item.active = item.id === 10);
        }
        if (path.indexOf("download") > -1) {
          return (item.active = item.id === 9);
        }
      }
    });
    const changeTab = (list: NavbarList) => {
      props.navbarData.forEach((item: NavbarList) => {
        item.active = item.id === list.id;
      });
      showMobileList.value = false;
      const params =
        list.path === "/home" || list.path === "/download"
          ? {}
          : { id: list.id };
      router.push({
        path: list.path,
        query: {
          ...params,
        },
      });
    };
    const toggle = () => {
      showMobileList.value = !showMobileList.value;
    };
    return {
      changeTab,
      toggle,
      showMobileList,
      isFixTop,
    };
  },
});
</script>
<style lang="less" scoped>
.pc-navbar-style li,
.mobile-navbar-style li {
  transition: all 1s;
  &:hover {
    border-bottom: 2px solid #fff;
  }
}

.pc-navbar-style li {
  float: left;
}

.active {
  border-bottom: 2px solid #fff;
}

.nav-style {
  font-size: 16px;
  display: block;
}

.mobile-navbar-style li {
  line-height: 30px;
  padding: 2px 15px;
}
.mobile-navbar-container {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
  .mobile-button-container {
    display: flex;
    padding: 0 15px;
    .logo {
      width: 110px;
      line-height: 50px;
    }
    .search {
      flex: 1;
      padding: 12px;
      .top-search {
        width: 150px;
        height: 26px;
        border: 0;
        outline: none;
        padding-left: 10%;
        font-size: 12px;
        border-radius: 50px !important;
        background: #e3f5ec;
      }
    }
    .toggle {
      line-height: 50px;
      padding: 0 15px;
    }
  }
}
.mobile-navbar-style {
  background: #fff;
  box-shadow: 0 1px 10px #162221;
  padding: 5px 0;
}
.pc-navbar-style {
  overflow: hidden;
  display: block;
}
.pc-navbar-style li {
  line-height: 44px;
  margin: 2px 15px;
  padding: 0 10px;
}
</style>
