<template>
  <div class="container detail-view">
    <div class="row">
      <div class="col-xs-12 col-md-8 left">
        <KeletonDetail v-if="detailData.contentLoading" />
        <div class="detail-container" v-if="!detailData.contentLoading">
          <div class="bread-crumb">
            <a-breadcrumb>
              <a-breadcrumb-item>
                <router-link to="/home">
                  <i class="iconfont icon-weizhi weizhi"></i>
                  <span class="f-bold">首页</span>
                </router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                <router-link :to="articlePath">
                  <span class="f-bold">{{ categoryTitle }}</span>
                </router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                <span class="f-bold">文章详情</span>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <div class="a-title">{{ detailData.content?.title?.rendered }}</div>
          <div class="shcon-time">
            <span>
              发布时间：{{detailData.time}}&nbsp;&nbsp;&nbsp;作者：{{detailData.auth}}&nbsp;&nbsp;&nbsp;
              <a @click="scrollToComment"><img src="../assets/img/text-message.png" width="15" height="15" class="m-r-2">我要评论</a>
            </span>
          </div>
          <div
            class="content"
            :style="{ 'max-height': !showMore ? 'none' : '1350px' }"
            ref="contentDom"
          >
            <HtmlRender
              :content="detailData.content?.content?.rendered"
            ></HtmlRender>
            <Reward></Reward>
            <div class="article-content-body-more" v-if="showMore">
              <span @click="more">查看更多</span>
            </div>
          </div>
          <div class="comment">
            <Comment :id="articleId"></Comment>
          </div>
        </div>
      </div>
      <div
        class="col-md-4 hidden-xs hidden-sm right"
        ref="rightDom"
        :class="{ right: showRight }"
      >
        <div
          class="right-container"
          :class="{ 'fix-right': fixRight }"
          :style="{ width: fixRight ? rightWidth : '100%' }"
        >
          <KeletonAuthor v-if="detailData.authorLoading" />
          <Author
            :author="detailData.author"
            v-if="!detailData.authorLoading"
          />
          <Advertisement :advertiseData="advertise"></Advertisement>
          <KeletonTopArticle v-if="detailData.topLoading" />
          <TopArticle
            :topList="detailData.topList"
            :title="'最新文章'"
            v-if="!detailData.topLoading"
          />
          <Advertisement :advertiseData="advertise"></Advertisement>
          <KeletonTopArticle v-if="detailData.randomLoading" />
          <TopArticle
            :topList="detailData.randomList"
            :title="'您可能还喜欢'"
            v-if="!detailData.randomLoading"
          />
           <TagCloud></TagCloud>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getArticle, getAuthor, getTopList, getRandomArticle } from "@/api/api";
import { defineComponent, reactive, ref, computed, onMounted } from "vue";
import {  dateFormat } from "../utils/utils";
import KeletonDetail from "../skeleton/KeletonDetail.vue";
import Author from "../components/Author.vue";
import KeletonAuthor from "../skeleton/KeletonAuthor.vue";
import TopArticle from "../components/TopArticle.vue";
import KeletonTopArticle from "../skeleton/KeletonTopArticle.vue";
import HtmlRender from "../components/HtmlRender.vue";
import Comment from "../components/Comment.vue";
import Reward from "../components/Reward.vue";
import Advertisement from "../components/Advertisement.vue";
import TagCloud from "../components/TagCloud.vue"
import { useStore } from "vuex";
import scrollAnimation from "../hooks/scrollAnimation";
export default defineComponent({
  name: "Detail",
  components: {
    KeletonDetail,
    Author,
    KeletonAuthor,
    TopArticle,
    KeletonTopArticle,
    HtmlRender,
    Comment,
    Reward,
    Advertisement,
    TagCloud
  },
  setup() {
    const articleId = window.location.pathname.split("/")[3];
    const articlePath = ref("");
    const categoryTitle = ref("");
    const contentDom = ref(null);
    const showMore = ref(false);
    const store = useStore();
    const rightDom = ref(null);
    const leftDom = ref(1580);
    const rightWidth = ref("390px");
    const fixRight = computed(
      () => store.getters.getScrollTop > 1580 && window.screen.width > 768 && leftDom.value > 1580
    );
    const advertise = {
      height: "100px",
      linkUrl: "https://fcyblog.com/statics/images//tg/cv1.jpg",
      imgUrl: "https://fcyblog.com/statics/images//tg/cv1.jpg",
    };
    const routemap = {
      "3": "HTML",
      "4": "CSS",
      "5": "JavaScript",
      "6": "vue.js",
      "7": "前端小知识",
      "8": "面试题",
    };
    const more = () => {
      showMore.value = !showMore.value;
       setTimeout(() => {
        leftDom.value = (contentDom.value as any).offsetHeight;
        if (leftDom.value < 1350) {
          leftDom.value = leftDom.value + 354;
        }
      }, 100);
    };
    const detailData = reactive({
      content: {},
      author: {},
      topList: {},
      randomList: {},
      contentLoading: true,
      authorLoading: true,
      topLoading: true,
      randomLoading: true,
      time:'最新发布',
      auth:'富朝阳'
    });
    const scrollToComment = () => {
      const currentY = document.documentElement.scrollTop;
      scrollAnimation(currentY, leftDom.value);
      store.commit("setScrollTop", leftDom.value);
    }
    getArticle(articleId).then((res) => {
      detailData.content = res;
      detailData.time = dateFormat("YYYY-mm-dd", new Date(res.date));
      const categoryId = res.categories[0];
      articlePath.value = `/article?id=${categoryId}`;
      categoryTitle.value = routemap[categoryId];
      detailData.contentLoading = false;
      setTimeout(() => {
        const width = (contentDom.value as any).offsetHeight;
        showMore.value = width > 1300;
        if (width < 1350) {
          leftDom.value = width + 354;
        }
      }, 500);
    });
    getAuthor(1).then((res) => {
      detailData.author = res;
      detailData.authorLoading = false;
    });
    getTopList().then((res) => {
      detailData.topList = res;
      detailData.topLoading = false;
    });
    getRandomArticle().then((res) => {
      detailData.randomList = res;
      detailData.randomLoading = false;
    });
    onMounted(() => {
      setTimeout(() => {
        rightWidth.value = (rightDom.value as any).offsetWidth + "px";
      }, 1000);
    });
    return {
      detailData,
      showMore,
      more,
      articleId,
      articlePath,
      categoryTitle,
      fixRight,
      rightDom,
      rightWidth,
      advertise,
      contentDom,
      scrollToComment
    };
  },
});
</script>
<style lang="less">
.detail-view {
  background: #ffffff80;
  min-height: 400px;
  .bread-crumb {
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    padding: 10px 0 5px 0;
  }
  .a-title {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin-top: 10px;
    color: #333;
    font-size: 20px;
    line-height: 35px;
    font-weight: bold;
    overflow: hidden;
    padding: 0 5px 5px;
    font-family: "微软雅黑";
  }
  .shcon-time {
    width: 100%;
    height: 12px;
    text-align: center;
    line-height: 12px;
    color: #999;
    font-size: 12px;
    margin: 5px 0;
    span a {
       color: #999;
       &:hover {
         text-decoration: underline;
       }
    }
  }
  .content {
    width: 100%;
    padding: 10px;
    color: #555555;
    overflow: hidden;
    font-size: 14px;
    position: relative;
    div {
      h3 {
        margin: 15px 0 8px 0;
        color: #0d5a96;
        background: #f1f7fd;
        border: 1px dashed #cae0f3;
        border-left: 3px solid #49a7ea;
        padding: 10px;
        font-size: 16px;
        font-weight: bold;
      }
      h2,
      h4 {
        line-height: 30px;
      }
    }
    .article-content-body-more {
      position: absolute;
      text-align: center;
      width: 100%;
      position: absolute;
      bottom: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.5) 0,
        rgba(255, 255, 255, 1) 100%
      );
      height: 200px;
      bottom: 0px;
      vertical-align: bottom;
      span {
        cursor: pointer;
        display: block;
        padding: 6px;
        color: #56ce2e;
        font-weight: bold;
        bottom: 0;
        margin-top: 167px;
        background: white;
        background-image: url(/Content/Images/ico-arrowdown.png);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 44% 50%;
      }
    }

    p {
      color: #222;
      img {
        width: 100% !important;
      }
    }
  }
  .right-container {
    padding: 15px 0 15px 15px;
  }
  .fix-right {
    width: 360px;
    position: fixed;
    bottom: 210px;
  }
}
</style>
