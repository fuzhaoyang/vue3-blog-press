//动态加载外部script，默认异步加载
const themeConfig = (key: string) => {
  console.log(key);
  const themeMap = {
    theme0: {
      "@header-background-img": "url(" + require("@/assets/img/bg-boy.jpg") + ") !important",
      "@f-color":"#fff !important",
      "@background-img": "none !important",
      "@navbar-bg":"rgba(34, 96, 57, 0.5)!important",
      "@navbar-bg-opacity":"url(" + require("@/assets/img/nav1.png") + ") !important",
      "@article-bg":"#fff !important",
      "@article-border-bottom":"1px solid #e6e6e6 !important",
      "@background":"#fff !important"
    },
    theme1: {
      "@header-background-img": "url(" + require("@/assets/img/bg-girl.jpg") + ") !important",
      "@f-color":"#fff !important",
      "@background-img": "#fff !important",
      "@navbar-bg":"rgba(34, 96, 57, 0.5)!important",
      "@navbar-bg-opacity":"url(" + require("@/assets/img/nav1.png") + ") !important",
      "@article-bg":"#fff !important",
      "@article-border-bottom":"1px solid #e6e6e6 !important",
      "@background":"#fff !important"
    },
    theme2: {
      "@background-img": "url(" + require("@/assets/img/bg1.png") + ") !important",
      "@f-color":"#fff !important",
      "@navbar-bg":"rgba(137, 187, 212, 0.5)!important",
      "@navbar-bg-opacity":"rgba(137, 187, 212)!important",
      "@article-bg":"#E5F3F7 !important",
      "@article-border-bottom":"none !important",
      "@background":"#d0ecf8 !important"
    },
    theme3: {
      "@background-img": "url(" + require("@/assets/img/bg2.jpg") + ") !important",
      "@f-color":"#c08b67 !important",
      "@navbar-bg":"rgba(245,245,245,0.2)!important",
      "@navbar-bg-opacity":"rgba(245,245,245)!important",
      "@article-bg":"#f4efec !important",
      "@article-border-bottom":"none !important",
      "@background":"#e8dfd8 !important"
    },
    theme4: {
      "@background-img": "url(" + require("@/assets/img/bg3.jpg") + ") !important",
      "@f-color":"#7a7066 !important",
      "@navbar-bg":"rgba(216, 188, 184, 0.3)!important",
      "@navbar-bg-opacity":"rgba(216, 188, 184)!important",
      "@article-bg":"#f9e4d8 !important",
      "@article-border-bottom":"none !important",
      "@background":"#f9d9c4 !important"
    },
    theme5: {
      "@background-img": "url(" + require("@/assets/img/bg4.jpg") + ") !important",
      "@f-color":"#80ba4c !important",
      "@navbar-bg":"rgba(245,245,245,0.2)!important",
      "@navbar-bg-opacity":"rgba(245,245,245)!important",
      "@article-bg":"#f5f5f5 !important",
      "@article-border-bottom":"none !important",
      "@background":"#d1e8e2 !important"
    },
  };
  return themeMap[key];
};
export default themeConfig;
