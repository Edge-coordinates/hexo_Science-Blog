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

# 服务器的博更新（原程覆盖本地）
git pull --ff-only

git fetch --all
git reset --hard origin/main
git pull
```



