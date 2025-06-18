# Google Analytics 配置说明

## 📊 **配置概览**

项目已成功集成 Google Analytics 4 (GA4)，使用 Measurement ID: `G-K2H00X9TG2`

## 🔧 **技术实现**

### 1. **配置文件**
- **`lib/gtag.ts`**: Google Analytics 工具函数库
- **`app/layout.tsx`**: 全局布局中的 GA 脚本加载

### 2. **环境变量**
```bash
# 可选：通过环境变量覆盖 GA ID
NEXT_PUBLIC_GA_ID=G-K2H00X9TG2
```

### 3. **功能特性**
- ✅ 仅在生产环境加载 GA 脚本
- ✅ 自动页面浏览跟踪
- ✅ 事件跟踪（按钮点击等）
- ✅ TypeScript 类型支持

## 📈 **跟踪事件**

### 已配置的事件：
1. **注册按钮点击**: `click_register`
2. **历史按钮点击**: `click_history`

### 事件参数：
```typescript
{
  action: string,      // 事件动作
  category: string,    // 事件类别
  label?: string,      // 事件标签
  value?: number       // 事件值
}
```

## 🚀 **使用方法**

### 添加新的事件跟踪：
```typescript
import { event } from '../lib/gtag'

// 在组件中使用
const handleButtonClick = () => {
  event({
    action: 'click_button',
    category: 'engagement',
    label: 'custom_button',
  })
}
```

### 手动页面跟踪：
```typescript
import { pageview } from '../lib/gtag'

// 跟踪页面浏览
pageview('/custom-page')
```

## 📊 **数据验证**

### 实时测试：
1. 访问 [Google Analytics 实时报告](https://analytics.google.com/analytics/web/#/p/G-K2H00X9TG2/realtime)
2. 在生产环境中操作页面
3. 观察实时用户和事件数据

### 调试模式：
在浏览器控制台中检查：
```javascript
// 检查 GA 是否加载
console.log(window.gtag)

// 检查数据层
console.log(window.dataLayer)
```

## 🔒 **隐私和合规**

- 数据仅在生产环境收集
- 符合 GDPR 和其他隐私法规要求
- 可以通过环境变量轻松禁用

## 📈 **分析指标**

### 关键指标跟踪：
- 页面浏览量 (Page Views)
- 用户会话 (Sessions)  
- 注册转化率 (Registration Conversion)
- 用户互动事件 (Engagement Events)

---

**配置完成** ✅ 
Google Analytics 已成功集成到 Biancaal Trading Contest 项目中！ 