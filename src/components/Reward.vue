<template>
  <div id="cyReward" class="hidden-xs">
    <div id="cy-reward-click" class="cy-reward-btn cy-reward-btn-yellow" @click="openReward"></div>
    <div id="cy-reward-pop" v-if="showReward">
      <div node-type="cy-close-btn" class="cy-close-btn" @click="close"></div>
      <img
        class="cy-avatar lazy"
        src="https://fuchaoyang.com/statics/img/webinfo/reward_persion.jpg"
      />
      <div class="cy-reward-title">感谢你的支持，我会继续努力！</div>
      <div node-type="cy-reward-code" class="cy-reward-code">
        <img
          node-type="alipay-code"
          src="https://fuchaoyang.com/statics/img/webinfo/alipay.jpg"
          class="lazy"
          v-if="checked"
        />
        <img
          node-type="weichat-code"
          src="https://fuchaoyang.com/statics/img/webinfo/reward_weixin.jpg"
          class="lazy"
          v-if="!checked"
        />
      </div>
      <div class="cy-reward-txt">扫码打赏，建议金额1-10元</div>
      <div node-type="platform-choice" class="platform-choice clearfix">
        <div class="platform-item">
          <span
            node-type="check-platform"
            data-id="alipay"
            class="platform-radio-box"
            :class="{'platform-checked':checked}"
            @click="changeChecked(true)"
          ></span>
          <span class="platform-logo alipay"></span>
        </div>
        <div class="platform-item">
          <span
            node-type="check-platform"
            data-id="weichat"
            class="platform-radio-box"
            :class="{'platform-checked':!checked}"
             @click="changeChecked(false)"
          ></span>
          <span class="platform-logo weichat"></span>
        </div>
      </div>
      <p class="power-cy">
        <a
          href="http://changyan.kuaizhan.com"
          style="text-decoration: none; color: #d1d1d1"
          target="_blank"
          >Powered By 前端小阳仔</a>
          <br />
        提醒：打赏金额将直接进入对方账号，无法退款，请您谨慎操作。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
  name: "Reward",
  props: [],
  components: {},
  setup() {
      const showReward = ref(false);
      const checked = ref(true);
      const openReward =() => {
          showReward.value = true;
      }
      const close = () => {
          showReward.value = false;
      }
      const changeChecked =(e:boolean) => {
          console.log(e)
            checked.value = e;
      }
      return {
          showReward,
          openReward,
          close,
          checked,
          changeChecked
      }
  },
});
</script>
<style lang="less" scoped>
#cyReward {
  text-align: center;
}

#cyReward .cy-reward-btn {
  width: 134px;
  height: 49px;
  display: inline-block;
  background-image: url("https://changyan.sohu.com/img/reward/all-btn.png");
  background-repeat: no-repeat;
  background-position: 0 -196px;
  background-color: none;
  border: 0;
  cursor: pointer;
}
#cyReward .cy-reward-btn:hover {
  background-position: -134px -196px;
}

#cyReward .cy-reward-btn-red {
  background-position: 0 0;
}

#cyReward .cy-reward-btn-red:hover {
  background-position: -134px 0;
}
#cyReward .cy-reward-btn-green {
  background-position: 0 -98px;
}

#cyReward .cy-reward-btn-green:hover {
  background-position: -134px -98px;
}

#cyReward .cy-reward-btn-yellow {
  background-position: 0 -49px;
}

#cyReward .cy-reward-btn-yellow:hover {
  background-position: -134px -49px;
}

#cyReward .cy-reward-btn-cyan {
  background-position: 0 -147px;
}

#cyReward .cy-reward-btn-cyan:hover {
  background-position: -134px -147px;
}

#cyReward #cy-reward-pop {
  width: 548px;
  height: 548px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  position: fixed;
  box-shadow: 0 0 5px #999;
  top: 50%;
  left: 50%;
  margin-left: -274px;
  margin-top: -274px;
  background: #fff;
  z-index: 9999;
}

#cyReward #cy-reward-pop .clearfix {
  zoom: 1;
}

#cyReward #cy-reward-pop .clearfix:after {
  content: ".";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}

#cyReward #cy-reward-pop .cy-close-btn {
  width: 11px;
  height: 10px;
  position: absolute;
  top: 17px;
  right: 14px;
  background: url("https://changyan.sohu.com/img/reward/close.jpg");
  cursor: pointer;
}

#cyReward #cy-reward-pop .cy-avatar {
  width: 65px;
  height: 65px;
  margin: 18px auto 0;
  display: block;
  border-radius: 8px;
}

#cyReward #cy-reward-pop .cy-reward-title {
  width: 100%;
  height: 75px;
  text-align: center;
  line-height: 66px;
  color: #a3a3a3;
  font-size: 16px;
  background: url("https://changyan.sohu.com/img/reward/cy-reward-title-bg.jpg");
  font-family: "Microsoft YaHei";
  margin-top: 7px;
}
#cyReward #cy-reward-pop .cy-reward-code {
  width: 130px;
  height: 130px;
  background: url("https://changyan.sohu.com/img/reward/code-bg.jpg");
  margin: 22px auto 0;
  padding: 17.5px;
  position: relative;
  box-sizing: content-box;
}

#cyReward #cy-reward-pop .cy-reward-code img {
  width: 130px;
  height: 130px;
  position: absolute;
  top: 17.5px;
  left: 17.5px;
}

#cyReward #cy-reward-pop .cy-reward-txt {
  width: 100%;
  text-align: center;
  height: 12px;
  margin-top: 16px;
  font-size: 12px;
  line-height: 12px;
  color: #000;
}

#cyReward #cy-reward-pop .platform-choice {
  width: 320px;
  margin: 48px auto 0;
}

#cyReward #cy-reward-pop .platform-choice .platform-item {
  width: 160px;
  height: 28px;
  position: relative;
  float: left;
}

#cyReward #cy-reward-pop .platform-choice .platform-item-single {
  float: none;
  margin: 0 auto;
}

#cyReward #cy-reward-pop .platform-choice .platform-item .platform-radio {
  position: absolute;
  opacity: 0;
  z-index: 10;
  left: -3px;
  top: 4px;
}

#cyReward #cy-reward-pop .platform-choice .platform-item .platform-radio-box {
  width: 16px;
  height: 16px;
  background: url("https://changyan.sohu.com/img/reward/radio2.jpg");
  display: block;
  float: left;
  margin-top: 5px;
  margin-right: 14px;
}

#cyReward #cy-reward-pop .platform-choice .platform-item .platform-checked {
  background: url("https://changyan.sohu.com/img/reward/radio1.jpg");
}

#cyReward #cy-reward-pop .platform-choice .platform-logo {
  width: 112px;
  height: 28px;
  display: inline-block;
  background-position: 0 0;
  background-repeat: no-repeat;
}

#cyReward #cy-reward-pop .platform-choice .alipay {
  background-image: url("https://changyan.sohu.com/img/reward/alipay.jpg");
}

#cyReward #cy-reward-pop .platform-choice .weichat {
  background-image: url("https://changyan.sohu.com/img/reward/wechat.jpg");
}

#cyReward #cy-reward-pop .power-cy {
  text-align: center;
  color: #d1d1d1;
  font-size: 12px;
  line-height: 18px;
  margin-top: 45px;
}
</style>
