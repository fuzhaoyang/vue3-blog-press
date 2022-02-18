<template>
  <a-carousel autoplay effect="fade" dots="false">
    <div class="carousel-item">
      <img src="../assets/img/a1.jpg" alt="" />
      <div class="banner-des">
        <div class="banner-title">欧文</div>
        <div class="banner-text">真理惟一可靠的标准就是永远自相符合。</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/img/a2.jpg" alt="" />
      <div class="banner-des">
        <div class="banner-title">欧文</div>
        <div class="banner-text">真理惟一可靠的标准就是永远自相符合。</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/img/a3.jpg" alt="" />
      <div class="banner-des">
        <div class="banner-title">欧文</div>
        <div class="banner-text">真理惟一可靠的标准就是永远自相符合。</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/img/a4.jpg" alt="" />
      <div class="banner-des">
        <div class="banner-title">欧文</div>
        <div class="banner-text">真理惟一可靠的标准就是永远自相符合。</div>
      </div>
    </div>
  </a-carousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Carousel",
  setup() {},
});
</script>
<style lang="less" scoped>
.carousel-item {
  position: relative;
  height: 280px;
  img {
    height: 100%;
    width: 100%;
  }
  .banner-des {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    position: absolute;
    bottom: 0;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    display: flex;
    .banner-title {
      padding-left: 10px;
      width: 60px;
      height: 30px;
      text-align: left;
    }
    .banner-text {
      width: 240px;
      height: 30px;
      flex: 1;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
