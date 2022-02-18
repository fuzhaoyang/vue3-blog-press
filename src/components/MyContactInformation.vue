<template>
  <div class="contact-title">{{$t(`attentionMe`)}}</div>
  <div class="contact-container">
    <div class="contact-item">
      <a href="http://weibo.com/u/5813792483">
        <img
          src="../assets/img/ico_05_1.png"
          class="focus-box-img"
        />
      </a>
      <div class="focus-box-text">{{$t(`sinaWeibo`)}}</div>
    </div>
    <div class="contact-item">
      <a href="http://t.qq.com/FZY13891207467FZY">
        <img
          src="../assets/img/ico_06_1.png"
          class="focus-box-img"
        />
      </a>
      <div class="focus-box-text">{{$t(`tencentWeibo`)}}</div>
    </div>
    <div class="contact-item">
      <a href="http://www.163.com/rss/">
        <img
          src="../assets/img/ico_04_1.png"
          class="focus-box-img"
        />
      </a>
      <div class="focus-box-text">{{$t(`rss`)}}</div>
    </div>
    <div class="contact-item">
      <a href="mailto:932647051@qq.com">
        <img
          src="../assets/img/ico_07_1.png"
          class="focus-box-img"
        />
      </a>
      <div class="focus-box-text">{{$t(`email`)}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyContactInformation",
  setup() {},
});
</script>
<style lang="less" scoped>
.contact-title {
  width: 100%;
  height: 48px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  text-align: left;
}
.contact-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 40px 0 20px 0;
  .contact-item {
    height: 100px;
    display: flex;
    flex-direction: column;
  }

  .focus-box-text {
    width: 100%;
    line-height: 40px;
    font-size: 12px;
    color: #666666;
    text-align: center;
  }
  .focus-box-img :nth-child(1) {
    background: url("https://fcyblog.com/statics/images/tg/ico_05_1.jpg")
      no-repeat center;
  }
  .focus-box-img :nth-child(1):hover {
    background: url("https://fcyblog.com/statics/images/tg/ico_05.png")
      no-repeat center;
  }
  .contact-item :nth-child(2) a .focus-box-img {
    background: url("https://fcyblog.com/statics/images/tg/ico_06_1.jpg")
      no-repeat;
  }
  .contact-item :nth-child(2) .focus-box-img:hover {
    background: url("https://fcyblog.com/statics/images/tg/ico_06.png")
      no-repeat center;
  }
  .contact-item :nth-child(3) .focus-box-img {
    background: url("https://fcyblog.com/statics/images/tg/ico_04_1.jpg")
      no-repeat center;
  }
  .contact-item :nth-child(3) .focus-box-img:hover {
    background: url("https://fcyblog.com/statics/images/tg/ico_04.png")
      no-repeat;
  }
  .contact-item :nth-child(4) .focus-box-img {
    background: url("https://fcyblog.com/statics/images/tg/ico_07_1.jpg")
      no-repeat center;
  }
  .fcontact-item :nth-child(4) .focus-box-img:hover {
    background: url("https://fcyblog.com/statics/images/tg/ico_07.png")
      no-repeat center;
  }
  .focus-icon-bottom {
    width: 100%;
    height: 100px;
    overflow: hidden;
  }
  .focus-icon-bottom img {
    width: 100%;
  }
}
</style>
