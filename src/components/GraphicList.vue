<template>
  <div class="graphic-title">{{ $t(`graphic`) }}</div>
  <ul class="graphic-content">
    <li>
      <div class="acticle-img">
        <a href="">
          <img
            src="http://fcyblog.com/uploadfile/2017/0926/20170926124025990.jpg"
          />
        </a>
      </div>
      <div class="acticle-content">
        <div class="title text-overflow">浏览器兼容性问题怎么解决?</div>
        <div class="info">
          <div class="tips hidden-md">
            <img src="https://fcyblog.com/statics/images//tg/lanmbq.png" />
            <p>前端小知识</p>
          </div>
          <div class="date">
            <img src="https://fcyblog.com/statics/images//tg/datepng.png" />
            <p>2018-01-22</p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="acticle-img">
        <a href="">
          <img
            src="http://fcyblog.com/uploadfile/2017/1009/20171009021518800.jpg"
          />
        </a>
      </div>
      <div class="acticle-content">
        <div class="title">
          <a href="" class="text-overflow">使用CSS3制作文</a>
        </div>
        <div class="info">
          <div class="tips hidden-md">
            <img src="https://fcyblog.com/statics/images//tg/lanmbq.png" />
            <p>前端小知识</p>
          </div>
          <div class="date">
            <img src="https://fcyblog.com/statics/images//tg/datepng.png" />
            <p>2018-01-22</p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="acticle-img">
        <a href="">
          <img
            src="http://fcyblog.com/uploadfile/2017/1009/20171009021336486.jpg"
          />
        </a>
      </div>
      <div class="acticle-content">
        <div class="title text-overflow">浏览器兼容性问题怎么解决?</div>
        <div class="info">
          <div class="tips hidden-md">
            <img src="https://fcyblog.com/statics/images//tg/lanmbq.png" />
            <p>前端小知识</p>
          </div>
          <div class="date">
            <img src="https://fcyblog.com/statics/images//tg/datepng.png" />
            <p>2018-01-22</p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="acticle-img">
        <a href="">
          <img
            src="http://fcyblog.com/uploadfile/2017/1025/20171025044549566.jpg"
          />
        </a>
      </div>
      <div class="acticle-content">
        <div class="title">为什么你只是一个小码农?</div>
        <div class="info">
          <div class="tips hidden-md">
            <img src="https://fcyblog.com/statics/images//tg/lanmbq.png" />
            <p>前端小知识</p>
          </div>
          <div class="date">
            <img src="https://fcyblog.com/statics/images//tg/datepng.png" />
            <p>2018-01-22</p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="acticle-img">
        <a href="">
          <img
            src="http://fcyblog.com/uploadfile/2017/0926/20170926124236365.jpg"
          />
        </a>
      </div>
      <div class="acticle-content">
        <div class="title text-overflow">原型和原型链？</div>
        <div class="info">
          <div class="tips hidden-md">
            <img src="https://fcyblog.com/statics/images//tg/lanmbq.png" />
            <p>前端小知识</p>
          </div>
          <div class="date">
            <img src="https://fcyblog.com/statics/images//tg/datepng.png" />
            <p>2018-01-22</p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="acticle-img">
        <a href="">
          <img
            src="http://fcyblog.com/uploadfile/2017/0926/20170926124025990.jpg"
          />
        </a>
      </div>
      <div class="acticle-content">
        <div class="title text-overflow">开发人员必须掌握的</div>
        <div class="info">
          <div class="tips hidden-md">
            <img src="https://fcyblog.com/statics/images//tg/lanmbq.png" />
            <p>前端小知识</p>
          </div>
          <div class="date">
            <img src="https://fcyblog.com/statics/images//tg/datepng.png" />
            <p>2018-01-22</p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="acticle-img">
        <a href="">
          <img
            src="http://fcyblog.com/uploadfile/2018/0122/20180122115717568.jpg"
          />
        </a>
      </div>
      <div class="acticle-content">
        <div class="title text-overflow">
          web前端常用的linux命令(git)111111111111111111111111
        </div>
        <div class="info">
          <div class="tips hidden-md">
            <img src="https://fcyblog.com/statics/images//tg/lanmbq.png" />
            <p>前端小知识</p>
          </div>
          <div class="date">
            <img src="https://fcyblog.com/statics/images//tg/datepng.png" />
            <p>2018-01-22</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "GraphicList",
  setup() {},
});
</script>
<style lang="less" scoped>
.graphic-title {
  width: 100%;
  height: 50px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: left;
}
.graphic-content {
  list-style: none;
  padding: 0;
  margin: 25px 0;
  li {
    width: 100%;
    height: 65px;
    margin-top: 10px;
    display: flex;
    .acticle-img {
      width: 80px;
      height: 65px;
      overflow: hidden;
      a img {
        width: 100%;
        height: 65px;
        transition:all 1.2s;
        &:hover {
          transform: scale(1.3);  /*以y轴为中心旋转*/
        }
      }
    }
    .acticle-content {
      width: calc(100% - 80px);
      .title {
        width: 100%;
        padding-left: 15px;
        text-align: left;
        line-height: 30px;
        a {
          color: #756f71;
        }
      }
      .info {
        width: 100%;
        line-height: 20px;
        display: flex;
        justify-content: left;
        padding: 10px;
        .tips {
          display: flex;
          margin-right: 20px;
          font-size: 12px;
          img {
            width: 18px;
            height: 18px;
            margin-right: 10px;
          }
        }
        .date {
          display: flex;
          font-size: 12px;
          img {
            width: 18px;
            height: 18px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
