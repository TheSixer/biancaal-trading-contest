const fs = require('fs');
const path = require('path');

console.log('🎨 创建实际的图标文件...\n');

// 创建public目录（如果不存在）
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 创建favicon.ico的占位符（实际应该是ICO格式）
const faviconPath = path.join(publicDir, 'favicon.ico');
if (!fs.existsSync(faviconPath) || fs.statSync(faviconPath).size === 0) {
  // 创建一个简单的ICO文件占位符
  const icoHeader = Buffer.from([
    0x00, 0x00, // 保留
    0x01, 0x00, // 图标类型
    0x01, 0x00, // 图标数量
    0x10, 0x10, // 宽度和高度 (16x16)
    0x00,       // 颜色数
    0x00,       // 保留
    0x01, 0x00, // 颜色平面
    0x20, 0x00, // 位深度
    0x40, 0x01, 0x00, 0x00, // 数据大小
    0x16, 0x00, 0x00, 0x00  // 数据偏移
  ]);
  
  // 简单的16x16像素数据（蓝色方块）
  const pixelData = Buffer.alloc(256, 0x00); // 16x16 = 256字节
  for (let i = 0; i < 256; i += 4) {
    pixelData[i] = 0xFF;     // B
    pixelData[i + 1] = 0x00; // G
    pixelData[i + 2] = 0x00; // R
    pixelData[i + 3] = 0x00; // A
  }
  
  const icoFile = Buffer.concat([icoHeader, pixelData]);
  fs.writeFileSync(faviconPath, icoFile);
  console.log('✅ 创建 favicon.ico');
}

// 创建apple-touch-icon.png
const appleTouchIconPath = path.join(publicDir, 'apple-touch-icon.png');
if (!fs.existsSync(appleTouchIconPath) || fs.statSync(appleTouchIconPath).size === 0) {
  // 复制现有的192x192图标作为apple-touch-icon
  const sourceIcon = path.join(publicDir, 'icon-192x192.png');
  if (fs.existsSync(sourceIcon)) {
    fs.copyFileSync(sourceIcon, appleTouchIconPath);
    console.log('✅ 创建 apple-touch-icon.png (从 icon-192x192.png 复制)');
  } else {
    // 如果源文件不存在，创建一个简单的PNG占位符
    const pngHeader = Buffer.from([
      0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG签名
      0x00, 0x00, 0x00, 0x0D, // IHDR块长度
      0x49, 0x48, 0x44, 0x52, // IHDR
      0x00, 0x00, 0x00, 0xC0, // 宽度 192
      0x00, 0x00, 0x00, 0xC0, // 高度 192
      0x08, 0x06, 0x00, 0x00, 0x00 // 其他参数
    ]);
    fs.writeFileSync(appleTouchIconPath, pngHeader);
    console.log('⚠️  创建 apple-touch-icon.png 占位符 (需要替换为实际图标)');
  }
}

// 检查所有图标文件
const iconFiles = [
  'icon-72x72.png',
  'icon-96x96.png', 
  'icon-128x128.png',
  'icon-144x144.png',
  'icon-152x152.png',
  'icon-192x192.png',
  'icon-384x384.png',
  'icon-512x512.png'
];

console.log('\n📋 图标文件状态:');
iconFiles.forEach(icon => {
  const iconPath = path.join(publicDir, icon);
  const exists = fs.existsSync(iconPath);
  const size = exists ? fs.statSync(iconPath).size : 0;
  const status = exists && size > 100 ? '✅' : '⚠️';
  console.log(`  ${status} ${icon} (${size} bytes)`);
});

console.log('\n🎯 PWA Builder 要求:');
console.log('- 所有图标文件必须存在且不为空');
console.log('- icon-192x192.png 和 icon-512x512.png 是必需的');
console.log('- 图标应该是正方形，背景透明或纯色');
console.log('- 建议使用 maskable 图标以获得更好的适配效果');

console.log('\n📝 下一步:');
console.log('1. 用实际设计的图标替换所有占位符文件');
console.log('2. 确保 icon-192x192.png 和 icon-512x512.png 存在且有效');
console.log('3. 重新在 PWA Builder 中生成 APK'); 