const fs = require('fs');
const path = require('path');

console.log('🎨 自动匹配并生成所有PWA标准icon...\n');

const publicDir = path.join(__dirname, '../public');
const appIconsDir = path.join(publicDir, 'AppIcons/Assets.xcassets/AppIcon.appiconset');

if (!fs.existsSync(appIconsDir)) {
  console.log('❌ AppIcon.appiconset 目录不存在，请先准备图标文件');
  process.exit(1);
}

// 目标尺寸及文件名
const targets = [
  { size: 16,  name: 'icon-16x16.png' },
  { size: 32,  name: 'icon-32x32.png' },
  { size: 72,  name: 'icon-72x72.png' },
  { size: 96,  name: 'icon-96x96.png' },
  { size: 128, name: 'icon-128x128.png' },
  { size: 144, name: 'icon-144x144.png' },
  { size: 152, name: 'icon-152x152.png' },
  { size: 167, name: 'icon-167x167.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 256, name: 'icon-256x256.png' },
  { size: 384, name: 'icon-384x384.png' },
  { size: 512, name: 'icon-512x512.png' },
  { size: 1024, name: 'icon-1024x1024.png' }
];

// 获取所有可用的PNG文件
const files = fs.readdirSync(appIconsDir).filter(f => f.endsWith('.png'));
const available = files.map(f => ({
  file: f,
  size: parseInt(f.split('.')[0], 10)
})).filter(f => !isNaN(f.size));

// 匹配最接近的尺寸
function findClosest(target) {
  let minDiff = Infinity;
  let best = null;
  for (const icon of available) {
    const diff = Math.abs(icon.size - target);
    if (diff < minDiff) {
      minDiff = diff;
      best = icon;
    }
  }
  return best;
}

let copiedCount = 0;
console.log('📁 生成标准icon:');
targets.forEach(({ size, name }) => {
  const match = findClosest(size);
  if (match) {
    const src = path.join(appIconsDir, match.file);
    const dest = path.join(publicDir, name);
    fs.copyFileSync(src, dest);
    const sz = fs.statSync(src).size;
    console.log(`  ✅ ${match.file} → ${name} (${sz} bytes)`);
    copiedCount++;
  } else {
    console.log(`  ❌ 未找到接近 ${size}x${size} 的icon`);
  }
});

// favicon.ico 用32x32
const faviconSource = path.join(publicDir, 'icon-32x32.png');
const faviconTarget = path.join(publicDir, 'favicon.ico');
if (fs.existsSync(faviconSource)) {
  fs.copyFileSync(faviconSource, faviconTarget);
  console.log(`  ✅ icon-32x32.png → favicon.ico`);
}

// 更新manifest.json
console.log('\n📋 更新 manifest.json:');
const manifestPath = path.join(publicDir, 'manifest.json');
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  manifest.icons = [
    { "src": "/icon-72x72.png", "sizes": "72x72", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icon-96x96.png", "sizes": "96x96", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icon-128x128.png", "sizes": "128x128", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icon-144x144.png", "sizes": "144x144", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icon-152x152.png", "sizes": "152x152", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icon-192x192.png", "sizes": "192x192", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icon-384x384.png", "sizes": "384x384", "type": "image/png", "purpose": "maskable any" },
    { "src": "/icon-512x512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable any" }
  ];
  if (manifest.shortcuts) {
    manifest.shortcuts.forEach(shortcut => {
      if (shortcut.icons) {
        shortcut.icons[0].src = "/icon-192x192.png";
      }
    });
  }
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('  ✅ 更新了 manifest.json 中的图标配置');
}

console.log(`\n🎉 完成！共生成了 ${copiedCount} 个标准icon文件`);
console.log('\n🚀 现在可以重新构建项目并测试 PWA 功能了！'); 