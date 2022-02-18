<template>
  <div class="show_author">
    <div class="show_utitle">
      <div class="show_ttext chiaroscuro"></div>
    </div>
    <div class="show_person chiaroscuro">
    </div>
    <div class="show_name chiaroscuro"></div>
    <div class="show_a chiaroscuro"></div>
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
       <p class="chiaroscuro"></p>
       <p class="chiaroscuro"></p>
       <p class="chiaroscuro"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "KeletonAuthor",
});
</script>
<style lang="less" scoped>
.show_author {
  width: 100%;
  height: 370px;
}
.show_utitle {
  width: 100%;
  height: 50px;
  position: relative;
}
.show_ttext {
  width: 140px;
  height: 30px;
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
  width: 155px;
  height: 20px;
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
  p {
      height: 15px;
  }
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
  margin-top: 10px;
}
</style>
