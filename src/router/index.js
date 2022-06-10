import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    // 重定向,将默认打开为设为发现页
    path: "/",
    name: "Home",
    redirect: "/home",
    component: Home,
    children: [
      {
        path: "/home",
        redirect: "/home/my",
        name: "zhuYe",
        component: () => import("@/views/zhuYe/zhuYe.vue"),
        // 二级路由
        children: [
          {
            path: "my",
            component: () => import("@/components/zhuye/gexing/gexing.vue"),
          },
          {
            path: "list",
            component: () => import("@/components/list/list.vue"),
          },
          {
            path: "radio",
            component: () => import("@/components/radio/radio.vue"),
          },
          {
            path: "rank",
            component: () => import("@/components/rank/rank.vue"),
          },
          {
            path: "singer",
            component: () => import("@/components/singer/singer.vue"),
          },
          {
            path: "new",
            component: () => import("@/components/new/new.vue"),
          },
        ],
      },
      {
        path: "fm",
        name: "fm",
        component: () => import("@/views/FM/Fm.vue"),
      },
      {
        path: "look",
        name: "look",
        component: () => import("@/views/Look/Look.vue"),
      },
      {
        path: "videos",
        name: "videos",
        component: () => import("@/views/Videos/Videos.vue"),
      },
      {
        path: "friends",
        name: "friends",
        component: () => import("@/views/Friends/Friends.vue"),
      },
      {
        path: "myMusic",
        name: "myMusic",
        component: () => import("@/views/myMusic/myMusic.vue"),
      },
      {
        path: "Download",
        name: "Download",
        component: () => import("@/views/Download/Download.vue"),
      },
      {
        path: "Clouds",
        name: "Clouds",
        component: () => import("@/views/Clouds/Clouds.vue"),
      },
      {
        path: "myRadio",
        name: "myRadio",
        component: () => import("@/views/myRadio/myRadio.vue"),
      },
      {
        path: "myCollection",
        name: "myCollection",
        component: () => import("@/views/myCollection/myCollection.vue"),
      },
      {
        path: "listDetail:id",
        name: "listDetail",
        component: () => import("@/common/listDetail.vue"),
      },
      {
        path: "contentDetail",
        name: "contentDetail",
        component: () => import("@/views/second/contentDetail.vue"),
      },
    ],
  },
  {
    path: "/Login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
