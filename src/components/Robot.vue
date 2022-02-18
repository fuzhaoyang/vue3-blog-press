<template>
  <div
    id="spig"
    class="spig"
    :style="{ left: robotObj.left, top: robotObj.top }"
  >
    <div id="message" style="opacity: 1">
      {{ message }}
    </div>
    <div id="mumu" class="mumu" style="opacity: 1" @click="moveRobot"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "Robot",
  components: {},
  setup() {
    const robotObj = reactive({
      startClick: 0,
      ismove: false,
      autoMsgs: [
        "好无聊啊！",
        "陪我聊天吧！",
        "你在干什么哦！",
        "好无聊哦，你都不陪我玩！",
        "…@……!………",
        "^%#&*!@*(&#)(!)(",
        "我可爱吧！嘻嘻!~^_^!~~",
        "谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~",
        "从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”",
      ],
      clickMin: ["你有完没完呀？", "", "非礼呀！救命！OH，My ladygaga"],
      clickMax: [
        "筋斗云！~我飞！",
        "我跑呀跑呀跑！~~",
        "别摸我，大男人，有什么好摸的！",
        "惹不起你，我还躲不起你么？",
        "不要摸我了，我会告诉老婆来打你的！",
        "干嘛动我呀！小心我咬你！",
      ],
      autoFly: [
        "好无聊啊！",
        "陪我聊天吧！",
        "你在干什么哦！",
        "乾坤大挪移！",
        "我飘过来了！~",
        "我飘过去了",
        "我得意地飘！~飘！~",
      ],
      left: "80%",
      top: "100px",
    });
    let message = ref<any>("这里有很多你喜欢的文章哦！");
    setInterval(() => {
      let i = Math.floor(Math.random() * robotObj.autoMsgs.length);
      message.value = robotObj.autoMsgs[i];
      getPosition();
    }, 10000);

    const moveRobot = () => {
      if (!robotObj.ismove) {
        robotObj.startClick++;
        if (robotObj.startClick > 4) {
          message.value = "你已经摸我" + robotObj.startClick + "次了";
        } else {
          message.value = robotObj.clickMax[robotObj.startClick];
        }
      } else {
        robotObj.ismove = false;
      }
      getPosition();
    };

    const getPosition = () => {
      const s = [
        0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5,
        -0.6, -0.7, -0.75,
      ];
      const i1 = Math.floor(Math.random() * s.length);
      const i2 = Math.floor(Math.random() * s.length);
      robotObj.left = (document.body.offsetWidth / 2) * (1 + s[i1]) + "px";
      robotObj.top = (document.body.offsetHeight / 2) * (1 + s[i2]) + "px";
    };
    return {
      message,
      robotObj,
      moveRobot,
    };
  },
});
</script>
<style lang="less" scoped>
/*滚动小管家开始*/
.spig {
  display: block;
  width: 75px;
  height: 95px;
  position: absolute;
  z-index: 99;
  transition: all 3s;
}
#message {
  color: #191919;
  border: 1px solid #c4c4c4;
  background: #ddd;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  min-height: 1em;
  padding: 5px;
  top: -30px;
  position: absolute;
  text-align: center;
  width: auto !important;
  z-index: 10000;
  -moz-box-shadow: 0 0 15px #eeeeee;
  -webkit-box-shadow: 0 0 15px #eeeeee;
  border-color: #eeeeee;
  box-shadow: 0 0 15px #eeeeee;
  outline: none;
}
.mumu {
  width: 150px;
  height: 190px;
  cursor: move;
  background: url(https://fcyblog.com/statics/images/tg/spig.png);
}

.content-text:hover {
  border-bottom: 1px solid #db6d4c;
  border-top: 1px solid #db6d4c;
}

/*滚动小管家结束*/
</style>
