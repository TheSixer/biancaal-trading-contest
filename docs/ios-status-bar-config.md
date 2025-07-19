# iOS 状态栏配置说明

## 问题描述
通过PWA Builder打包iOS应用后，状态栏颜色不是预设的蓝色(#1e3c72)，而是默认的白色或黑色。

## 解决方案

### 1. Meta标签配置
在`app/layout.tsx`中，确保以下meta标签正确设置：

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

### 2. CSS样式配置
在`app/globals.css`中添加iOS状态栏样式：

```css
/* iOS Status Bar Configuration */
@supports (padding: max(0px)) {
  body {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
}

/* iOS PWA Status Bar Styling */
@media screen and (display-mode: standalone) {
  body {
    background-color: #1e3c72;
  }
  
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: env(safe-area-inset-top);
    background-color: #1e3c72;
    z-index: 9999;
  }
}
```

### 3. Manifest.json配置
在`public/manifest.json`中添加iOS特定配置：

```json
{
  "ios": {
    "statusBar": {
      "style": "black-translucent",
      "backgroundColor": "#1e3c72"
    },
    "webApp": {
      "capable": true,
      "statusBarStyle": "black-translucent",
      "title": "Autu Competition"
    }
  }
}
```

### 4. PWA Builder配置
使用`public/pwa-builder-config.json`文件，包含完整的iOS配置：

```json
{
  "ios": {
    "statusBar": {
      "style": "black-translucent",
      "backgroundColor": "#1e3c72",
      "barStyle": "light-content"
    },
    "webApp": {
      "capable": true,
      "statusBarStyle": "black-translucent",
      "title": "Autu Competition"
    },
    "splash": {
      "backgroundColor": "#1e3c72",
      "image": "/icon-512x512.png"
    }
  }
}
```

## 状态栏样式选项

### black-translucent
- 状态栏背景透明
- 状态栏文字为白色
- 应用内容延伸到状态栏下方
- 需要手动处理安全区域

### default
- 状态栏背景为默认颜色
- 状态栏文字为黑色
- 应用内容不延伸到状态栏下方

### black
- 状态栏背景为黑色
- 状态栏文字为白色
- 应用内容不延伸到状态栏下方

## 重要注意事项

1. **PWA Builder限制**：PWA Builder生成的iOS应用可能不完全遵循manifest.json中的配置
2. **Xcode配置**：如果使用Xcode进一步配置，需要在Info.plist中设置：
   ```xml
   <key>UIStatusBarStyle</key>
   <string>UIStatusBarStyleLightContent</string>
   <key>UIViewControllerBasedStatusBarAppearance</key>
   <false/>
   ```

3. **测试方法**：
   - 在Safari中测试PWA模式
   - 使用PWA Builder生成的iOS应用测试
   - 在Xcode中查看实际效果

## 常见问题

### Q: 为什么状态栏颜色还是不对？
A: PWA Builder生成的iOS应用可能忽略某些配置，建议：
1. 确保所有meta标签正确设置
2. 使用CSS强制设置状态栏背景
3. 考虑使用Xcode进一步配置

### Q: 如何确保状态栏文字颜色正确？
A: 使用`barStyle: "light-content"`确保状态栏文字为白色，适合深色背景。

### Q: 安全区域如何处理？
A: 使用`env(safe-area-inset-top)`等CSS环境变量来处理刘海屏等设备的安全区域。 