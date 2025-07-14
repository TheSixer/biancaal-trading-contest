"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHistory = () => {
    // 跳转到排行榜页面
    router.push('/rank');
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navLogo}>
            <Link href="/" className={styles.logoLink}>
              <img src="/logo@2x.png" alt="Autu Platform" className={styles.logoImage} />
            </Link>
          </div>
          
          {/* 桌面端菜单 */}
          <div className={styles.navMenu}>
            <div className={styles.navItem}>
              <Link href="/Hồ sơ công ty Autu.pdf" target="_blank" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
                Giới thiệu công ty
              </Link>
            </div>
            {/* <div className={styles.navItem}>
              <Link href="/rank" className={`${styles.navLink} ${pathname === '/rank' ? styles.active : ''}`}>
                Bảng xếp hạng
              </Link>
            </div> */}
            <div className={`${styles.navItem} ${styles.dropdown}`}>
              <span className={styles.navLink}>
                Tải phần mềm
                <span className={styles.dropdownArrow}>▼</span>
              </span>
              <div className={styles.dropdownMenu}>
                <a href="https://autup.s3.ap-southeast-1.amazonaws.com/autusecurities5setup.exe" target="_blank" className={styles.dropdownItem}>
                  <span className={styles.platformIcon}>🪟</span>
                  Windows
                </a>
                <a href="https://download.metatrader.com/cdn/web/metaquotes.ltd/mt5/MetaTrader5.pkg.zip?utm_source=www.metatrader5.com&utm_campaign=download.mt5.macos" target="_blank" className={styles.dropdownItem}>
                  <span className={styles.platformIcon}>🍎</span>
                  Mac
                </a>
                <a href="https://autup.s3.ap-southeast-1.amazonaws.com/metatrader5.apk" target="_blank" className={styles.dropdownItem}>
                  <span className={styles.platformIcon}>🤖</span>
                  Android
                </a>
                <a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=AutuSecurities-Trade" target="_blank" className={styles.dropdownItem}>
                  <span className={styles.platformIcon}>📱</span>
                  iOS
                </a>
              </div>
            </div>
            <div className={styles.navItem}>
              <Link href="/Quy trình đăng ký và nạp tiền.pdf" target="_blank" className={`${styles.navLink} ${pathname === '/register' ? styles.active : ''}`}>
                Quy trình đăng ký
              </Link>
            </div>
            {pathname !== '/rank' && (
              <div className={styles.navItem}>
                <button className={styles.historyButton} onClick={handleHistory}>
                  LỊCH SỬ
                </button>
              </div>
            )}
          </div>

          {/* 移动端汉堡菜单按钮 */}
          <button className={styles.hamburgerButton} onClick={toggleSidebar}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </nav>

      {/* 移动端侧边栏 */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarOverlay} onClick={closeSidebar}></div>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarLogo}>
              <img src="/logo@2x.png" alt="Autu Platform" className={styles.sidebarLogoImage} />
            </div>
            <button className={styles.closeButton} onClick={closeSidebar}>
              ✕
            </button>
          </div>
          
          <div className={styles.sidebarMenu}>
            <Link href="/" className={`${styles.sidebarItem} ${pathname === '/' ? styles.active : ''}`} onClick={closeSidebar}>
              <span className={styles.sidebarIcon}>🏠</span>
              Trang chủ
            </Link>
            
            <Link href="/Hồ sơ công ty Autu.pdf" target="_blank" className={`${styles.sidebarItem} ${pathname === '/about' ? styles.active : ''}`} onClick={closeSidebar}>
              <span className={styles.sidebarIcon}>🏢</span>
              Giới thiệu công ty
            </Link>
            
            {/* <Link href="/rank" className={`${styles.sidebarItem} ${pathname === '/rank' ? styles.active : ''}`} onClick={closeSidebar}>
              <span className={styles.sidebarIcon}>🏆</span>
              Bảng xếp hạng
            </Link> */}
            
            <div className={styles.sidebarDropdown}>
              <div className={styles.sidebarDropdownHeader} onClick={toggleDropdown}>
                <span className={styles.sidebarIcon}>📱</span>
                Tải phần mềm
                <span className={`${styles.sidebarDropdownArrow} ${isDropdownOpen ? styles.rotated : ''}`}>▼</span>
              </div>
              <div className={`${styles.sidebarDropdownMenu} ${isDropdownOpen ? styles.open : ''}`}>
                <a href="https://autup.s3.ap-southeast-1.amazonaws.com/autusecurities5setup.exe" className={styles.sidebarDropdownItem}>
                  <span className={styles.platformIcon}>🪟</span>
                  Windows
                </a>
                <a href="https://download.metatrader.com/cdn/web/metaquotes.ltd/mt5/MetaTrader5.pkg.zip?utm_source=www.metatrader5.com&utm_campaign=download.mt5.macos" target="_blank" className={styles.sidebarDropdownItem}>
                  <span className={styles.platformIcon}>🍎</span>
                  Mac
                </a>
                <a href="https://autup.s3.ap-southeast-1.amazonaws.com/metatrader5.apk" target="_blank" className={styles.sidebarDropdownItem}>
                  <span className={styles.platformIcon}>🤖</span>
                  Android
                </a>
                <a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=AutuSecurities-Trade" className={styles.sidebarDropdownItem}>
                  <span className={styles.platformIcon}>📱</span>
                  iOS
                </a>
              </div>
            </div>
            
            <Link href="/Quy trình đăng ký và nạp tiền.pdf" target="_blank" className={`${styles.sidebarItem} ${pathname === '/register' ? styles.active : ''}`} onClick={closeSidebar}>
              <span className={styles.sidebarIcon}>📝</span>
              Quy trình đăng ký
            </Link>
            
            {pathname !== '/rank' && (
              <button className={styles.sidebarHistoryButton} onClick={handleHistory}>
                <span className={styles.sidebarIcon}>📊</span>
                LỊCH SỬ
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation; 