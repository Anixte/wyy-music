import { request } from "./request";
// 获取轮播图数据
export function _getBanner() {
  return request({
    url: "/banner",
  });
}
// 歌单推荐数据
export function _getPersonalized(config) {
  return request({
    url: "/personalized",
    params: {
      limit: config,
    },
  });
}
// 获取独家放送数据
export function _getPrivateContent() {
  return request({
    url: "/personalized/privatecontent",
  });
}
// 独家放送更多
export function _getPrivateList(limit, offset) {
  return request({
    url: `/personalized/privatecontent/list?limit=${limit}&offset=${offset}`,
  });
}
