<template>
  <div class="container detail-view">
    <div class="row">
      <div class="col-xs-12 col-md-8 left">
        <div class="detail-container">
          <div class="bread-crumb">
            <a-breadcrumb>
              <a-breadcrumb-item>
                <router-link to="/home">
                  <i class="iconfont icon-weizhi weizhi"></i>
                  <span class="f-bold">首页</span>
                </router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                <router-link to="/download">
                  <span class="f-bold">绿色下载</span>
                </router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                <span class="f-bold">资源详情</span>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <div class="detail-container">
            <img
              :src="detailData.data.imgUrl"
              alt="detailData.data.name"
              class="image"
            />
            <h3 class="text-center">{{ detailData.data.name }}</h3>
            <p class="text-center m-t-10">{{ detailData.data.abstract }}</p>
            <p class="text-center m-t-10">可免费下载（遇到下载问题，欢迎评论留言！扫码微信、QQ、小程序联系帮您解决）</p>
            <div class="tag-c">
              <div class="flex-1"></div>
              <div
                class="tag-item"
                v-for="tag in detailData.data.type"
                :key="tag"
              >
                {{ tag }}
              </div>
              <div class="flex-1"></div>
            </div>
            <p class="m-t-30">下载链接： <a @click="download(detailData.data.downloadUrl)">{{detailData.data.downloadUrl}}</a></p>
            <p class="m-t-20">提取码：{{detailData.data.password}}</p>
            <p class="m-t-20">更新时间：{{detailData.data.time}}</p>
            <Reward/>
          </div>

          <div class="comment">
            <Comment :id="'download'"></Comment>
          </div>
        </div>
      </div>
      <div class="col-md-4 hidden-xs hidden-sm">
        <div class="resourse-title">相似资源</div>
        <div v-for="item in detailData.similarResources" :key="item">
          <DownLoadItem :column="item" :height="'15px'" :copyId="'copy'+item.id"></DownLoadItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import Comment from "../components/Comment.vue";
import DownLoadJson from "../hooks/DownLoadJson";
import { deepCopy } from "../utils/utils";
import DownLoadItem from "../components/DownLoadItem.vue";
import Reward from "../components/Reward.vue"
export default defineComponent({
  name: "DownLoadDetail",
  components: {
    Comment,
    DownLoadItem,
    Reward
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const detailData = reactive({
      originalData: DownLoadJson().map(item => {
        item.downloadUrl = item.downloadUrl.split('?')[0];
        return item;
      }),
      data: [],
      id: Number(window.location.pathname.split("/")[3]),
      type: "",
      similarResources: [],
    });

     detailData.id = Number(window.location.pathname.split("/")[3]);
    (detailData.type as any) = router.currentRoute.value.query.type || "";

    // 初始化渲染数据
    const renderData = () => {
      detailData.data = deepCopy(detailData.originalData).filter(
        (item: any) => item.id === detailData.id
      )[0];
      detailData.similarResources = deepCopy(detailData.originalData).filter(
        (item: { type: string[]; id: number }) => {
          return item.id !== detailData.id && item.type.some((list: string) => {
            return (
               detailData.type.indexOf(list) > -1
            );
          });
        }
      );
      if (!detailData.similarResources.length) {
        detailData.similarResources = deepCopy(detailData.originalData).filter((item: { id: number; }) => item.id !== detailData.id).slice(
          0,
          4
        );
      } else {
        if (detailData.similarResources.length > 4) {
          detailData.similarResources = detailData.similarResources.slice(0, 4);
        }
      }
    };
    renderData();

    // 打开下载页面
    const download = (url:string) => {
      window.open(url);
    }

    // 检测同页面数据更新
    watch(
      () => route.fullPath,
      (n, o) => {
        if (n !== o  && n.split('/').length > 2) {
         const routeArr = n.split('/')[2].split('?');
           detailData.id =Number(routeArr[0]);
          (detailData.type as any) = routeArr[1];
          renderData();
        }
      }
    );
    return {
      detailData,
      download
    };
  },
});
</script>
<style lang="less" scoped>
.detail-view {
  background: #ffffff80;
  min-height: 400px;
  .bread-crumb {
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    padding: 10px 0 5px 0;
  }
}
.resourse-title {
  width: 100%;
  height: 48px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  text-align: left;
  padding-left: 10px;
  margin-top: 5px;
}
.detail-container {
  width: 100%;
  .image {
    display: table-cell;
    height: 100px;
    height: 100px;
    margin: 30px auto 20px auto;
  }
  .tag-c {
    margin: 10px auto;
    display: flex;
    .tag-item {
      padding: 1px 6px;
      font-size: 12px;
      background: #fafafa;
      border: 1px solid #eee;
      border-radius: 2px;
      margin-left: 10px;
    }
  }
}
</style>
