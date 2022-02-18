<template>
  <div class="top-container">
    <div class="top-title chiaroscuro"></div>
    <ul>
      <li class="chiaroscuro"></li>
      <li class="chiaroscuro"></li>
      <li class="chiaroscuro"></li>
      <li class="chiaroscuro"></li>
      <li class="chiaroscuro"></li>
      <li class="chiaroscuro"></li>
      <li class="chiaroscuro"></li>
      <li class="chiaroscuro"></li>
      <li class="chiaroscuro"></li>
      <li class="chiaroscuro"></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "KeletonTopArticle",
});
</script>

<style lang="less" scoped>
.top-title {
  width: 120px;
  height: 20px;
}

ul li {
  width: 90%;
  height: 20px;
  margin: 10px 0;
}
</style>
