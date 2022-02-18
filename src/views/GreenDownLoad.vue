<template>
  <footer>
    <div class="container">
      <div class="bread-crumb">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <router-link to="/home">
              <i class="iconfont icon-weizhi weizhi"></i>
              <span class="f-bold">首页</span>
            </router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <span class="f-bold">绿色下载</span>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <ul class="search-container">
        <li>
          <label for="search" class="search-label">
            <i class="iconfont icon-40 m-r-2"></i>
            筛选
          </label>
          <input
            type="text"
            id="search"
            v-model="searchKey"
            placeholder="搜索你喜欢的工具、软件、文档"
            @keyup="fuzzySearch"
          />
        </li>
        <li>
          <label class="search-label" style="margin-top:10px">
            <i class="iconfont icon-paixu m-r-2"></i>
            排序
          </label>
          <div class="sort">
            <a-button class="search-type" @click="search('all')">全部</a-button>
            <a-button class="search-type" @click="search('工具')"
              >工具</a-button
            >
            <a-button class="search-type" @click="search('文档')"
              >文档</a-button
            >
            <a-button class="search-type" @click="search('视频教程')"
              >视频课程</a-button
            >
          </div>
        </li>
        <li>
          <label class="search-label">
            <i class="iconfont icon-dianzan_huaban m-r-2"></i>
            精选
          </label>
          <a-radio-group v-model:value="thumbsUp" class="p-t-7" @change="change">
            <a-radio :value="1">全部</a-radio>
            <a-radio :value="2">只看精选</a-radio>
          </a-radio-group>
        </li>
      </ul>
      <div class="row">
        <a-empty v-if="!showData.length" />
        <div class="col-xs-12 col-md-4" v-for="item in showData" :key="item">
          <DownLoadItem
            :column="item"
            :copyId="'copy' + item.id"
          ></DownLoadItem>
        </div>
      </div>
      <div class="row" v-if="showData.length">
        <div class="download-pagination col-md-6 col-md-offset-3">
          <a-pagination
            v-model:current="current"
            :page-size-options="pageSizeOptions"
            v-model:pageSize="pageSize"
            show-size-changer
            :total="total"
            @showSizeChange="onShowSizeChange"
          >
            <template #buildOptionText="props">
              <span v-if="props.value !== '72'">{{ props.value }}条/页</span>
              <span v-else>全部</span>
            </template>
          </a-pagination>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import DownLoadJson from "../hooks/DownLoadJson";
import DownLoadItem from "../components/DownLoadItem.vue";
import { deepCopy } from "../utils/utils";
export default defineComponent({
  name: "GreenDownLoad",
  components: {
    DownLoadItem,
  },
  setup() {
    const num = Number(localStorage.getItem("pageSize") || 9);
    const pageSizeOptions = ref<string[]>(["9", "18", "36", "54", "72"]);
    const pageSize = ref(num);
    const current = ref(1);
    const searchKey = ref(null);
    let originalData = DownLoadJson();
    const showData = ref([]);
    const total = ref(0);
    const thumbsUp = ref<number>(1);
    let downloadData = deepCopy(originalData);
    total.value = downloadData.length;
    showData.value = deepCopy(downloadData).slice(0, pageSize.value);
    const onShowSizeChange = (cur: number, size: number) => {
      localStorage.setItem("pageSize", String(size));
      current.value = cur;
      pageSize.value = size;
      showData.value = deepCopy(downloadData).slice(
        pageSize.value * (current.value - 1),
        pageSize.value * current.value
      );
    };
    watch(pageSize, () => {
      console.log("pageSize", pageSize.value);
    });
    watch(current, () => {
      showData.value = deepCopy(downloadData).slice(
        pageSize.value * (current.value - 1),
        pageSize.value * current.value
      );
    });
    const search = (e: any) => {
      if (e === "all") {
        downloadData = deepCopy(originalData);
      } else {
        downloadData = deepCopy(originalData).filter(
          (item: { type: string | any[] }) => {
            return item.type.includes(e);
          }
        );
      }
      showData.value = deepCopy(downloadData).slice(0, pageSize.value);
      total.value = downloadData.length;
    };
    const fuzzySearch = () => {
      downloadData = deepCopy(originalData).filter(
        (item: { name: null[]; abstract: null[] }) => {
          return (
            item.name.indexOf(searchKey.value) > -1 ||
            item.abstract.indexOf(searchKey.value) > -1
          );
        }
      );
      showData.value = deepCopy(downloadData).slice(0, pageSize.value);
      total.value = downloadData.length;
    };

    const change = () => {
      if (thumbsUp.value === 1) {
        downloadData = deepCopy(originalData);
      } else {
        downloadData = deepCopy(originalData).filter(
          (item: { star: number; }) => {
            return item.star === 5;
          }
        );
      }
      showData.value = deepCopy(downloadData).slice(0, pageSize.value);
      total.value = downloadData.length;
    }
    return {
      pageSize,
      current,
      onShowSizeChange,
      showData,
      search,
      fuzzySearch,
      total,
      searchKey,
      thumbsUp,
      pageSizeOptions,
      change
    };
  },
});
</script>
<style lang="less" scoped>
.bread-crumb {
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  padding: 10px 0 5px 0;
}
.download-pagination {
  margin-top: 40px;
}
.search-container {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 15px 15px 35px 15px;
  li {
    display: flex;
    margin-top: 25px;
    .search-label {
      width: 80px;
      margin: 5px 5px 5px 0;
    }
  }
}
#search {
  flex: 1;
  font-size: 12px;
  padding-left: 10px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  outline: none;
}
.sort {
   width: 100%;
   flex:1;
  .search-type {
    margin-right: 10px;
    margin-top: 10px;
    float: left;
    height: 30px;
    padding: 2px 15px;
  }
}
</style>
