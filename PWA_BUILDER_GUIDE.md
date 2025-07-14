# PWA Builder 使用指南

## 问题解决

### 错误：Could not find MIME for Buffer <null>

**原因：** PWA Builder 在生成 APK 时找不到有效的图标文件。

**解决方案：**
1. ✅ 已创建所有必需的图标文件
2. ✅ 已生成有效的 favicon.ico 和 apple-touch-icon.png
3. ✅ 所有图标文件都有内容（不再是空文件）

## PWA Builder 使用步骤

### 1. 准备部署
确保你的项目已经部署到可访问的 URL，例如：
- GitHub Pages: `https://yourusername.github.io/your-repo`
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://your-project.netlify.app`

### 2. 访问 PWA Builder
1. 打开 [PWA Builder](https://www.pwabuilder.com/)
2. 输入你的网站 URL
3. 点击 "Start" 开始分析

### 3. 检查 PWA 评分
PWA Builder 会分析你的网站并给出评分：
- **Manifest**: 应该显示 ✅ (你的 manifest.json 已配置)
- **Service Worker**: 应该显示 ✅ (你的 sw.js 已配置)
- **HTTPS**: 必须使用 HTTPS
- **Icons**: 应该显示 ✅ (所有图标已创建)

### 4. 生成 APK
1. 点击 "Build My PWA"
2. 选择 "Android" 平台
3. 配置应用信息：
   - **Package ID**: `com.autu.tradingcontest`
   - **App Name**: `Autu Trading Contest`
   - **Version**: `1.0.0`
   - **Version Code**: `1`

### 5. 下载 APK
- 等待构建完成
- 下载生成的 APK 文件
- 在 Android 设备上安装测试

## 图标要求

### 必需图标
- ✅ `icon-192x192.png` (192x192 像素)
- ✅ `icon-512x512.png` (512x512 像素)
- ✅ `favicon.ico` (16x16 或 32x32 像素)
- ✅ `apple-touch-icon.png` (180x180 像素)

### 可选图标
- ✅ `icon-72x72.png`
- ✅ `icon-96x96.png`
- ✅ `icon-128x128.png`
- ✅ `icon-144x144.png`
- ✅ `icon-152x152.png`
- ✅ `icon-384x384.png`

## 最佳实践

### 1. 图标设计
- 使用正方形图标
- 背景透明或纯色
- 确保在小尺寸下清晰可见
- 建议使用 maskable 图标

### 2. 性能优化
- 压缩图标文件大小
- 使用适当的图片格式
- 避免过大的图标文件

### 3. 测试
- 在不同设备上测试 PWA 安装
- 测试离线功能
- 验证推送通知（如果启用）

## 故障排除

### 常见问题

1. **图标不显示**
   - 检查图标文件是否存在
   - 确认文件路径正确
   - 验证文件格式

2. **APK 生成失败**
   - 确保所有必需图标存在
   - 检查 manifest.json 配置
   - 验证 HTTPS 环境

3. **安装失败**
   - 检查 APK 签名
   - 确认设备兼容性
   - 验证权限设置

## 下一步

1. **替换占位符图标**：用实际设计的图标替换所有占位符文件
2. **部署到生产环境**：确保网站可以通过 HTTPS 访问
3. **测试 PWA 功能**：验证安装、离线、推送等功能
4. **发布到应用商店**：考虑发布到 Google Play Store

## 相关链接

- [PWA Builder 官网](https://www.pwabuilder.com/)
- [PWA 最佳实践](https://web.dev/progressive-web-apps/)
- [Android APK 生成指南](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/package-for-android) 