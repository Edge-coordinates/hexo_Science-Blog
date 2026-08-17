---
title: README
date: 2025/9/9 0:4:23
categories:
  - null
---
# rezedge-blog-hexo-config

包管理器是 Yarn 4（Corepack）。站点由 rezedge-blog 的 GitHub Actions 构建并发布到 Cloudflare Pages（`rezedge-blog`），域名 `blog.rezedge.com`。

```sh
corepack enable

# 主题（CI 钉死 5.2.2）
git clone --branch 5.2.2 --depth 1 https://github.com/jerryc127/hexo-theme-butterfly.git ./themes/butterfly

# 文章仓库
git clone https://github.com/Edge-coordinates/rezedge-blog.git ./source/_posts/rezedge-blog

yarn install
```

## 本地开发

```sh
yarn install
task server
# 或
yarn hexo server
```

## Scripts

```sh
# 每次更新代码，先用 hexo clean 清理才会生效
# priority 越低，优先级越高
# 解决问题的时候，不要想着前面试了，然后不生效，所以没用，有可能你改过某个东西之后，那个方法又生效了。
# 就像今天改script，在重命名文件夹，更改优先级之后，都该重新尝试clean才对！
# 对于 -f 命令理解也有问题！
task clean
task server
```

