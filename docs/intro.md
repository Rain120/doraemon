---
sidebar_position: 1
---

# 文档指南

## 启动开发环境

```shell
cd docusaurus-doc-template

npx docusaurus start
```

打开 `http://localhost:9527`.

## 目录

```sh
.
├── LICENSE
├── README.md
├── blog # 博客
├── docs
├── docusaurus.config.js # 配置
├── fe # 多个文档实例
├── navbar # 顶部菜单
├── plugins # 插件
├── presets
├── sidebars # 侧边栏
├── src # docusaurus 组件，样式，页面等修改
├── static # 静态资源，可以存放照片等资源，也可以放在文档里面
```

## GitHub Actions 发版

### 在 `.github/workflows/deploy.yml` 中修改一些配置

```yml
# 首先，确保你的主分支是 main，如果你是 clone 的我的仓库，那就没问题
# 当然你也可以修改配置

...
name: Build and Deploy

on:
  push:
    # 👇🏻
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        # 👇🏻
        uses: actions/checkout@main

- name: Install and Build 🔧 
        run: |
          ...
          # 然后，需要将👇🏻这个修改你的仓库名
          BASE_URL=/docusaurus-doc-template/ npm run build
```

### GitHub 配置

在项目的 `settings`中将 `GitHub Pages` 的 `Source` 配置成 `Branch: gh-pages/{root}`