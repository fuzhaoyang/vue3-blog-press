import axios, { AxiosRequestConfig } from 'axios';

const base = 'https://fuchaoyang.com/wordpress/wp-json/wp/v2';

//获取文章列表
export const getArticleList = (params:any) => {
    axios.get(`${base}/posts?filter[orderby]=rand`).then(res => res.data);
    return axios.get(`${base}/posts?page=${params.page}&per_page=${params.per_page}&categories=${params.categories}`).then();
};

//获取最新top10
export const getTopList = () => {
    return axios.get(`${base}/posts`).then(res => res.data);
};

//获取单篇文章
export const getArticle = (ids: any) => {
    return axios.get(`${base}/posts/${ids}`).then(res => res.data);
};

//获取文章分类
export const getCategories = (params: AxiosRequestConfig | undefined) => {
    return axios.get(`${base}/categories`, params).then(res => res.data);
};

//获取文章作者
export const getAuthor = (ids: any) => {
    return axios.get(`${base}/users/${ids}`).then(res => res.data);
};

//获取随机文章列表
export const getRandomArticle = () => {
    return axios.get(`${base}/posts?filter[orderby]=rand`).then(res => res.data);
};