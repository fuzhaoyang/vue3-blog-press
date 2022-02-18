<template>
  <div
    class="download-item"
    :style="{ 'margin-top': height ? height : '30px' }"
  >
    <div class="download-top">
      <div class="d-content">
        <div class="img-c">
          <img :src="column.imgUrl" alt="iTab" />
          <div class="star-c">
            <img
              src="../assets/img/star.png"
              class="star"
              v-for="s in column.star"
              :key="s"
            />
          </div>
        </div>
        <div class="text-c">
          <div class="title-c" @click="goDetail(column)">
            {{ column.name }}
          </div>
          <div class="shot-c" @click="goDetail(column)">
            {{ column.abstract }}
          </div>
        </div>
      </div>
      <div class="tag-c">
        <div class="tag-item" v-for="tool in column.type" :key="tool">
          {{ tool }}
        </div>
      </div>
    </div>
    <div class="tool">
      <div class="share">
        <i class="iconfont icon-fenxiang m-r-2"></i>
        <span :data-clipboard-text="copyText" :class="copyId" @click="copy"
          >分享</span
        >
      </div>
      <div class="download">
        <i class="iconfont icon-xiazai m-r-2"></i>
        <a @click="download(column.downloadUrl)">下载</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clipboard from "clipboard";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "DownLoadItem",
  props: ["column", "height", "copyId"],
  setup(props) {
    let router = useRouter();
    // eslint-disable-next-line vue/no-setup-props-destructure
    const copyId = props.copyId;
    // 详情跳转
    const goDetail = (column: any) => {
      const id = column.id;
      const type = column.type.toString();
      router.push({
        path: `/download/${id}`,
        query: {
          type: type,
        },
      });
    };

    //下载
    const download = (url: string) => {
      window.open(url);
    };

    // 分享
    const copy = () => {
      const clipboard = new Clipboard(`.${copyId}`);
      clipboard.on("success", () => {
        message.success("链接已复制，赶快去分享吧！");
        clipboard.destroy();
      });
    };
    const copyText = `
我在前端小阳仔的博客中发现了『 ${props.column.name} 』💎
快来围观啦
链接： https://fuchaoyang.com/myblog/download/${props.column.id}?type=${String(props.column.type)}`;
    return {
      goDetail,
      download,
      copy,
      copyText
    };
  },
});
</script>
<style lang="less" scoped>
.download-item {
  width: 100%;
  border: 1px solid #eee;
  background: #fff;
  &:hover {
    box-shadow: 0 1px 2px -2px #eee, 0 3px 6px 0 #eee, 0 5px 12px 4px #eee;
  }
  .download-top {
    padding: 15px 15px 0 15px;
    border-bottom: 1px solid #eee;
    .d-content {
      width: 100%;
      display: flex;
      .img-c {
        width: 80px;
        height: 100px;
        img {
          width: 100%;
          height: 80px;
          border-radius: 50%;
        }
        .star-c {
          display: flex;
          margin-left: 5px;
          margin: 10px;
          img {
            width: 20px;
            height: 20px;
            margin-left: -5px;
          }
        }
      }
      .text-c {
        height: 100px;
        flex: 1;
        padding-left: 15px;
        .title-c {
          width: 100%;
          color: #333;
          font-weight: bold;
          line-height: 26px;
          font-size: 16px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .shot-c {
          width: 100%;
          height: 74px;
          color: #999;
          font-size: 13px;
          line-height: 22px;
          padding: 5px 0;
        }
      }
    }
    .tag-c {
      width: 100%;
      height: 20px;
      margin: 15px 0;
      padding: 0 10px;
      display: flex;
      justify-content: flex-end;
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
  .tool {
    width: 100%;
    height: 20px;
    margin: 10px 0;
    display: flex;
    .download,
    .share {
      width: 50%;
      height: 20px;
      text-align: center;
      cursor: pointer;
      &:hover {
        span {
          text-decoration: underline;
        }
      }
    }
    .download {
      border-left: 1px solid #eee;
      a {
        color: #333;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
