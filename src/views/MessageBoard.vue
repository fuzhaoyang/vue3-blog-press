<template>
  <div class="container">
    <a-row type="flex" justify="center">
      <a-col :xs="24" :md="18">
        <Comment :id="0" :showTitle="true" :skeleton="true"></Comment>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Comment from "../components/Comment.vue";
export default defineComponent({
  name: "MessageBoard",
  components: {
    Comment,
  },
  setup() {},
});
</script>
<style scoped>
.container {
  background: #ffffff80;
  min-height: 600px;
}
</style>
