<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-8" :class="{ left: hideLeft }">
        <div class="carousel position-r">
          <div class="more-toggle hidden-md hidden-lg f-16" @click="toggleMore">
            {{ $t(`more`) }}
          </div>
          <Carousel></Carousel>
        </div>
        <div class="article-list">
          <div class="content-title">
            <h3>{{ $t(`articleRecommendation`) }}</h3>
          </div>
          <KeletonArticleList v-if="loading" :column="10"></KeletonArticleList>
          <div v-for="column in homeData.articleList" :key="column">
            <ArticleList :column="column"></ArticleList>
          </div>
        </div>
      </div>
      <div
        class="col-md-4 hidden-xs hidden-sm"
        ref="rightDom"
        :class="{ right: showRight }"
      >
        <div
          class="right-container"
          :class="{ 'fix-right': fixRight }"
          :style="{ width: fixRight ? rightWidth : '100%' }"
        >
          <MyContactInformation></MyContactInformation>
          <Advertisement :advertiseData="advertiseData.ad1"></Advertisement>
          <TabsArticles></TabsArticles>
          <Advertisement :advertiseData="advertiseData.ad2"></Advertisement>
          <GraphicList></GraphicList>
          <Advertisement :advertiseData="advertiseData.ad3"></Advertisement>
          <OnlineTools></OnlineTools>
          <TagCloud></TagCloud>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, onMounted } from "vue";
import Carousel from "../components/Carousel.vue";
import ArticleList from "../components/ArticleList.vue";
import MyContactInformation from "../components/MyContactInformation.vue";
import Advertisement from "../components/Advertisement.vue";
import TabsArticles from "../components/TabsArticles.vue";
import TagCloud from "../components/TagCloud.vue";
import GraphicList from "../components/GraphicList.vue";
import OnlineTools from "../components/OnlineTools.vue";
import KeletonArticleList from "../skeleton/KeletonArticleList.vue";
import { getArticleList } from "../api/api";
import { useStore } from "vuex";
export default defineComponent({
  name: "Home",
  components: {
    Carousel,
    ArticleList,
    MyContactInformation,
    Advertisement,
    TabsArticles,
    TagCloud,
    GraphicList,
    KeletonArticleList,
    OnlineTools,
  },
  setup() {
    const showRight = ref(false);
    const hideLeft = ref(false);
    const loading = ref(true);
    const store = useStore();
    const rightDom = ref(null);
    const rightWidth = ref("390px");
    const fixRight = computed(() => (store.getters.getScrollTop > 2000) && (window.screen.width > 768));
    const toggleMore = () => {
      showRight.value = true;
      hideLeft.value = true;
    };
    const homeData = reactive({
      articleList: [],
    });
    getArticleList({
      page: 1,
      per_page: 10,
      categories: 2,
    }).then((res) => {
      homeData.articleList = res.data;
      loading.value = false;
    });
    const advertiseData = {
      ad1: {
        height: "100px",
        linkUrl: "https://fcyblog.com/statics/images//tg/cv.jpg",
        imgUrl: "https://fcyblog.com/statics/images//tg/cv.jpg",
      },
      ad2: {
        height: "100px",
        linkUrl: "https://fcyblog.com/statics/images//tg/cv1.jpg",
        imgUrl: "https://fcyblog.com/statics/images//tg/cv1.jpg",
      },
      ad3: {
        height: "100px",
        linkUrl: "https://fcyblog.com/statics/images//tg/cv2.jpg",
        imgUrl: "https://fcyblog.com/statics/images//tg/cv2.jpg",
      },
      ad4: {
        height: "300px",
        linkUrl: "https://fcyblog.com/statics/images//tg/03.jpg",
        imgUrl: "https://fcyblog.com/statics/images//tg/03.jpg",
      },
    };

    onMounted(() => {
      setTimeout(() => {
        rightWidth.value = (rightDom.value as any).offsetWidth + "px";
      }, 1000);
    });
    return {
      advertiseData,
      homeData,
      toggleMore,
      showRight,
      hideLeft,
      loading,
      fixRight,
      rightDom,
      rightWidth,
    };
  },
});
</script>

<style lang="less" scoped>
.left {
  margin-left: -100%;
  transition: all 1s;
  -moz-transition: all 1s; /* Firefox 4 */
  -webkit-transition: all 1s; /* Safari and Chrome */
  -o-transition: all 1s; /* Opera */
}
.right {
  display: block !important;
}
.container {
  margin-bottom: 30px;
}
.article-list {
  width: 100%;
  min-height: 200px;
  margin-top: 10px;
  padding: 0 5px 0 5px;
  .content-title {
    width: 100%;
    height: 30px;
    line-height: 28px;
    border-bottom: 3px solid #db6d4c;
    text-align: left;
    h3 {
      color: #333;
      font-size: 18px;
      font-weight: 700;
    }
  }
}
.right-container {
  padding: 0 15px;
}
.fix-right {
  width: 360px;
  position: fixed;
  bottom: 220px;
}
.more-toggle {
  color: #1c5831;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 600;
  z-index: 99;
}
@media (max-width: 768px) {
  .container {
    margin-top: 10px;
  }
  .right-container {
    padding: 0;
  }
}
</style>
