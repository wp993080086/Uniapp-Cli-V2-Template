# 1，项目描述

## 1.1，项目名

> xxxx小程序：uniapp-cli-template

## 1.2，项目背景

用于xxxxx的小程序。

## 1.3，仓库地址

xxxxx

## 1.4，各环境地址

- Local：http://xxx
- Development：https://xxx
- Test：https://xxx
- Beta：https://xxx
- Production：https://xxx

# 2，项目运行

> 建议使用Vs code开发，微信开发者工具预览
> 微信开发者工具基础库：2.23.2及以上

## 2.1，安装

> npm install

## 2.2，运行

> npm run serve

## 2.3，预览

> 运行成功后，使用微信开发者工具，找到mp-weixin目录并打开，目录路径：dist/dev/mp-weixin

## 2.4，发布

> npm run build

> 打包完成后，使用微信开发者工具，找到mp-weixin目录并打开，目录路径：dist/build/mp-weixin，在微信开发者工具中点击上传即可

## 2.5，修复

> npm run lint-fix

## 2.6，AppID

1. 开发环境和测试环境：xxx
2. beta环境和正式环境：xxx

# 3，目录说明

```
├─.eslintrc.js // eslint配置
├─vue.config.js // vue配置
├─tsconfig.json // ts配置
└─src
  │  App.vue // 根容器
  │  main.ts
  │  
  ├─components // 组件
  │      
  ├─pages // 页面
  │ 
  ├─pages.json // 小程序页面配置
  │ 
  ├─manifest.json // uniapp配置
  │                          
  ├─router // 路由
  │          
  ├─request // 接口
  │          
  ├─static // 静态资源        
  │      
  └─utils // 工具库
  │ │  index.ts
  │ │  toast.ts // 弹窗封装
  │......
```

# 4，设计规范

- 接口文档地址：xxx

# 5，README更新说明

**如有以下变动，需要更新README**

- package.json文件的scripts命令更新
- 重要目录增删
- 运行环境变更
- 项目地址变更
- 项目背景变更