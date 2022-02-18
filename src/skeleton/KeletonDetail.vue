<template>
  <div class="detail-container">
    <div class="bread">
      <div class="text chiaroscuro"></div>
    </div>
    <div class="skeleton-title">
      <div class="title-text chiaroscuro"></div>
    </div>
    <div class="skeleton-title">
      <div class="chiaroscuro" style="width: 300px; height: 15px"></div>
    </div>
    <div class="skeleton-content">
      <ul>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro" style="height: 200px"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro" style="height: 200px"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro" style="height: 200px"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro" style="height: 200px"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
        <li class="chiaroscuro"></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "KeletonDetail",
});
</script>
<style lang="less" scoped>
.bread {
  width: 100%;
  height: 50px;
  padding-top: 15px;
  .text {
    width: 250px;
    height: 25px;
  }
}
.skeleton-title {
  width: 100%;
  margin-top: 10px;
  height: 20px;
  display: flex;
  justify-content: center;
  .title-text {
    width: 200px;
    height: 20px;
  }
}

.skeleton-content {
  width: 100%;
  min-height: 300px;
  padding: 0 10px 10px 10px;
  color: #555555;
  overflow: hidden;
  font-size: 14px;
  ul li {
    height: 20px;
    margin-top: 10px;
  }
}
</style>
