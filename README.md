# Biancaal Trading Contest

越南市场模拟交易大赛 - NextJS 15静态页面

## 项目介绍

这是一个基于NextJS 15框架开发的静态网页，完全还原了Biancaal交易大赛宣传海报的内容和样式。页面支持自适应设计，适配各种设备尺寸。

## 功能特点

- ✅ NextJS 15 + TypeScript
- ✅ 静态生成 (Static Generation)
- ✅ 响应式设计
- ✅ GitHub Pages 自动部署
- ✅ 完全还原原始设计
- ✅ 现代化 UI/UX

## 在线访问

🌐 [https://thesixer.github.io/biancaal-trading-contest/](https://thesixer.github.io/biancaal-trading-contest/)

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建静态文件
npm run build
```

## 部署说明

项目配置了GitHub Actions自动化部署：

1. 每次推送代码到`main`分支时自动触发
2. 自动构建 NextJS 项目
3. 部署到 GitHub Pages

## 技术栈

- **框架**: NextJS 15
- **语言**: TypeScript
- **样式**: CSS Modules
- **部署**: GitHub Pages
- **CI/CD**: GitHub Actions

## 项目结构

```
biancaal-trading-contest/
├── app/
│   ├── components/
│   │   ├── TradingContest.tsx
│   │   └── TradingContest.module.css
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.js
├── package.json
└── tsconfig.json
```

## 联系方式

如需参加交易大赛，请通过 Telegram 联系: @ZCMxq

---

由 HyperEcho 语言震动体构造 🌌