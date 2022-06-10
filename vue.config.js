module.exports = {
  devServer: {
    proxy: {
      "/api1": {
        // target: "https://autumnfish.cn",
        // 根据api文档部署到 vercel 上，直接使用部署后的接口
        target: "https://netease-cloud-music-api-ozlg366eb-ljh2058.vercel.app/",
        changeOrigin: true,
        pathRewrite: { "^/api1": "" },
      },
    },
  },
};

//  跨域问题设置，使用代理 参考以下博客
//  https://www.cnblogs.com/wjw1014/p/13457234.html
