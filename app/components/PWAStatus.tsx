'use client'

import { useState, useEffect } from 'react'

export default function PWAStatus() {
  const [pwaStatus, setPwaStatus] = useState({
    isInstalled: false,
    isOnline: true,
    swRegistered: false,
    canInstall: false
  })

  useEffect(() => {
    // 检查是否已安装
    const checkInstallStatus = () => {
      const isInstalled = window.matchMedia('(display-mode: standalone)').matches ||
                         (window.navigator as any).standalone === true
      setPwaStatus(prev => ({ ...prev, isInstalled }))
    }

    // 检查在线状态
    const checkOnlineStatus = () => {
      setPwaStatus(prev => ({ ...prev, isOnline: navigator.onLine }))
    }

    // 检查Service Worker状态
    const checkSWStatus = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registrations = await navigator.serviceWorker.getRegistrations()
          setPwaStatus(prev => ({ ...prev, swRegistered: registrations.length > 0 }))
        } catch (error) {
          console.error('Service Worker check failed:', error)
        }
      }
    }

    // 检查是否可以安装
    const checkInstallCapability = () => {
      const canInstall = 'serviceWorker' in navigator && 
                        'PushManager' in window &&
                        'Notification' in window
      setPwaStatus(prev => ({ ...prev, canInstall }))
    }

    // 初始检查
    checkInstallStatus()
    checkOnlineStatus()
    checkSWStatus()
    checkInstallCapability()

    // 监听事件
    window.addEventListener('online', checkOnlineStatus)
    window.addEventListener('offline', checkOnlineStatus)
    window.addEventListener('beforeinstallprompt', () => {
      setPwaStatus(prev => ({ ...prev, canInstall: true }))
    })

    return () => {
      window.removeEventListener('online', checkOnlineStatus)
      window.removeEventListener('offline', checkOnlineStatus)
    }
  }, [])

  // 只在开发环境显示
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-black/80 backdrop-blur-sm text-white p-3 rounded-lg text-xs">
        <div className="font-semibold mb-2">PWA 状态</div>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${pwaStatus.isInstalled ? 'bg-green-400' : 'bg-yellow-400'}`} />
            <span>已安装: {pwaStatus.isInstalled ? '是' : '否'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${pwaStatus.isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
            <span>在线: {pwaStatus.isOnline ? '是' : '否'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${pwaStatus.swRegistered ? 'bg-green-400' : 'bg-yellow-400'}`} />
            <span>SW: {pwaStatus.swRegistered ? '已注册' : '未注册'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${pwaStatus.canInstall ? 'bg-green-400' : 'bg-yellow-400'}`} />
            <span>可安装: {pwaStatus.canInstall ? '是' : '否'}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 