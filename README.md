# 🎓 Modern Academic Website

基于 Next.js 14 的现代化学术作品集网站，包含动画效果、响应式设计和完整的测试套件。

## 📁 文件位置

所有文件都在 `/Users/yongqiye/pku/personal website/academic-website/` 目录下：

```
academic-website/
├── src/                           # 源代码
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # 根布局
│   │   ├── page.tsx              # 主页
│   │   └── globals.css           # 全局样式
│   ├── components/               # React 组件
│   │   ├── layout/               # 布局组件
│   │   │   ├── navbar.tsx       # 导航栏
│   │   │   ├── footer.tsx       # 页脚
│   │   │   └── layout.tsx       # 主布局
│   │   ├── ui/                   # UI 组件
│   │   │   ├── button.tsx       # 按钮组件
│   │   │   ├── card.tsx         # 卡片组件
│   │   │   └── badge.tsx        # 徽章组件
│   │   ├── sections/             # 页面区块
│   │   │   ├── hero.tsx         # 首屏区块
│   │   │   ├── publications.tsx # 论文区块
│   │   │   └── news.tsx         # 新闻区块
│   │   └── publication-card.tsx # 论文卡片
│   ├── data/                     # 数据文件
│   │   ├── profile.ts            # 个人信息
│   │   ├── publications.ts      # 论文数据
│   │   └── news.ts               # 新闻数据
│   ├── lib/                      # 工具库
│   │   ├── utils.ts              # 通用工具
│   │   ├── cva.ts                # 样式变体
│   │   └── animations.ts         # 动画配置
│   ├── hooks/                    # 自定义 Hooks
│   │   └── use-smooth-scroll.ts  # 平滑滚动
│   └── types/                    # TypeScript 类型
│       └── index.ts
├── test-comprehensive.js        # 完整测试套件
├── DEPLOYMENT_GUIDE.md          # 部署指南
├── package.json                 # 项目配置
├── next.config.js              # Next.js 配置
├── tailwind.config.js          # Tailwind 配置
├── tsconfig.json               # TypeScript 配置
└── README.md                   # 本文件
```

## 🚀 如何本地预览

### 1. 打开终端
```bash
# 进入项目目录
cd "/Users/yongqiye/pku/personal website/academic-website"

# 安装依赖（如果还没有安装）
npm install

# 启动开发服务器
npm run dev
```

### 2. 打开浏览器
访问：**http://localhost:3000**

### 3. 测试网站
在浏览器控制台中运行：
```javascript
// 运行完整测试套件
window.academicWebsiteTests.runAllTests();

// 查看网站结构
window.academicWebsiteTests.getHTMLStructure();
```

## 🎨 主要功能

### ✨ 已实现特性
- 🎯 **单数据源** - 所有内容都在 `src/data/` 目录下
- 📱 **响应式设计** - 完美适配手机、平板、桌面
- 🎭 **流畅动画** - Framer Motion 驱动的动画效果
- 🔍 **智能搜索** - 论文筛选和排序功能
- 🧪 **完整测试** - 8个测试类别的测试套件
- ⚡ **性能优化** - SEO 友好，加载快速

### 📄 页面区块
1. **首屏 (Hero)** - 个人介绍、统计数字、快速链接
2. **论文展示** - 精选论文、筛选功能、详细信息
3. **新闻动态** - 最新消息、分类显示、时间线

## 🛠️ 内容管理

### 更新个人信息
编辑 `src/data/profile.ts`：
```typescript
export const profile: Profile = {
  name: "你的名字",
  role: "你的职位",
  email: "your.email@university.edu",
  bio: "你的个人简介...",
  interests: ["研究方向1", "研究方向2"],
  // ...更多配置
};
```

### 添加论文
编辑 `src/data/publications.ts`：
```typescript
export const publications: Publication[] = [
  {
    id: "paper-2024-1",
    title: "论文标题",
    authors: [
      { id: "author1", name: "作者名", is_highlight: true }, // 高亮自己
      { id: "author2", name: "合作者名", is_highlight: false }
    ],
    venue: "会议/期刊名称 2024",
    year: 2024,
    type: "conference", // conference, journal, workshop
    // ...更多配置
  }
];
```

### 添加新闻
编辑 `src/data/news.ts`：
```typescript
export const news: NewsItem[] = [
  {
    id: "news-1",
    title: "新闻标题",
    content: "新闻内容...",
    date: "2024-11-26",
    type: "news", // news, update, award, talk
  }
];
```

## 🧪 测试功能

### 自动化测试
网站包含完整的测试套件，可以验证：
- ✅ 页面加载和初始化
- ✅ 导航和平滑滚动
- ✅ 论文筛选功能
- ✅ 响应式设计
- ✅ 动画性能
- ✅ 数据集成
- ✅ 可访问性
- ✅ 错误处理

### 手动测试步骤
1. 在浏览器中打开 http://localhost:3000
2. 按F12打开开发者工具
3. 在Console标签中运行测试代码
4. 查看测试结果和日志

## 📱 功能测试清单

### 基础功能
- [ ] 页面正常加载
- [ ] 导航菜单工作正常
- [ ] 平滑滚动效果
- [ ] 论文展示正确
- [ ] 新闻动态显示

### 交互功能
- [ ] 论文筛选（按类型、年份）
- [ ] 搜索功能
- [ ] 移动端菜单
- [ ] 链接跳转

### 响应式设计
- [ ] 手机端显示 (375px+)
- [ ] 平板端显示 (768px+)
- [ ] 桌面端显示 (1024px+)

### 动画效果
- [ ] 页面加载动画
- [ ] 滚动触发动画
- [ ] 悬停效果
- [ ] 过渡动画

## 🔧 常见问题

### 服务器无法启动
```bash
# 清理缓存
rm -rf .next

# 重新安装依赖
npm install

# 重启服务器
npm run dev
```

### 样式不正确
```bash
# 检查 Tailwind 配置
npm run build

# 查看构建日志
npm run start
```

### 动画不工作
在浏览器控制台运行：
```javascript
// 检查 Framer Motion 是否加载
console.log(window.framerMotion);

// 测试动画
window.academicWebsiteTests.testAnimations();
```

## 🎯 部署选项

1. **Vercel** (推荐) - 一键部署
2. **Netlify** - 静态托管
3. **GitHub Pages** - 免费托管

详细部署指南请查看 `DEPLOYMENT_GUIDE.md`

## 📞 技术支持

如果遇到问题：
1. 查看控制台错误信息
2. 运行测试套件检查
3. 参考部署指南
4. 检查依赖是否正确安装

---

**🎉 你的现代化学术网站已经准备就绪！**

访问 **http://localhost:3000** 开始预览你的新网站！