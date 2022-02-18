<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link f-color" @click.prevent>
      {{$t(`header.skin`)}}
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-sub-menu key="sub1" title="简约版">
          <a-menu-item key="theme0">
            <span class="f-12">男生版</span>
          </a-menu-item>
          <a-menu-item key="theme1">
            <span class="f-12">女生版</span>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="theme2">海蓝版</a-menu-item>
        <a-menu-item key="theme3">冬青版</a-menu-item>
        <a-menu-item key="theme4">文艺范</a-menu-item>
        <a-menu-item key="theme5">海清版</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { DownOutlined } from "@ant-design/icons-vue";
import less from "less";
import themeConfig from "../hooks/themeConfig";
interface MenuInfo {
  key: string;
  keyPath: string[];
  item: any;
  domEvent: MouseEvent;
}
export default defineComponent({
  name: "Skin",
  components: {
    DownOutlined,
  },
  setup() {
    const handleMenuClick = async (e: MenuInfo) => {
      less.modifyVars(themeConfig(e.key));
      localStorage.removeItem("theme");
      localStorage.setItem("theme", e.key);
    };
    onMounted(() => {
      console.log("渲染完成");
    });
    return {
      handleMenuClick,
    };
  },
});
</script>

<style scoped>
@import "../../public/static/theme.less";
</style>
