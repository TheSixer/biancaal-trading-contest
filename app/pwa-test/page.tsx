'use client'

import { useState, useEffect } from 'react'

export default function PWATestPage() {
  const [isInstalled, setIsInstalled] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [swStatus, setSwStatus] = useState('checking')

  useEffect(() => {
    // 检查是否已安装
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }

    // 检查在线状态
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    
    setIsOnline(navigator.onLine)

    // 检查Service Worker状态
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        if (registrations.length > 0) {
          setSwStatus('registered')
        } else {
          setSwStatus('not-registered')
        }
      })
    } else {
      setSwStatus('not-supported')
    }

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleInstall = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        console.log('SW registered: ', registration)
        setSwStatus('registered')
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError)
        setSwStatus('registration-failed')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            PWA 测试页面
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* PWA 状态 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">PWA 状态</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>安装状态:</span>
                  <span className={isInstalled ? 'text-green-400' : 'text-yellow-400'}>
                    {isInstalled ? '已安装' : '未安装'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>在线状态:</span>
                  <span className={isOnline ? 'text-green-400' : 'text-red-400'}>
                    {isOnline ? '在线' : '离线'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Service Worker:</span>
                  <span className={
                    swStatus === 'registered' ? 'text-green-400' :
                    swStatus === 'not-registered' ? 'text-yellow-400' :
                    swStatus === 'not-supported' ? 'text-red-400' :
                    'text-gray-400'
                  }>
                    {swStatus === 'registered' ? '已注册' :
                     swStatus === 'not-registered' ? '未注册' :
                     swStatus === 'not-supported' ? '不支持' :
                     swStatus === 'registration-failed' ? '注册失败' :
                     '检查中...'}
                  </span>
                </div>
              </div>
            </div>

            {/* 功能测试 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">功能测试</h2>
              <div className="space-y-3">
                <button
                  onClick={handleInstall}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  注册 Service Worker
                </button>
                <button
                  onClick={() => {
                    if ('serviceWorker' in navigator) {
                      navigator.serviceWorker.getRegistrations().then(registrations => {
                        registrations.forEach(registration => {
                          registration.unregister()
                        })
                        setSwStatus('not-registered')
                      })
                    }
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  注销 Service Worker
                </button>
              </div>
            </div>

            {/* 缓存信息 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">缓存信息</h2>
              <div className="space-y-2 text-sm">
                <div>缓存策略: Network First</div>
                <div>离线支持: 是</div>
                <div>推送通知: 支持</div>
                <div>后台同步: 支持</div>
              </div>
            </div>

            {/* 安装指南 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">安装指南</h2>
              <div className="space-y-2 text-sm">
                <div><strong>Chrome/Edge:</strong> 点击地址栏右侧的安装图标</div>
                <div><strong>Safari:</strong> 点击分享按钮，选择"添加到主屏幕"</div>
                <div><strong>Firefox:</strong> 点击地址栏右侧的菜单，选择"安装应用"</div>
                <div><strong>移动端:</strong> 在浏览器菜单中选择"添加到主屏幕"</div>
              </div>
            </div>
          </div>

          {/* 测试链接 */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">测试链接</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="/"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md text-center hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                首页
              </a>
              <a
                href="/rank"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-md text-center hover:from-green-700 hover:to-blue-700 transition-colors"
              >
                排行榜
              </a>
              <a
                href="/pwa-test"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md text-center hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                PWA 测试
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 