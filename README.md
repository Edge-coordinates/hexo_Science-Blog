---
title: README
date: 2025/9/9 0:4:23
categories:
  - null
---
# hexo_Science-Blog

```powershell
# 新建目录&初始化
hexo init
mkdir -p ./source/_posts
mkdir -p ./themes/butterfly
# clone 主题 & 博客
## 官方主题
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git ./themes/butterfly
## 博客路径
git clone https://github.com/Edge-coordinates/Science-Blog.git ./source/_posts

## 自用主题 (Archive)
git clone -b mine https://github.com/Edge-coordinates/hexo-theme-butterfly.git ./themes/butterfly

# 安装插件
npm install hexo -renderer-pug hexo -renderer-stylus  --save
npm install hexo-abbrlink --save
npm install hexo-generator-search --save

# 非必须插件
npm install hexo-enhancer@1.0.7 --save

# 问题修复命令
npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive

# 服务器的博更新（原程覆盖本地）
git pull --ff-only

git fetch --all
git reset --hard origin/master
git pull
```

## Scripts
```powershell
# 每次更新代码，先用 hexo clean 清理才会生效
# priority 越低，优先级越高
# 解决问题的时候，不要想着前面试了，然后不生效，所以没用，有可能你改过某个东西之后，那个方法又生效了。
# 就像今天改script，在重命名文件夹，更改优先级之后，都该重新尝试clean才对！
# 对于 -f 命令理解也有问题！
hexo clean
hexo server
```

