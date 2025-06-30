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
          throw new Error('获取榜单列表失败');
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
          setError('榜单数据格式错误');
        }
      })
      .catch((err) => {
        console.error('获取榜单失败:', err);
        setError('获取榜单失败，请稍后重试');
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
            throw new Error('获取榜单详情失败');
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
          console.error('获取榜单详情失败:', err);
          setError('获取榜单详情失败');
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
          <div className={styles.titleCn}>月度活动获奖榜单</div>
          <div className={styles.titleEn}>MONTHLY AWARDS</div>
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
              {years.map(y => <option key={y} value={y}>{y}年</option>)}
            </select>
            <select
              value={selectedMonth ?? ''}
              onChange={e => setSelectedMonth(Number(e.target.value))}
              className={styles.select}
              disabled={loading || !selectedYear}
            >
              {months.map(m => <option key={m} value={m}>{m}月</option>)}
            </select>
          </div>
          <div className={styles.tabs}>
            {weeks.map((w) => (
              <span
                key={w}
                className={w === selectedWeek ? styles.tabActive : styles.tab}
                onClick={() => !loading && setSelectedWeek(w)}
              >
                第{w}周
              </span>
            ))}
          </div>
        </div>
        
        {/* 榜单区 */}
        <div className={styles.rankList}>
          {loading && (
            <div style={{color:'#ffe066',textAlign:'center',padding:'32px'}}>
              加载中...
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
                  <span className={styles.rankLabel}>账号名称</span>
                  <span className={styles.rankLabel}>客户ID</span>
                  <span className={styles.rankLabel}>最终模拟金</span>
                  <span className={styles.rankLabel}>胜率百分比</span>
                  <span className={styles.rankLabel}>奖金</span>
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
              暂无数据
            </div>
          )}
        </div>
        
        {/* 底部提示卡片和二维码区 */}
        <div className={styles.noticeCard}>
          <div className={styles.noticeTitle}>
            <span className={styles.noticeTitleIcon}>📢</span>活动特别注意
          </div>
          <div className={styles.noticeText}>
            凡是当月当周获奖的客户都可以联系客服，将有机会成为{" "}
            <span className={styles.autu}>Autu平台</span>{" "}
            的正式员工，享受高薪新工作！
          </div>
          <div className={styles.salaryLabel}>无责底薪</div>
          <div className={styles.salary}>1400万-2400万</div>
          <div className={styles.salaryNote}>*薪资范围视岗位与能力而定</div>
        </div>
        <div className={styles.qrSection}>
          <div className={styles.qrImg}>
            <img src="/qrcode.jpg" alt="官方客服二维码" />
          </div>
          <div className={styles.qrDesc}>联系客服官方客服</div>
          <div className={styles.qrPlatform}>
            Autu Platform
            <br />
            活动最终解释权归平台所有
          </div>
        </div>
      </div>
    </main>
  );
}
