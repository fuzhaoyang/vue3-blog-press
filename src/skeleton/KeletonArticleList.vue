<template>
 <h2 class="emoji-tip" v-if="showTitle">{{ $t(`myMessage`) }}</h2>
  <div class="skeleton-acticle-container" v-for="item in newColumn" :key="item">
    <div class="article-title chiaroscuro"></div>
    <div class="article-content">
      <a-row>
        <a-col :md="8" :xs="24">
          <div class="tc-img chiaroscuro"></div>
        </a-col>
        <a-col :md="16">
          <div class="text-content">
            <div class="text chiaroscuro"></div>
            <div class="text chiaroscuro"></div>
            <div class="text chiaroscuro"></div>
            <div class="text chiaroscuro"></div>
          </div>
        </a-col>
      </a-row>
      <a-row class="xs-text-content">
        <a-col :xs="24">
          <div class="text-content">
            <div class="text chiaroscuro"></div>
            <div class="text chiaroscuro"></div>
            <div class="text chiaroscuro"></div>
            <div class="text chiaroscuro"></div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article-number">
      <div class="box-icon chiaroscuro"></div>
      <div class="box-icon chiaroscuro"></div>
      <div class="box-icon chiaroscuro"></div>
      <div class="box-icon blog chiaroscuro"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "KeletonArticleList",
  props: ["column"],
  setup(props) {
    const newColumn = new Array(Number(props.column));
    return {
      newColumn,
    };
  },
});
</script>
<style lang="less" scoped>
.skeleton-acticle-container {
  width: 100%;
  height: auto;
  padding: 0 10px;
  margin-top: 8px;
  .article-title {
    width: 70%;
    display: flex;
    height: 20px;
    margin: 10px 0;
  }
}

.tc-img {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}
.text-content {
  width: 100%;
  height: 135px;
  padding: 10px 0 15px 15px;

  .text {
    height: 20px;
    width: 100%;
    margin-bottom: 10px;
  }
}
.article-number {
  width: 100%;
  height: 30px;
  padding-top: 8px;
  .box-icon {
    width: 14%;
    height: 20px;
    float: right;
    margin-left: 15px;
  }
}
.xs-text-content {
  display: none;
}
@media (max-width: 768px) {
  .xs-text-content {
    display: block;
  }
  .text-content {
    padding: 10px 0 0 0;
    height: auto;
  }
  .blog {
    display: none !important;
  }
  .acticle-container {
    border: 1px solid #f0f0f0;
  }
  .text {
    height: 20px !important;
  }
}
</style>
