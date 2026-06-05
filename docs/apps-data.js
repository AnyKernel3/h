// ==============================================
// 模拟扫描「文件夹1」目录后生成的应用数据
// 实际使用时，您可以将此文件替换为后端动态生成的内容
// 每一次真实文件变动，只需修改下方数组即可
// ==============================================

const appsFromFolder1 = [
    {
        "id": 1,
        "name": "灵韵音频工坊",
        "version": "3.2.0",
        "size": "48.2 MB",
        "category": "音频编辑",
        "description": "AI智能降噪，多轨道混音，专业级音频处理工具",
        "downloadUrl": "./folder1/lingyin-audio.zip",
        "icon": "fa-music",
        "filename": "lingyin-audio.zip"
    },
    {
        "id": 2,
        "name": "极速笔记",
        "version": "2.1.4",
        "size": "15.7 MB",
        "category": "办公效率",
        "description": "沉浸式写作体验，支持Markdown和云端同步",
        "downloadUrl": "./folder1/jisunotes.zip",
        "icon": "fa-pen-fancy",
        "filename": "jisunotes.zip"
    },
    {
        "id": 3,
        "name": "光影魔术师",
        "version": "5.0.1",
        "size": "128 MB",
        "category": "图像处理",
        "description": "AI修图，滤镜特效，一键美化图片",
        "downloadUrl": "./folder1/guangying-master.exe",
        "icon": "fa-image",
        "filename": "guangying-master.exe"
    },
    {
        "id": 4,
        "name": "雨痕代码编辑器",
        "version": "1.8.3",
        "size": "86.3 MB",
        "category": "开发工具",
        "description": "轻量级IDE，智能提示，支持多种编程语言",
        "downloadUrl": "./folder1/yuhen-code.zip",
        "icon": "fa-code",
        "filename": "yuhen-code.zip"
    },
    {
        "id": 5,
        "name": "星尘浏览器",
        "version": "4.6.0",
        "size": "92.1 MB",
        "category": "网络工具",
        "description": "极速内核，无广告，安全隐私保护",
        "downloadUrl": "./folder1/xingchen-browser.exe",
        "icon": "fa-globe",
        "filename": "xingchen-browser.exe"
    },
    {
        "id": 6,
        "name": "灵犀视频剪辑",
        "version": "2.3.7",
        "size": "312 MB",
        "category": "视频制作",
        "description": "智能抠像，4K渲染，专业视频编辑",
        "downloadUrl": "./folder1/lingxi-video.zip",
        "icon": "fa-video",
        "filename": "lingxi-video.zip"
    },
    {
        "id": 7,
        "name": "清雨阅读器",
        "version": "1.2.5",
        "size": "8.9 MB",
        "category": "阅读工具",
        "description": "支持PDF/EPUB，护眼模式，沉浸阅读",
        "downloadUrl": "./folder1/qingyu-reader.zip",
        "icon": "fa-book-open",
        "filename": "qingyu-reader.zip"
    },
    {
        "id": 8,
        "name": "雨梦压缩大师",
        "version": "3.0",
        "size": "4.2 MB",
        "category": "系统工具",
        "description": "高压缩比，支持多种格式，解压速度快",
        "downloadUrl": "./folder1/yumeng-zip.exe",
        "icon": "fa-file-archive",
        "filename": "yumeng-zip.exe"
    }
];

// 导出数据（全局可用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = appsFromFolder1;
}