<template>
  <div class="advertisement" :style="{ height: advertiseData.height }">
    <a :href="advertiseData.linkUrl">
      <img :src="advertiseData.imgUrl" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Advertisement",
  props: ["advertiseData"],
  setup() {},
});
</script>
<style lang="less" scoped>
.advertisement {
  width: 100%;
  overflow: hidden;
  margin: 15px 0;
  img {
    width: 100%;
    transition:all 1.2s;
    &:hover {
       transform: scale(1.1);  /*以y轴为中心旋转*/
    }
  }
}
</style>
