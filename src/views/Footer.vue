<template>
  <footer>
    <div class="container">
      <div class="row">
        <div
          class="col-md-5 col-md-offset-1 hidden-xs hidden-sm"
          style="display: flex; justify-content: space-around"
        >
          <div class="img-item">
            <img
              src="https://fuchaoyang.com/statics/img/webinfo/weixin.jpg"
              alt=""
            />
            <p>加我微信</p>
          </div>
          <div class="img-item">
            <img
              src="https://fuchaoyang.com/statics/img/webinfo/qq.jpg"
              alt=""
            />
            <p>加我QQ</p>
          </div>
          <div class="img-item">
            <img
              src="https://fuchaoyang.com/statics/img/webinfo/applet.jpg"
              alt=""
            />
            <p>小程序浏览</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="web-info">
            <p>小阳仔个人博客网站 版权所有。</p>
            <p>Copyright © www.fuchaoyang.com All Rights Reserved.</p>
            <p>
              前端小阳仔 Design by 朝阳 备案号：<a @click="openGov"
                >陕ICP备19013504号-2</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  setup() {
    let openGov = () => {
      window.open("https://beian.miit.gov.cn/#/Integrated/index");
    };

    return {
      openGov,
    };
  },
});
</script>
<style lang="less" scoped>
footer {
  border-top: 1px solid #eee;
  margin-top: 30px;
  padding-top: 30px;
}
.img-item {
  width: 100px;
  height: 130px;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  img {
    width: 100px;
    height: 100px;
  }
}
.web-info {
  flex: 1;
  font-size: 14px;
  text-align: left;
  padding: 20px 0;
  p a {
    color: #555;
    text-decoration: underline;
  }
}
@media (max-width: 992px) {
  .web-info {
    text-align: center;
  }
  footer {
    margin-top: 15px;
    padding-top: 0px;
  }
}
</style>
