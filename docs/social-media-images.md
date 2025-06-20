# 社交媒体分享图片配置指南

## 📊 **已配置的社交平台**

项目已完整配置以下社交平台的元数据：

### ✅ **主要国际平台**
- **Facebook** (Open Graph)
- **Twitter** (Twitter Cards)
- **LinkedIn** (Professional Network)
- **WhatsApp** (Messaging)
- **Telegram** (Messaging)
- **Discord** (Gaming/Community)
- **Pinterest** (Visual Discovery)
- **Reddit** (Social News)
- **TikTok** (Short Video)
- **Snapchat** (Multimedia Messaging)

### ✅ **中国平台**
- **微信 (WeChat)** - 朋友圈分享
- **微博 (Weibo)** - 社交媒体
- **QQ** - 即时通讯

---

## 🖼️ **所需图片文件及尺寸**

### **1. 主要分享图片**
- **文件名**: `og-image.png`
- **尺寸**: `1200 x 630` 像素
- **纵横比**: `1.91:1`
- **用途**: Facebook, Twitter, LinkedIn, WhatsApp, Telegram, Discord

### **2. 方形分享图片**
- **文件名**: `og-image-square.png`
- **尺寸**: `1200 x 1200` 像素
- **纵横比**: `1:1`
- **用途**: Instagram, Pinterest, 微信朋友圈

### **3. 应用图标相关**
- **文件名**: `apple-touch-icon.png`
- **尺寸**: `180 x 180` 像素
- **用途**: iOS 设备添加到主屏幕

- **文件名**: `ms-icon-144x144.png`
- **尺寸**: `144 x 144` 像素
- **用途**: Windows 磁贴

- **文件名**: `favicon.ico`
- **尺寸**: `32 x 32` 像素
- **用途**: 浏览器标签图标

---

## 🎨 **图片设计建议**

### **主要元素包含**
1. **Autu Logo** - 品牌标识
2. **"46,000,000 VNĐ"** - 突出奖金数额
3. **"Cuộc thi giao dịch"** - 活动主题
4. **越南国旗元素** - 地域标识
5. **交易图表/金融元素** - 行业相关

### **设计规范**
- **主色调**: `#1e3c72` (深蓝) + `#ffd700` (金色)
- **字体**: 粗体、清晰易读
- **背景**: 渐变或纯色，避免过于复杂
- **文字大小**: 足够大，在小尺寸下也能清晰可见

---

## 📱 **各平台特定要求**

### **Facebook/Open Graph**
- 最小: `600 x 315px`
- 推荐: `1200 x 630px`
- 最大文件: `8MB`
- 格式: `PNG`, `JPG`

### **Twitter Cards**
- 最小: `300 x 157px`
- 推荐: `1200 x 600px`
- 最大文件: `5MB`
- 格式: `PNG`, `JPG`, `WEBP`

### **LinkedIn**
- 推荐: `1200 x 627px`
- 格式: `PNG`, `JPG`
- 专业、商务风格

### **WhatsApp/Telegram**
- 使用 Open Graph 标准
- 推荐: `1200 x 630px`
- 清晰、简洁的设计

### **微信朋友圈**
- 推荐: `1200 x 1200px` (方形)
- 或: `1200 x 630px` (横版)
- 避免过多文字

### **Pinterest**
- 推荐: `1000 x 1500px` (2:3 纵横比)
- 或: `1200 x 1200px` (方形)
- 垂直布局效果更佳

---

## 🔗 **文件路径配置**

所有图片文件应放置在 `public/` 目录下：

```
public/
├── og-image.png           # 主要分享图片 (1200x630)
├── og-image-square.png    # 方形分享图片 (1200x1200)
├── apple-touch-icon.png   # iOS 图标 (180x180)
├── ms-icon-144x144.png    # Windows 磁贴 (144x144)
├── favicon.ico            # 网站图标 (32x32)
└── manifest.json          # PWA 配置文件
```

---

## 🧪 **测试工具**

### **验证分享效果**
1. **Facebook**: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. **Twitter**: [Card Validator](https://cards-dev.twitter.com/validator)
3. **LinkedIn**: [Post Inspector](https://www.linkedin.com/post-inspector/)
4. **WhatsApp**: 直接发送链接测试
5. **Telegram**: 直接发送链接测试

### **通用工具**
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Meta Tags Checker](https://metatags.io/)
- [Rich Results Test](https://search.google.com/test/rich-results)

---

## 📈 **SEO 和结构化数据**

项目还包含：
- ✅ **Schema.org 结构化数据** (Event 类型)
- ✅ **Google Rich Snippets** 支持
- ✅ **多语言支持** (vi-VN, en-US)
- ✅ **PWA 支持** (manifest.json)
- ✅ **移动端优化**

---

**配置完成** ✅  
现在你的链接在所有主要社交平台分享时都会显示优化的预览效果！ 