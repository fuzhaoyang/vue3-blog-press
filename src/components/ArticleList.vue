<template>
  <div class="acticle-container">
    <div class="article-title">
      <div class="ct-icon">
        <img src="https://fcyblog.com/statics/images//tg/note.png" />
      </div>
      <div
        class="title cur-pointer text-overflow"
        @click="goDetail(column.id)"
        :title="column.title.rendered"
      >
        {{ column.title.rendered }}
        <i class="iconfont icon-07jiantouxiangyoufill"></i>
      </div>
    </div>
    <div class="article-content">
      <a-row>
        <a-col :md="8" :xs="24">
          <div class="tc-img">
            <a
              href="http://fcyblog.com/index.php?m=content&amp;c=index&amp;a=show&amp;catid=16&amp;id=57"
              ><img v-lazy="imgUrl"
            /></a>
          </div>
        </a-col>
        <a-col :md="16">
          <div class="text-content" v-html="excerpt"></div>
        </a-col>
      </a-row>
    </div>
    <div class="article-number">
      <div class="box-icon blog">
        <div class="box-icon-img">
          <img src="../assets/img/newsbg01.png" />
        </div>
        <div class="box-icon-text">{{ $t(`blog`) }}</div>
      </div>
      <div class="box-icon">
        <div class="box-icon-img">
          <img src="../assets/img/newsbg02.png" />
        </div>
        <div class="box-icon-text">{{ time }}</div>
      </div>
      <div class="box-icon">
        <div class="box-icon-img">
          <img src="../assets/img/newsbg03.png" />
        </div>
        <div class="box-icon-text">{{ $t(`comment`) }}（<span>0</span>)</div>
      </div>
      <div class="box-icon">
        <div class="box-icon-img">
          <img src="../assets/img/newsbg04.png" />
        </div>
        <div class="box-icon-text">{{ $t(`views`) }}（<span>417</span>)</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { matchingAllImg, dateFormat,getDefaultImg,replaceHtml } from "../utils/utils";
import { useStore } from "vuex";
import scrollAnimation from "../hooks/scrollAnimation";
export default defineComponent({
  name: "ArticleList",
  props: ["column"],
  setup(props) {
    let router = useRouter();
    const store = useStore();
    let goDetail = (id: any) => {
      const currentY = document.documentElement.scrollTop;
      scrollAnimation(currentY, 0);
      store.commit("setScrollTop", 0);
      router.push({
        path: `/article/${id}`,
        query: {},
      });
    };
    const imgUrl = matchingAllImg(props.column.content.rendered)[0] || getDefaultImg(props.column.categories[0]);
    const time = dateFormat("YYYY-mm-dd", new Date(props.column.date));
    const excerpt = replaceHtml(props.column.excerpt.rendered);
    return {
      imgUrl,
      time,
      excerpt,
      goDetail,
    };
  },
});
</script>
<style lang="less" scoped>
.acticle-container {
  width: 100%;
  height: auto;
  padding: 0 10px;
  margin-top: 8px;
  .article-title {
    display: flex;
    width: 70%;
    padding: 10px 0;
    .ct-icon {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      img {
        width: 100%;
      }
    }
    .title {
      flex: 1;
      height: 22px;
      text-align: left;
      color: #333;
      transition: all 1s;
      font-weight: 600;
      font-size: 14px;
      .icon-07jiantouxiangyoufill {
        display: none;
      }
      &:hover {
        padding: 0 0 0 20px;
        color: #4caf50;
        text-decoration: underline;
        .icon-07jiantouxiangyoufill {
          display:inline-block;
        }
      }
    }
  }
}
.tc-img {
  width: 100%;
  height: 135px;
  overflow:hidden;
  a img {
    width: 100%;
    height: 135px;
    transition:all 1.2s;
    &:hover {
       transform: scale(1.1);  /*以y轴为中心旋转*/
    }
  }
}
.text-content {
  width: 100%;
  max-height: 130px;
  padding-left: 15px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-height: 25px;
  color: ;
  font-size: 12px;
  -webkit-box-orient: vertical;
}
.article-number {
  width: 100%;
  height: 30px;
  .box-icon {
    display: flex;
    width: 100px;
    height: 20px;
    justify-content: end;
    float: right;
    margin-right: 2px;
    .box-icon-img {
      width: 20px;
      height: 20px;
    }
    .box-icon-text {
      width: 70px;
      height: 20px;
      line-height: 25px;
      font-size: 12px;
      flex: 1;
      color: #759b08;
    }
  }
}

@media (max-width: 768px) {
  .text-content {
    padding: 5px 0;
  }
  .blog {
    display: none !important;
  }
}
</style>
