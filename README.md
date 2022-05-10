<div align=center>
  
![Vue](https://img.shields.io/badge/2.6.11-Vue-brightgreen)
![Uview-ui](https://img.shields.io/badge/2.0.29-Uview--ui-orange)
![Uni-ui](https://img.shields.io/badge/1.4.13-Uni--ui-green)
![Eslint](https://img.shields.io/badge/7.32.0-Eslint-red)
![Husky](https://img.shields.io/badge/7.0.2-Husky-lightgrey)

</div>

# ⚡️ 简介

一个开箱即用的 `Vue 2` + `Uview-ui` + `Uni-ui` 的uniapp小程序（H5/App）项目模板，搭配有 `eslint` 代码检查修复，`git` 推送检查钩子 `Husky`。

# 🚀 开发

- 建议使用`Vs code`开发，微信开发者工具预览

1. 安装

```
npm install
```

2. 运行

```
npm run serve
```

- 运行成功后，使用微信开发者工具，选择 `mp-weixin` 目录并打开，目录路径：`dist/dev/mp-weixin`

# 📦️ 打包

```
npm run build
```

- 打包完成后，使用微信开发者工具，选择 `mp-weixin` 目录并打开，目录路径：`dist/build/mp-weixin`，在微信开发者工具中点击上传即可

# 🔧 代码检查修复

- 格式检查

```
npm run lint
```

- 自动修复

```
npm run lint-fix
```

# 📦️ 目录说明

```
├─ .eslintrc.js // eslint配置
├─ .eslintignore // eslint忽略目录
├─ vue.config.js // vue配置
├─ .husky // git钩子
├─ .lintstagedrc.json // husky配置
├─ .gitignore // git忽略目录
├─ .prettierignore // prettier忽略目录
├─ .prettierrc.js // prettier配置
├─ babel.config.js // babel配置
├─ package.json // 脚手架配置
├─ tsconfig.json // ts配置
└─ src
  ├─ App.vue // 根容器
  ├─ main.js
  │  
  ├─ components // 组件
  │  │  copy-text // 文字复制组件
  │  │  phone-text // 手机号码复制组件
  │  └─ 
  ├─ pages // 页面
  │ 
  ├─ pages.json // 小程序页面配置
  │ 
  ├─ manifest.json // uniapp配置
  │                                 
  ├─ request // 接口
  │          
  ├─ static // 静态资源        
  │      
  └─ utils // 工具库
  │ │  index.ts
  │ │  toast.ts // 弹窗封装
  │ └─ 
  └─ 
```