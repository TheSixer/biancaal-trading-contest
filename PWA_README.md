# PWA 配置说明

## 已完成的配置

### 1. 安装依赖
```bash
pnpm add next-pwa
```

### 2. Next.js 配置
- 修改了 `next.config.js` 添加 PWA 支持
- 配置了缓存策略和离线功能

### 3. Manifest 文件
- 创建了 `public/manifest.json`
- 配置了应用名称、图标、主题色等

### 4. Service Worker
- 创建了 `public/sw.js`
- 实现了缓存、离线支持和推送通知

### 5. 图标文件
- 生成了各种尺寸的图标占位符
- 需要替换为实际的图标文件

### 6. 安装提示组件
- 创建了 `PWAInstallPrompt` 组件
- 自动检测并提示用户安装 PWA

### 7. 测试页面
- 创建了 `/pwa-test` 页面
- 可以测试 PWA 功能和状态

## 需要完成的步骤

### 1. 替换图标文件
将以下占位符文件替换为实际的图标：

```
public/
├── icon-72x72.png
├── icon-96x96.png
├── icon-128x128.png
├── icon-144x144.png
├── icon-152x152.png
├── icon-192x192.png
├── icon-384x384.png
├── icon-512x512.png
├── favicon.ico
├── apple-touch-icon.png
├── screenshot-wide.png
└── screenshot-narrow.png
```

### 2. 图标要求
- **格式**: PNG 或 ICO
- **尺寸**: 必须包含 192x192 和 512x512
- **设计**: 建议使用 maskable 图标（支持自适应图标）
- **背景**: 透明或纯色背景

### 3. 截图要求
- **screenshot-wide.png**: 1280x720 (桌面端截图)
- **screenshot-narrow.png**: 750x1334 (移动端截图)

## 测试 PWA

### 1. 开发环境测试
```bash
pnpm dev
```
访问 `http://localhost:3000/pwa-test`

### 2. 生产环境测试
```bash
pnpm build
pnpm start
```

### 3. 安装测试
- **Chrome/Edge**: 地址栏右侧会出现安装图标
- **Safari**: 分享按钮中选择"添加到主屏幕"
- **Firefox**: 地址栏菜单中选择"安装应用"
- **移动端**: 浏览器菜单中选择"添加到主屏幕"

## PWA 功能

### 1. 离线支持
- 缓存关键资源
- 离线时仍可访问基本功能

### 2. 推送通知
- 支持后台推送通知
- 可配置通知内容和动作

### 3. 后台同步
- 支持网络恢复后的数据同步
- 自动处理离线操作

### 4. 应用快捷方式
- 排行榜快捷方式
- 主页面快捷方式

## 部署注意事项

### 1. HTTPS 要求
PWA 必须在 HTTPS 环境下运行（localhost 除外）

### 2. Service Worker 更新
- 修改 Service Worker 后需要重新部署
- 用户可能需要刷新页面才能获得更新

### 3. 缓存策略
- 使用 Network First 策略
- 优先从网络获取，失败时使用缓存

## 故障排除

### 1. 安装提示不显示
- 检查 manifest.json 是否正确
- 确认 HTTPS 环境
- 检查浏览器兼容性

### 2. Service Worker 注册失败
- 检查 sw.js 文件是否存在
- 确认文件路径正确
- 检查浏览器控制台错误

### 3. 图标不显示
- 确认图标文件存在
- 检查文件路径和格式
- 验证 manifest.json 中的路径

## 性能优化

### 1. 图标优化
- 使用 WebP 格式（如果支持）
- 压缩 PNG 文件
- 使用适当的图标尺寸

### 2. 缓存优化
- 合理设置缓存策略
- 避免缓存过大的文件
- 定期清理旧缓存

### 3. 加载优化
- 预加载关键资源
- 使用 CDN 加速
- 压缩静态资源

## 浏览器支持

- ✅ Chrome 67+
- ✅ Edge 79+
- ✅ Firefox 67+
- ✅ Safari 11.1+
- ✅ Opera 54+

## 相关链接

- [PWA 官方文档](https://web.dev/progressive-web-apps/)
- [Next.js PWA 插件](https://github.com/shadowwalker/next-pwa)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) 