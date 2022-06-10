import { request } from "./request";
// 生成二维码的key
export function _getQR() {
  return request({
    method: "get",
    url: "/login/qr/key",
  });
}
// 创建二维码
export function _createQR(key) {
  return request({
    method: "post",
    url: `/login/qr/create?key=${key}&qrimg=true`,
  });
}
// 检查二维码状态
export function _checkQR(key) {
  return request({
    method: "get",
    url: `/login/qr/check?key=${key}`,
  });
}
// 使用手机号与密码登录
export function _phoneLogin(phone, password) {
  return request({
    method: "get",
    url: "/login/cellphone",
    params: {
      phone: phone,
      password: password,
    },
  });
}
// 检查登录状态
export function _checkLogin() {
  return request({
    method: "get",
    url: "/login/status",
    // url: "/login/refresh",
    params: {
      cookie: localStorage.getItem("cookie"),
    },
  });
}

// 退出登录
export function _logout() {
  return request({
    url: "/logout",
  });
}
