# 个人网站项目

这是一个使用Next.js构建的个人网站项目，包含前端展示和后端API。

## 项目结构

```
/
├── pages/              # 页面和API路由
│   ├── api/            # 后端API
│   │   └── images.js   # 图片数据API
│   ├── _app.js         # 应用入口
│   ├── _document.js    # HTML文档结构
│   └── index.js        # 首页
├── public/             # 静态资源
│   └── images/         # 图片文件夹
│       ├── image1.jpg  # 示例图片1
│       ├── image2.jpg  # 示例图片2
│       └── image3.jpg  # 示例图片3
├── package.json        # 项目依赖
└── vercel.json         # Vercel部署配置
```

## 部署到Vercel

1. 在项目中替换`public/images/`文件夹中的示例图片为你自己的图片
2. 创建一个Vercel账号（如果还没有）
3. 使用GitHub、GitLab或Bitbucket将项目推送到仓库
4. 在Vercel中导入项目
5. 按照指示完成部署

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 运行生产版本
npm start
```

## 注意事项

1. 确保替换示例图片为真实图片文件（JPG/PNG/GIF格式）
2. 如需添加或修改图片，同时更新`pages/api/images.js`中的数据 