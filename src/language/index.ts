import { createI18n } from "vue-i18n"; //引入vue-i18n组件
import zh_CN from "./lang/zh_CN";
import en from "./lang/en";
const lang = localStorage.getItem("lang") || "zh_CN";

const i18n = createI18n({
  locale: lang, // 默认显示语音
  messages: {
    zh_CN: zh_CN, // 中文

    en: en, // 英文——美式
  },
});

export default i18n;
