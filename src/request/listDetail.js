import { request } from "./request";
// 获取歌单详情
export function _getListDetail(id) {
  return request({
    method: "get",
    url: "/playlist/detail",
    params: {
      id: id,
    },
  });
}
