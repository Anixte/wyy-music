import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用户信息
    user: null,
    // 用户id
    uid: null,
    // 昵称
    nickname: null,
    // 头像图片
    avatarUrl: null,
    // cookie
    cookie: null,
    // 登录状态
    islogin: false,
  },
  mutations: {
    // 添加用户信息
    addUser(state, data) {
      // state.user = data;
      (state.uid = data.profile.userId),
        (state.nickname = data.profile.nickname),
        (state.avatarUrl = data.profile.avatarUrl),
        (state.cookie = localStorage.getItem("cookie")),
        (state.islogin = true);
    },
  },
  actions: {},
  modules: {},
});
