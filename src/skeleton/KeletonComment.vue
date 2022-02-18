<template>
  <h2 class="emoji-tip chiaroscuro" v-if="showTitle"></h2>
  <div class="keleton-container">
    <div class="input chiaroscuro"></div>
    <div class="btn-container">
      <div class="icon-content">
        <div class="emj chiaroscuro"></div>
        <div class="img chiaroscuro"></div>
      </div>
      <div class="submit chiaroscuro"></div>
    </div>
    <a-skeleton avatar :paragraph="{ rows: 2 }" />
    <a-skeleton avatar :paragraph="{ rows: 2 }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "KeletonComment",
  props: ["showTitle"],
});
</script>
<style lang="less" scoped>
.input {
  width: 100%;
  height: 100px;
  border-radius: 10px;
}
.btn-container {
  width: 100%;
  height: 50px;
  padding: 15px 0;
  margin-bottom: 30px;
  .icon-content {
    width: 82px;
    height: 20px;
    float: left;
    .emj {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      float: left;
      margin: 0 20px;
    }
    .img {
      width: 22px;
      height: 20px;
      border-radius: 5px;
      float: left;
    }
  }
  .submit {
    width: 100px;
    height: 28px;
    float: right;
    border-radius: 5px;
  }
}
.tips {
  width: 100%;
  height: 30px;
  margin-top: 20px;
}
.title {
  width: 100px;
  height: 30px;
  margin-top: 20px;
}
.emoji-tip {
  width: 100px;
  height: 30px;
  margin: 30px auto;
}
</style>
