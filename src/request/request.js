import axios from "axios";

export function request(config) {
  // 创建请求对象
  const requests = axios.create({
    baseURL: "/api1/",
    header: "Access-Control-Allow-Origin",
    xhrFields: { withCredentials: true },
    // withCredentials: true,
  });
  // 请求拦截器
  requests.interceptors.request.use(
    (config) => {
      // 请求方法展开添加时间戳
      if (config.method == "post") {
        config.data = {
          ...config.data,
          timerstamp: Date.parse(new Date()) / 1000,
        };
      } else if (config.method == "get") {
        config.params = {
          timerstamp: Date.parse(new Date()) / 1000,
          ...config.params,
        };
      }
      return config;
    },
    // 请求错误时操作
    (err) => {
      return err;
    }
  ),
    // 响应拦截器
    requests.interceptors.response.use(
      (config) => {
        return config;
      },
      // 响应错误时操作
      (err) => {
        return err;
      }
    );
  return requests(config);
}
