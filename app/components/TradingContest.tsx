"use client";

import React from "react";
import styles from "./TradingContest.module.css";

const TradingContest = () => {
  // Helper function to handle image paths for GitHub Pages
  const getImagePath = (path: string) => {
    const basePath =
      process.env.NODE_ENV === "production" ? "/biancaal-trading-contest" : "";
    return `${basePath}${path}`;
  };

  const handleRegister = () => {
    window.open(
      "https://www.auturegister.com/register/trader?link_id=g4f6b4rl&referrer_id=bhgyj16u",
      "_blank"
    );
  };

  const handleHistory = () => {
    // 可以添加历史记录页面的链接
    console.log("查看历史记录");
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            src={getImagePath("/logo@2x.png")}
            alt="Biancaal"
            className={styles.logoImage}
          />
        </div>
        <button className={styles.registerButton} onClick={handleHistory}>
          LỊCH SỬ
        </button>
      </div>

      {/* Main Title */}
      <div className={styles.mainTitle}>
        <h1 className={styles.title}>Cuộc thi giao dịch Demo sàn AUTU</h1>
        <h1 className={styles.title}>Với giải thưởng mỗi tuần giá trị lên đến </h1>
        <h1 className={styles.title}>46.000.000 VNĐ!</h1>
        <h2 className={styles.subtitle}>Đang chờ bạn đến tham gia</h2>
        <p className={styles.schedule}>Cuộc thi được tổ chức hàng tuần!</p>
      </div>

      {/* Primary Registration Button */}
      <div className={styles.primaryButtonContainer}>
        <button className={styles.mainRegisterButton} onClick={handleRegister}>
          ĐĂNG KÝ NGAY
        </button>
      </div>

      {/* Trading Image */}
      <div className={styles.imageSection}>
        <div className={styles.tradingImage}>
          <img
            src={getImagePath("/banner.png")}
            alt="Trading Scene"
            className={styles.bannerImage}
          />
        </div>

        <div className={styles.primaryButtonContainer}>
          <button
            className={styles.mainRegisterButton}
            onClick={handleRegister}
          >
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>

      {/* Contest Info */}
      <div className={styles.contestInfo}>
        <h3 className={styles.sectionTitle}>GIỚI THIỆU CUỘC THI</h3>
        <p className={styles.description}>
          Autu tổ chức cuộc thi giao dịch mô phỏng nhằm giới thiệu nền tảng mới
          đến thị trường Việt Nam. Thành viên có thể trải nghiệm tính năng, có
          cơ hội nhận giải thưởng hấp dẫn!
        </p>

        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <h4>Đối tượng</h4>
            <p>Khách hàng Việt Nam đã đăng ký và mở tài khoản AUTU</p>
          </div>
          <div className={styles.infoItem}>
            <h4>Thời gian</h4>
            <p>
              Giao dịch: Thứ 2 - Thứ 6 hàng tuần
              <br />
              Tính toán: Thứ 7 & CN
              <br />
              Trả thưởng: Sau khi kết thúc tính toán
            </p>
          </div>
        </div>

        <div className={styles.primaryButtonContainer}>
          <button
            className={styles.mainRegisterButton}
            onClick={handleRegister}
          >
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>

      {/* How to Section */}
      <div className={styles.howToSection}>
        <h3 className={styles.sectionTitle}>CÁCH THỨC THAM GIA</h3>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <p>
              Liên hệ hỗ trợ viên qua Zalo{" "}
              <a href="tel:+840389068681">+84 0389068681</a> để đăng ký
            </p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <p>Nhận $1000 tiền mô phỏng sau khi đăng ký thành công</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <p>Thực hiện ít nhất 20 lót tiêu chuẩn trong tuần</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <p>Xếp hạng dựa trên lợi nhuận vượt $1000</p>
          </div>
        </div>
      </div>

      {/* Prizes Section */}
      <div className={styles.prizesSection}>
        <h3 className={styles.sectionTitle}>GIẢI THƯỞNG HẤP DẪN</h3>
        <div className={styles.prizeGrid}>
          <div className={`${styles.prize} ${styles.first}`}>
            <div className={styles.prizeRank}>1st</div>
            <div className={styles.prizeAmount}>$500</div>
            <div className={styles.prizeWinners}>1 người</div>
          </div>
          <div className={`${styles.prize} ${styles.second}`}>
            <div className={styles.prizeRank}>2nd</div>
            <div className={styles.prizeAmount}>$300</div>
            <div className={styles.prizeWinners}>2 người</div>
          </div>
          <div className={`${styles.prize} ${styles.third}`}>
            <div className={styles.prizeRank}>3rd</div>
            <div className={styles.prizeAmount}>$100</div>
            <div className={styles.prizeWinners}>3 người</div>
          </div>
          <div className={`${styles.prize} ${styles.fourth}`}>
            <div className={styles.prizeRank}>4th</div>
            <div className={styles.prizeAmount}>$50</div>
            <div className={styles.prizeWinners}>4 người</div>
          </div>
          <div className={`${styles.prize} ${styles.fifth}`}>
            <div className={styles.prizeRank}>5th</div>
            <div className={styles.prizeAmount}>$10</div>
            <div className={styles.prizeWinners}>10 người</div>
          </div>
        </div>
        <p className={styles.prizeNote}>
          * Giải thưởng sẽ được chuyển trong vòng 2 ngày làm việc sau khi kết
          thúc tính toán
        </p>
      </div>

      {/* Rules Section */}
      <div className={styles.rulesSection}>
        <h3 className={styles.sectionTitle}>QUY ĐỊNH CUỘC THI</h3>
        <div className={styles.rulesList}>
          <p>• Mỗi người tham gia nhận $1000 tiền mô phỏng</p>
          <p>
            • Yêu cầu giao dịch tối thiểu 20 lót tiêu chuẩn (1 lot = 100 lệnh
            0.01 hoặc 10 lệnh 0.1)
          </p>
          <p>• Xếp hạng dựa trên lợi nhuận vượt $1000</p>
          <p>• Cấm phép giao dịch lướt sóng hoặc quant trading</p>
          <p>
            • Nghiêm cấm mọi hành vi gian lận, vi phạm sẽ bị hủy tư cách tham
            gia
          </p>
          <p>• Kết quả cuối cùng do ban tổ chức quyết định</p>
        </div>
      </div>

      {/* Registration Section */}
      <div className={styles.registrationSection}>
        <h3 className={styles.registrationTitle}>ĐĂNG KÝ NGAY!</h3>
        <p className={styles.registrationText}>Liên hệ hỗ trợ viên qua Zalo:</p>
        <div className={styles.telegramContact}>
          <div className={styles.telegramHandle}>
            <a
              href="tel:+840389068681"
              target="_blank"
              rel="noopener noreferrer"
            >
              +84 0389068681
            </a>
          </div>
        </div>

        <div className={styles.qrSection}>
          <div className={styles.qrCode}>
            <img
              src={getImagePath("/qrcode.jpg")}
              alt="QR Code"
              className={styles.qrImage}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p>Autu Financial - Nền tảng giao dịch chuyên nghiệp</p>
        <p className={styles.disclaimer}>* Điều khoản và điều kiện áp dụng</p>
      </div>
    </div>
  );
};

export default TradingContest;
