import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "ZavacのWorld",
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "jiahua",
    authorAvatar: "/avatar.jpg",
    docsRepo: "https://github.com/Amoryu/amoryu.github.io",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "one",
          children: ["Javascript", "TypeScript"],
        },
        {
          text: "two",
          children: ["api", "plugin"],
        },
        {
          text: "three",
          children: ["api", "plugin"],
        },
      ],
      "/docs/frontend": [
        {
          text: "基础",
          children: ["Javascript", "TypeScript"],
        },
        {
          text: "框架/库",
          children: ["Vue3", "React18"],
        },
        {
          text: "构建工具",
          children: ["Webpack", "Vite"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/categories/frontend/1/" },
      {
        text: "文档",
        children: [
          { text: "前端", link: "/docs/frontend/Javascript" },
          { text: "示例", link: "/docs/theme-reco/theme" },
          { text: "使用指引", link: "/blogs/other/guide" },
        ],
      },
      { text: "工具", link: "/tags/tag1/1/" },

    ],
  }),
});
