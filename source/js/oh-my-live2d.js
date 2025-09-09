import "https://unpkg.com/oh-my-live2d@latest";

OML2D.loadOml2d({
    models: [
        {
            path: "https://model.hacxy.cn/chino/model.json",
            position: [0, 60],
            scale: 0.25,
            stageStyle: {
                height: 380,
            },
        },
        {
            path: "https://model.hacxy.cn/HK416-2-destroy/model.json",
            position: [-60, 60],
            scale: 0.1,
            stageStyle: {
                height: 540,
            },
        },
        {
            path: "https://model.hacxy.cn/HK416-2-normal/model.json",
            position: [-60, 60],
            scale: 0.1,
            stageStyle: {
                height: 540,
            },
        },
        {
            path: "https://model.hacxy.cn/Kar98k-normal/model.json",
            position: [-60, 60],
            scale: 0.1,
            stageStyle: {
                height: 540,
            },
        },
        {
            path: "https://model.hacxy.cn/uni/model.json",
            position: [50, 100],
            scale: 0.15,
            stageStyle: {
                height: 600,
            },
        },
        {
            path: "https://model.hacxy.cn/tia/model.json",
            position: [0, 60],
            scale: 0.4,
            stageStyle: {
                height: 550,
            },
        },
        {
            path: "https://model.hacxy.cn/HK416-1-normal/model.json",
            position: [-60, 60],
            scale: 0.1,
            stageStyle: {
                height: 540,
            },
        },
        {
            path: "https://model.hacxy.cn/Pio/model.json",
            scale: 0.4,
            position: [0, 50],
            stageStyle: {
                height: 300,
            },
        },
        {
            path: "https://model.hacxy.cn/xisitina/model.json",
            position: [-40, -60],
            scale: 0.14,
            stageStyle: {
                height: 400,
            },
        },
    ],
    statusBar: {
        loadingIcon: "icon-loading",
    },
    menus: {
        disable: false,
        items: [
            {
                id: "Rest",
                icon: "icon-rest",
                title: "休息",
                onClick(oml2d) {
                    oml2d.statusBarOpen(oml2d.options.statusBar?.restMessage); // 展示状态条
                    oml2d.clearTips(); // 清除当前提示框内容, 并停止空闲消息播放器

                    // 为状态条绑定点击事件
                    oml2d.setStatusBarClickEvent(() => {
                        void oml2d.statusBarClose(); // 关闭状态条
                        void oml2d.stageSlideIn(); // 舞台滑入
                        oml2d.statusBarClearEvents(); // 清除所有事件
                    });

                    void oml2d.stageSlideOut(); // 舞台滑出
                },
            },
            {
                id: "SwitchModelClothes",
                icon: "icon-skin",
                title: "切换衣服",
                onClick(oml2d) {
                    void oml2d.loadNextModelClothes();
                },
            },
            {
                id: "SwitchModel",
                icon: "icon-switch",
                title: "切换模型",
                onClick(oml2d) {
                    void oml2d.loadRandomModel();
                },
            },
            {
                id: "About",
                icon: "icon-about",
                title: "关于",
                onClick() {
                    window.open("https://blog.rezedge.com/posts/8d0da3b9/");
                },
            },
        ],
    },
});
