"use client";

import styles from "./rank.module.css";
import { useEffect, useState } from "react";

interface LeaderboardMeta {
  year: number;
  month: number;
  week: number;
}

interface RankItem {
  name: string;
  id: string;
  amount: string;
  win: string;
  prize: string;
  rank: number;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export default function RankPage() {
  const [allBoards, setAllBoards] = useState<LeaderboardMeta[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [months, setMonths] = useState<number[]>([]);
  const [weeks, setWeeks] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [rankData, setRankData] = useState<RankItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 获取所有榜单元数据
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(`${API_BASE}/api/leaderboards`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Lỗi khi tải danh sách bảng xếp hạng');
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const meta = data.map((b: any) => ({ 
            year: b.year, 
            month: b.month, 
            week: b.week 
          }));
          setAllBoards(meta);
          
          // 年份去重并排序（最新年份在前）
          const yearList = Array.from(new Set(meta.map((b) => b.year))).sort((a, b) => b - a);
          setYears(yearList);
          
          // 默认选最新年份
          if (yearList.length > 0) {
            setSelectedYear(yearList[0]);
          }
        } else {
          setError('Định dạng dữ liệu bảng xếp hạng không đúng');
        }
      })
      .catch((err) => {
        console.error('Lỗi khi tải bảng xếp hạng:', err);
        setError('Lỗi khi tải bảng xếp hạng, vui lòng thử lại sau');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // 年份变化，更新月份
  useEffect(() => {
    if (selectedYear) {
      const monthList = Array.from(
        new Set(
          allBoards
            .filter(b => b.year === selectedYear)
            .map(b => b.month)
        )
      ).sort((a, b) => b - a); // 最新月份在前
      
      setMonths(monthList);
      if (monthList.length > 0) {
        setSelectedMonth(monthList[0]);
      } else {
        setSelectedMonth(null);
      }
    }
  }, [selectedYear, allBoards]);

  // 月份变化，更新周次
  useEffect(() => {
    if (selectedYear && selectedMonth) {
      const weekList = Array.from(
        new Set(
          allBoards
            .filter(b => b.year === selectedYear && b.month === selectedMonth)
            .map(b => b.week)
        )
      ).sort((a, b) => a - b); // 周次按数字顺序
      
      setWeeks(weekList);
      if (weekList.length > 0) {
        setSelectedWeek(weekList[0]);
      } else {
        setSelectedWeek(null);
      }
    }
  }, [selectedYear, selectedMonth, allBoards]);

  // 选中周次后，请求榜单数据
  useEffect(() => {
    if (selectedYear && selectedMonth && selectedWeek) {
      setLoading(true);
      setError(null);
      
      // 使用新的API接口获取特定榜单
      fetch(`${API_BASE}/api/leaderboards?year=${selectedYear}&month=${selectedMonth}&week=${selectedWeek}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Lỗi khi tải chi tiết bảng xếp hạng');
          }
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            const leaderboard = data[0]; // 取第一个匹配的榜单
            if (Array.isArray(leaderboard.entries)) {
              setRankData(
                leaderboard.entries.map((entry: any) => ({
                  name: entry.accountName || '-',
                  id: entry.customerId || '-',
                  amount: entry.finalSimulatedGold 
                    ? Number(entry.finalSimulatedGold).toLocaleString() 
                    : '-',
                  win: entry.winRate 
                    ? `${Number(entry.winRate).toFixed(1)}%` 
                    : '-',
                  prize: entry.bonus 
                    ? `¥${Number(entry.bonus).toLocaleString()}` 
                    : '-',
                  rank: entry.rankPosition || 0,
                }))
              );
            } else {
              setRankData([]);
            }
          } else {
            setRankData([]);
          }
        })
        .catch((err) => {
          console.error('Lỗi khi tải chi tiết bảng xếp hạng:', err);
          setError('Lỗi khi tải chi tiết bảng xếp hạng');
          setRankData([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedYear, selectedMonth, selectedWeek]);

  return (
    <main className={styles.rankMain}>
      <div className={styles.rankWrapper}>
        {/* 标题区 */}
        <div className={styles.header}>
          <div className={styles.titleCn}>Danh sách giải thưởng hoạt động hàng tháng</div>
          <div className={styles.titleEn}>Giải thưởng hàng tháng</div>
        </div>
        
        {/* 顶部卡片：年份、月份下拉+周次按钮 */}
        <div className={styles.topCard}>
          <div className={styles.monthRow}>
            <select
              value={selectedYear ?? ''}
              onChange={e => setSelectedYear(Number(e.target.value))}
              className={styles.select}
              disabled={loading}
            >
              {years.map(y => <option key={y} value={y}>{y} năm</option>)}
            </select>
            <select
              value={selectedMonth ?? ''}
              onChange={e => setSelectedMonth(Number(e.target.value))}
              className={styles.select}
              disabled={loading || !selectedYear}
            >
              {months.map(m => <option key={m} value={m}>Tháng {m}</option>)}
            </select>
          </div>
          <div className={styles.tabs}>
            {weeks.map((w) => (
              <span
                key={w}
                className={w === selectedWeek ? styles.tabActive : styles.tab}
                onClick={() => !loading && setSelectedWeek(w)}
              >
                Tuần thứ {w === 1 ? 'nhất' : w === 2 ? 'hai' : w === 3 ? 'ba' : 'tư'}
              </span>
            ))}
          </div>
        </div>
        
        {/* 榜单区 */}
        <div className={styles.rankList}>
          {loading && (
            <div style={{color:'#ffe066',textAlign:'center',padding:'32px'}}>
              Đang tải...
            </div>
          )}
          
          {error && (
            <div style={{color:'#ff6b6b',textAlign:'center',padding:'32px'}}>
              {error}
            </div>
          )}
          
          {!loading && !error && rankData.map((item, idx) => (
            <div className={styles.rankCard} key={idx}>
              <div className={styles.rankCardLeft}>
                <span
                  className={
                    styles[
                      `rankIcon_${
                        idx === 0
                          ? "gold"
                          : idx === 1
                          ? "silver"
                          : idx === 2
                          ? "bronze"
                          : "gray"
                      }`
                    ]
                  }
                >
                  {item.rank || idx + 1}
                </span>
              </div>
              <div className={styles.rankCardRight}>
                <div className={styles.rankCardRow1}>
                  <span className={styles.rankLabel}>Tên tài khoản</span>
                  <span className={styles.rankLabel}>ID khách hàng</span>
                  <span className={styles.rankLabel}>Số dư cuối cùng trong tài khoản demo</span>
                  <span className={styles.rankLabel}>Tỉ lệ thắng lệnh</span>
                  <span className={styles.rankLabel}>Tiền thưởng</span>
                </div>
                <div className={styles.rankCardRow2}>
                  <span className={styles.rankName}>{item.name}</span>
                  <span className={styles.rankName}>{item.id}</span>
                  <span className={styles.rankAmount}>{item.amount}</span>
                  <span className={styles.rankWin}>{item.win}</span>
                  <span className={styles.rankPrize}>{item.prize}</span>
                </div>
              </div>
            </div>
          ))}
          
          {!loading && !error && rankData.length === 0 && (
            <div style={{color:'#fff',textAlign:'center',padding:'32px'}}>
              Không có dữ liệu
            </div>
          )}
        </div>
        
        {/* 底部提示卡片和二维码区 */}
        <div className={styles.noticeCard}>
          <div className={styles.noticeTitle}>
            <span className={styles.noticeTitleIcon}>🚨</span>Lưu ý đặc biệt của chương trình
          </div>
          <div className={styles.noticeText}>
            Tất cả khách hàng đạt giải trong tuần/tháng có thể liên hệ với bộ phận chăm sóc khách hàng để có cơ hội trở thành nhân viên chính thức của{" "}
            <span className={styles.autu}>nền tảng giao dịch Autu</span>{" "}
            , với mức đãi ngộ hấp dẫn!
          </div>
          <div className={styles.salaryLabel}>Lương cứng không ràng buộc doanh số</div>
          <div className={styles.salary}>Mức lương: từ 14 triệu đến 24 triệu VNĐ/tháng</div>
          <div className={styles.salaryNote}>*Mức thu nhập cụ thể sẽ phụ thuộc vào vị trí công việc và năng lực cá nhân</div>
        </div>
        <div className={styles.qrSection}>
          <div className={styles.qrImg}>
            <img src="/qrcode.jpg" alt="Mã QR chăm sóc khách hàng chính thức" />
          </div>
          <div className={styles.qrDesc}>Liên hệ chăm sóc khách hàng chính thức</div>
          <div className={styles.qrPlatform}>
            Autu Platform
            <br />
            Quyền giải thích cuối cùng của chương trình thuộc về nền tảng Autu Platform.
          </div>
        </div>
      </div>
    </main>
  );
}
