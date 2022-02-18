// 匹配内容所有图片
export const matchingAllImg = (str: string) => {
  const imgReg = /<img.*?(?:>|\/>)/gi; //匹配图片中的img标签
  const srcReg = /src=[\\'\\"]?([^\\'\\"]*)[\\'\\"]?/i; // 匹配图片中的src
  const arr = str.match(imgReg) || []; //筛选出所有的img
  const srcArr = [];
  for (let i = 0; i < arr.length; i++) {
    const src = arr[i].match(srcReg) || [];
    // 获取图片地址
    srcArr.push(src[1]);
  }
  return srcArr.filter((item) => item);
};

// 格式化日期 dateFormat("YYYY-mm-dd HH:MM", date)
export const dateFormat = (fmt: string, date: any) => {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  let k;
  for (k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
};

// 获取地址栏参数
export const getUrlParms = (name: string) => {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

// 转义字符解析
export const escape2Html = (str: any) => {
  const arrEntities = {
    nbsp: " ",
    lt: "<",
    gt: ">",
    amp: "&",
    ensp: "     ",
    emsp: " ",
    quot: '"',
    middot: "·",
    brvbar: "¦",
    mdash: "—",
    ndash: "–",
    ge: "≥",
    le: "≤",
    laquo: "«",
    raquo: "»",
    deg: "°",
    bull: "•",
    macr: "¯",
    "#64": "@",
    ldquo: "“",
    rdquo: "”",
    rsquo: "‚",
    lsquo: "‘",
    "#039": "'",
  };
  return str.replace(
    new RegExp(`&(${Object.keys(arrEntities).join("|")});`, "g"),
    (all: any, t: any): any => {
      return arrEntities[t];
    }
  );
};

// 获取文章默认图片
export const getDefaultImg = (key: string) => {
  const imgMap = {
    "3": "https://fuchaoyang.com/statics/img/webinfo/html.png",
    "4": "https://fuchaoyang.com/statics/img/webinfo/css.png",
    "5": "https://fuchaoyang.com/statics/img/webinfo/javascript.png",
    "6": "https://fuchaoyang.com/statics/img/webinfo/kuangjia.png",
    "7": "https://fuchaoyang.com/statics/img/webinfo/web.png",
    "8": "https://fuchaoyang.com/statics/img/webinfo/interview.png",
    articleError: "https://fuchaoyang.com/statics/img/webinfo/articleError.png",
  };
  return imgMap[key] || imgMap["articleError"];
};

// 深拷贝
export const deepCopy = (target: any, hash = new WeakMap()) => {
  // 对于传入参数处理
  if (typeof target !== "object" || target === null) {
    return target;
  }
  // 哈希表中存在直接返回
  if (hash.has(target)) return hash.get(target);

  const cloneTarget = Array.isArray(target) ? [] : {};
  hash.set(target, cloneTarget);

  // 针对Symbol属性
  const symKeys = Object.getOwnPropertySymbols(target);
  if (symKeys.length) {
    symKeys.forEach((symKey) => {
      if (typeof target[symKey] === "object" && target[symKey] !== null) {
        cloneTarget[symKey] = deepCopy(target[symKey]);
      } else {
        cloneTarget[symKey] = target[symKey];
      }
    });
  }

  for (const i in target) {
    if (Object.prototype.hasOwnProperty.call(target, i)) {
      cloneTarget[i] =
        typeof target[i] === "object" && target[i] !== null
          ? deepCopy(target[i], hash)
          : target[i];
    }
  }
  return cloneTarget;
};

//获取html标签纯文本内容
export const replaceHtml = (value: string) => {
  if (value) {
    return value
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/gi, "")
      .replace(/\s/g, "");
  } else {
    return "";
  }
};
