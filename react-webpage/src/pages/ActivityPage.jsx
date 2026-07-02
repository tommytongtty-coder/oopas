import { usePageStyles } from "../usePageStyles.js";

function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="/" aria-label="Institution For Gifted Children home">
          <img
            className="brand-logo"
            src="/images/test.png"
            alt="Institution For Gifted Children logo"
          />
          <div>
            <div className="brand-name">資優兒童協會</div>
            <div className="brand-tagline">培訓 · 比賽 · 活動</div>
          </div>
        </a>

        <nav className="nav" aria-label="主導覽">
          <a href="/activity">活動</a>
          <a href="/#pathway">學習路徑</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-overlay" />
      <div className="shell hero-inner">
        <div className="hero-text">
          <span className="hero-kicker">Speech &amp; Recitation</span>
          <h1 id="hero-title">朗誦比賽 2026</h1>
          <p className="hero-subtitle">
            資優兒童協會舉辦的朗誦、演說及舞台表演系列比賽現已開始報名。
            用詩詞與故事點亮舞台，讓孩子在三分鐘內展現自信、表達力與想像力。
          </p>
        </div>
      </div>
    </section>
  );
}

function ActivityCard() {
  return (
    <a className="activity-card" href="/activity/poster-1">
      <div className="activity-image activity-image-1" aria-hidden="true" />
      <div className="activity-body">
        <h3 className="activity-name">資優兒童協會兒童朗誦及故事比賽（粵語組）</h3>
        <p className="activity-meta">日期：2026 年 8 月中旬｜形式：現場比賽｜級別：K2 至小四</p>
        <p className="activity-price">報名費用 由 HK$220 起</p>
        <p className="activity-note">以短篇故事及童詩為主題，強調語調、感情投入及眼神交流。</p>
      </div>
    </a>
  );
}

function Activities() {
  return (
    <section id="activities" className="activities">
      <div className="shell">
        <header className="activities-head">
          <div>
            <h2 className="activities-title">最新朗誦比賽及活動</h2>
            <p className="activities-intro">
              為不同年級及語言程度設計的朗誦及演說舞台，讓學生在安全而專業的環境中實踐台上表達。
            </p>
          </div>
        </header>

        <div className="activity-grid">
          <ActivityCard />
        </div>
      </div>
    </section>
  );
}

function ActivityPage() {
  usePageStyles("/styles/activity.css");

  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Activities />
      </main>
    </div>
  );
}

export default ActivityPage;
