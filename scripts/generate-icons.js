const fs = require('fs');
const path = require('path');

// 创建public目录（如果不存在）
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 创建占位符图标文件
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

iconSizes.forEach(size => {
  const iconPath = path.join(publicDir, `icon-${size}x${size}.png`);
  
  // 创建一个简单的SVG占位符
  const svgContent = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1e3c72;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2a5298;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" fill="url(#grad)" rx="20"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-family="Arial, sans-serif" font-size="${size/8}">A</text>
    </svg>
  `;
  
  // 将SVG转换为PNG的占位符（这里只是创建文件）
  fs.writeFileSync(iconPath, Buffer.from(svgContent));
  console.log(`Created icon: icon-${size}x${size}.png`);
});

// 创建favicon.ico占位符
const faviconPath = path.join(publicDir, 'favicon.ico');
if (!fs.existsSync(faviconPath)) {
  fs.writeFileSync(faviconPath, '');
  console.log('Created favicon.ico placeholder');
}

// 创建apple-touch-icon.png占位符
const appleTouchIconPath = path.join(publicDir, 'apple-touch-icon.png');
if (!fs.existsSync(appleTouchIconPath)) {
  fs.writeFileSync(appleTouchIconPath, '');
  console.log('Created apple-touch-icon.png placeholder');
}

// 创建screenshot占位符
const screenshotWidePath = path.join(publicDir, 'screenshot-wide.png');
const screenshotNarrowPath = path.join(publicDir, 'screenshot-narrow.png');

if (!fs.existsSync(screenshotWidePath)) {
  fs.writeFileSync(screenshotWidePath, '');
  console.log('Created screenshot-wide.png placeholder');
}

if (!fs.existsSync(screenshotNarrowPath)) {
  fs.writeFileSync(screenshotNarrowPath, '');
  console.log('Created screenshot-narrow.png placeholder');
}

console.log('\nPWA icon placeholders created successfully!');
console.log('Please replace these placeholder files with actual icons:');
console.log('- icon-72x72.png to icon-512x512.png');
console.log('- favicon.ico');
console.log('- apple-touch-icon.png');
console.log('- screenshot-wide.png');
console.log('- screenshot-narrow.png'); 