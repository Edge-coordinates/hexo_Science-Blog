# hexo_Science-Blog

```powershell
# 新建目录&初始化
hexo init
mkdir -p ./source/_posts
mkdir -p ./themes/butterfly
# clone 主题 & 博客
#自用主题
git clone -b mine https://github.com/Edge-coordinates/hexo-theme-butterfly.git ./themes/butterfly
# 官方主题
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git
# 博客路径
git clone https://github.com/Edge-coordinates/Science-Blog.git ./source/_posts

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



