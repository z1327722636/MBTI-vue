import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createUI } from "taro-ui-vue3";




// 引用全部组件样式
import 'taro-ui-vue3/dist/style/index.scss'
import './app.scss'
import Taro from "@tarojs/taro";
import LOGO from "./assets/images/MBTI.png";

interface ShareType {
  from: "button" | "menu"; // 页面内转发按钮 | 右上角转发菜单
  target: object;
}

// @ts-ignore
// 保存原始的 Page 函数
const originPage = Page;
// @ts-ignore
// 重写 Page 函数
Page = function (pageConfig) {
  // 设置全局默认分享
  const globalShareConfig = {
    onShareAppMessage: (res: ShareType) => {
      console.log("index share", res);
      if (res.from === "button") {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: "MBTI性格测试", // 转发标题
        path: "/pages/index/index", // 转发路径
        imageUrl: LOGO, // 使用本地图片作为转发图片
      };
    },
  };

  // 将全局分享配置合并到当前页面的配置中
  const newPageConfig = Object.assign({}, globalShareConfig, pageConfig);

  // 使用原始 Page 函数创建页面实例
  return originPage(newPageConfig);
};

const App = createApp({
  onShow(options) {
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())
App.use(createUI())

export default App
