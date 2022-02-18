<template>
  <div class="loading-container">
    <a-spin size="large" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  props: ["size"],
  setup() {},
});
</script>

<style lang="less" scoped>
.loading-container {
  width: 40px;
  height: 40px;
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom: 0;
  margin: auto;
  z-index: 9999;
}
</style>
