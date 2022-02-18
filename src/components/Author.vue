<template>
  <div class="show_author">
    <div class="show_utitle">
      <div class="show_ttext">Programmer</div>
      <div class="trgglesanjiao">
        <img
          src="https://fcyblog.com/statics/images/tg/triangle_right.png"
          alt=""
          class="lazy"
        />
      </div>
    </div>
    <div class="show_person">
      <img
        src="https://fuchaoyang.com/statics/img/webinfo/reward_persion.jpg"
        alt=""
        class="lazy"
      />
    </div>
    <div class="show_name">{{author.name}}</div>
    <div class="show_a">全栈工程师</div>
    <div class="jingtong">
      <div class="show_img1">
        <img
          src="https://fcyblog.com/statics/images/tg/icon_l.png"
          alt=""
          class="lazy"
        />
      </div>
      <div class="show_img2">
        <img
          src="https://fcyblog.com/statics/images/tg/icon_r.png"
          alt=""
          class="lazy"
        />
      </div>
      {{author.description}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Author",
  props:['author']
});
</script>
<style lang="less" scoped>
.show_author {
  width: 100%;
  height: 370px;
  background: #a9adc014;
}
.show_utitle {
  width: 100%;
  height: 50px;
  position: relative;
}
.show_ttext {
  width: 140px;
  height: 30px;
  background: #d13030;
  color: #fff;
  line-height: 30px;
  text-align: center;
  position: absolute;
  top: 10px;
  left: -7px;
}
.trgglesanjiao {
  position: absolute;
  top: 30px;
  left: -7px;
}
.show_person {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin: 5px auto;
  overflow: hidden;
}
.show_person img {
  height: 100%;
}
.show_a {
  width: 105px;
  height: 25px;
  color: #ffa03b;
  border: solid 1px #ffa03b;
  text-align: center;
  font-size: 14px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 10px;
}
.jingtong {
  width: 100%;
  height: 130px;
  position: relative;
  padding: 30px;
  font-size: 14px;
  line-height: 30px 20px 30px 20px;
  color: #333;
}
.show_img1 {
  position: absolute;
  left: 20px;
  top: 10px;
}
.show_img2 {
  position: absolute;
  right: 20px;
  top: 100px;
}
.show_name {
  width: 100px;
  height: 20px;
  margin: 0 auto;
  line-height: 20px;
  text-align: center;
  margin-top: 10px;
}
</style>
