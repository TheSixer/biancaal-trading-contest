const fs = require('fs');
const path = require('path');

console.log('🔍 检查 PWA 配置...\n');

// 检查必需的文件
const requiredFiles = [
  'public/manifest.json',
  'public/sw.js',
  'next.config.js',
  'app/components/PWAInstallPrompt.tsx',
  'app/components/PWAStatus.tsx',
  'app/pwa-test/page.tsx'
];

const requiredIcons = [
  'public/icon-72x72.png',
  'public/icon-96x96.png',
  'public/icon-128x128.png',
  'public/icon-144x144.png',
  'public/icon-152x152.png',
  'public/icon-192x192.png',
  'public/icon-384x384.png',
  'public/icon-512x512.png',
  'public/favicon.ico',
  'public/apple-touch-icon.png'
];

let allFilesExist = true;

// 检查必需文件
console.log('📁 检查必需文件:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

console.log('\n🎨 检查图标文件:');
requiredIcons.forEach(icon => {
  const exists = fs.existsSync(icon);
  const size = exists ? fs.statSync(icon).size : 0;
  const status = exists ? (size > 0 ? '✅' : '⚠️') : '❌';
  console.log(`  ${status} ${icon} ${size > 0 ? `(${size} bytes)` : '(空文件)'}`);
  if (!exists || size === 0) allFilesExist = false;
});

// 检查 manifest.json
console.log('\n📋 检查 manifest.json:');
try {
  const manifestPath = 'public/manifest.json';
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    
    const requiredFields = ['name', 'short_name', 'start_url', 'display', 'theme_color'];
    requiredFields.forEach(field => {
      const hasField = manifest.hasOwnProperty(field);
      console.log(`  ${hasField ? '✅' : '❌'} ${field}: ${manifest[field] || 'missing'}`);
      if (!hasField) allFilesExist = false;
    });
    
    // 检查图标配置
    if (manifest.icons && manifest.icons.length > 0) {
      console.log(`  ✅ icons: ${manifest.icons.length} 个图标`);
    } else {
      console.log('  ❌ icons: 缺少图标配置');
      allFilesExist = false;
    }
  } else {
    console.log('  ❌ manifest.json 文件不存在');
    allFilesExist = false;
  }
} catch (error) {
  console.log('  ❌ manifest.json 解析失败:', error.message);
  allFilesExist = false;
}

// 检查 next.config.js
console.log('\n⚙️ 检查 next.config.js:');
try {
  const configPath = 'next.config.js';
  if (fs.existsSync(configPath)) {
    const configContent = fs.readFileSync(configPath, 'utf8');
    const hasPWA = configContent.includes('next-pwa');
    console.log(`  ${hasPWA ? '✅' : '❌'} next-pwa 配置`);
    if (!hasPWA) allFilesExist = false;
  } else {
    console.log('  ❌ next.config.js 文件不存在');
    allFilesExist = false;
  }
} catch (error) {
  console.log('  ❌ next.config.js 检查失败:', error.message);
  allFilesExist = false;
}

// 检查 package.json
console.log('\n📦 检查 package.json:');
try {
  const packagePath = 'package.json';
  if (fs.existsSync(packagePath)) {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const hasNextPWA = packageJson.dependencies && packageJson.dependencies['next-pwa'];
    console.log(`  ${hasNextPWA ? '✅' : '❌'} next-pwa 依赖`);
    if (!hasNextPWA) allFilesExist = false;
  } else {
    console.log('  ❌ package.json 文件不存在');
    allFilesExist = false;
  }
} catch (error) {
  console.log('  ❌ package.json 检查失败:', error.message);
  allFilesExist = false;
}

// 总结
console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('🎉 PWA 配置检查通过！');
  console.log('\n📝 下一步:');
  console.log('1. 替换图标文件为实际设计');
  console.log('2. 运行 pnpm build 构建生产版本');
  console.log('3. 部署到 HTTPS 环境');
  console.log('4. 测试 PWA 安装功能');
} else {
  console.log('⚠️  PWA 配置检查失败，请修复上述问题');
}
console.log('='.repeat(50)); 