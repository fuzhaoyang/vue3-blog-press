<template>
  <div class="container">
    <div class="bread-crumb">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <i class="iconfont icon-weizhi weizhi"></i>
          <router-link to="/home"><span class="f-bold">首页</span></router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <span class="f-bold">{{ categoryTitle }}</span>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="empty-content" v-if="empty">
      <a-empty />
    </div>
    <div class="content" v-if="loading">
      <div class="row">
        <div class="col-lg-3 hidden-xs hidden-sm hidden-md">
          <div class="keleton-time-axis">
            <div class="time-box chiaroscuro">
              <div class="keleton-circle"></div>
            </div>
          </div>
          <div class="keleton-time-axis">
            <div class="time-box chiaroscuro">
              <div class="keleton-circle"></div>
            </div>
          </div>
          <div class="keleton-time-axis">
            <div class="time-box chiaroscuro">
              <div class="keleton-circle"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-xs-12 col-sm-12 col-md-12">
          <KeletonArticleList :column="3"></KeletonArticleList>
        </div>
      </div>
    </div>
    <div class="content" v-if="!loading">
      <div class="row" v-for="column in articleList" :key="column">
        <div class="col-lg-3 hidden-xs hidden-sm hidden-md">
          <div class="time-axis">
            <div class="create-time">
              <div class="list_circle"></div>
              2017-10-09 16:33
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-xs-12 col-sm-12 col-md-12">
          <ArticleList :column="column"></ArticleList>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import ArticleList from "../components/ArticleList.vue";
import { useRoute, useRouter } from "vue-router";
import { getArticleList } from "../api/api";
import KeletonArticleList from "../skeleton/KeletonArticleList.vue";
export default defineComponent({
  name: "CategoryList",
  components: {
    ArticleList,
    KeletonArticleList,
  },
  setup() {
    let articleList = ref([]);
    let loading = ref(true);
    const route = useRoute();
    const categoryTitle = ref("");
    const empty = ref(false);
    const router = useRouter();
    const routemap = {
      "3": "HTML",
      "4": "CSS",
      "5": "JavaScript",
      "6": "vue.js",
      "7": "前端小知识",
      "8": "面试题",
    };
    const queryArticleData = (pageId: number, pageSize: number) => {
      loading.value = true;
      empty.value = false;
      const id = router.currentRoute.value.query.id;
      categoryTitle.value = routemap[String(id)];
      getArticleList({
        page: pageId,
        per_page: pageSize,
        categories: id,
      }).then((res) => {
        articleList.value = res.data;
        loading.value = false;
        if (!res.data.length) {
        empty.value = true;
        }
      });
    };
    queryArticleData(1, 10);
    watch(
      () => route.fullPath,
      (n, o) => {
        if (n !== o) {
          queryArticleData(1, 10);
        }
      }
    );

    return {
      articleList,
      loading,
      categoryTitle,
      empty
    };
  },
});
</script>
<style lang="less" scoped>
.container {
  min-height: 388px;
}
.bread-crumb {
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  padding: 10px 0 5px 0;
  margin-bottom: 30px;
}
.time-axis {
  width: 85%;
  height: 216px;
  border-right: 1px solid #e6e6e6;
  position: relative;
  .create-time {
    line-height: 50px;
    padding-right: 20px;
    color: #333;
    position: absolute;
    right: 0;
    top: 80px;
    .list_circle {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 3px solid #52c41a;
      position: absolute;
      right: -4px;
      top: 40%;
      background: #fff;
    }
  }
}
.keleton-time-axis {
  width: 85%;
  height: 195px;
  border-right: 1px solid #bebebe33;
  position: relative;
  .time-box {
    width: 130px;
    height: 20px;
    position: absolute;
    right: 20px;
    border-radius: 3px;
    top: 80px;
    .keleton-circle {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 4px solid #bebebe33;
      position: absolute;
      right: -24px;
      top: 30%;
      background: #fff;
    }
  }
}
.empty-content {
  padding: 5% 0;
}
@media (max-width: 768px) {
  .bread-crumb {
    margin-bottom: 10px;
  }
}
</style>
