import { useEffect } from "react";
import { usePageStyles } from "../usePageStyles.js";

const services = [
  {
    className: "training",
    icon: "T",
    title: "進階培訓課程",
    text: "小組及重點訓練，加強高層次思維、表達技巧、研究能力及學習信心，適合需要更大挑戰的學生。",
    items: ["批判思維與邏輯訓練", "STEM、語文及創意思考主題", "個人化學習計劃"],
  },
  {
    className: "competition",
    icon: "C",
    title: "比賽培訓及預備",
    text: "由導師按比賽要求訂立策略，配合模擬練習及回饋，讓學生為學術比賽、展示及演說作好準備。",
    items: ["比賽策略及時間表規劃", "模擬比賽及詳細評語", "作品集及匯報技巧指導"],
  },
  {
    className: "activity",
    icon: "A",
    title: "延伸活動及體驗",
    text: "透過動手做、專題計劃和導師分享，讓學生接觸新興範疇，建立合作能力和對世界的好奇心。",
    items: ["主題工作坊及探索實驗室", "領袖訓練及團隊專題", "假期營及特色活動"],
  },
];

const steps = [
  ["1", "認識孩子", "了解孩子的興趣、學習風格、強項及需要改善的地方，訂立清晰方向。"],
  ["2", "扎實培訓", "透過針對性的課堂、練習及回饋，建立進階技巧和良好學習習慣。"],
  ["3", "接受挑戰", "透過比賽、專題、匯報及不同活動，把知識應用在真實情境之中。"],
  ["4", "持續成長", "定期檢視進度，調整目標與計劃，為下一個學習階段作好準備。"],
];

const features = [
  ["專業導師團隊", "熟悉資優及高能力學生需要的導師，懂得在支持與挑戰之間取得平衡。"],
  ["有目的的挑戰", "難度具挑戰性、同時符合年齡階段，讓孩子在安全環境中嘗試突破。"],
  ["家校合作", "與家長保持清晰溝通，讓在家學習及中心課程可以互相配合。"],
  ["成長型思維", "鼓勵學生面對錯誤、反思和再嘗試，學會欣賞自己的努力與進步。"],
];

function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="資優兒童協會首頁">
          <img className="brand-logo" src="/images/test.png" alt="資優兒童協會標誌" />
          <div>
            <div className="brand-name">資優兒童協會</div>
            <div className="brand-tagline">培訓 · 比賽 · 活動</div>
          </div>
        </a>

        <nav className="nav" aria-label="主導覽">
          <a href="/activity">活動</a>
          <a href="#pathway">學習路徑</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="shell hero">
      <div>
        <div className="eyebrow">資優兒童值得擁有成長的舞台</div>
        <h1>
          發現孩子潛能。
          <span>建立真正自信。</span>
        </h1>
        <p className="hero-copy">
          資優兒童學院透過進階培訓、有意義的比賽，以及啟發性的活動，陪伴學生一步步成長。
          課程著重培養好奇心、創造力、領導力和解難能力，讓孩子把潛能轉化為真正的能力。
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#training">查看課程安排</a>
          <a className="button button-secondary" href="#pathway">了解學習路徑</a>
        </div>
      </div>

      <aside className="hero-card" aria-label="課程重點">
        <div className="hero-card-top">
          <img className="hero-card-logo" src="/images/test.png" alt="" aria-hidden="true" />
          <div>
            <h2 className="hero-card-title">讓亮眼頭腦好好成長的地方。</h2>
            <p className="hero-card-text">
              透過專業導師、循序漸進的挑戰，以及具支持性的學習社群，
              我們幫助孩子把潛質轉化為看得見的進步。
            </p>
          </div>
        </div>
        <div className="stat-grid">
          <div className="stat">
            <strong>3</strong>
            <span>大核心服務</span>
          </div>
          <div className="stat">
            <strong>360°</strong>
            <span>全人發展</span>
          </div>
          <div className="stat">
            <strong>1:1</strong>
            <span>個別指導</span>
          </div>
        </div>
      </aside>
    </section>
  );
}

function Programs() {
  return (
    <section className="shell section" id="training">
      <div className="section-heading">
        <h2 className="section-title">為資優學生設計的專屬課程。</h2>
        <p className="section-intro">
          課程不只背誦內容，而是讓學生主動探索、討論、設計、參賽和反思，
          在實際情境中運用自己的長處，建立穩固而有方向的能力基礎。
        </p>
      </div>

      <div className="program-grid">
        {services.map((service) => (
          <article className={`program-card ${service.className}`} id={service.className === "competition" ? "competitions" : service.className === "activity" ? "activities" : undefined} key={service.title}>
            <div className="program-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul className="program-list">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pathway() {
  return (
    <section className="shell section" id="pathway">
      <div className="pathway">
        <div>
          <h2>由好奇心走到真正成果的清晰路徑。</h2>
          <p>
            每位孩子的能力組合都不一樣。我們的流程協助家長了解孩子的優勢與需要，
            配對合適的課程與機會，並在每一個階段記錄及肯定成長。
          </p>
        </div>

        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <div className="step-number">{number}</div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="feature-strip">
        {features.map(([title, text]) => (
          <div className="feature" key={title}>
            <strong>{title}</strong>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="shell cta">
      <div>
        <h2>準備好陪孩子迎接下一個挑戰？</h2>
        <p>
          歡迎聯絡資優兒童學院，了解更多有關培訓課程、比賽培訓及延伸活動的詳情，
          一起為孩子規劃最合適的成長路徑。
        </p>
      </div>
      <a className="button button-primary" href="mailto:info@example.com">聯絡我們</a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <span>© 2026 資優兒童學院（Institution For Gifted Children）。版權所有。</span>
        <span>培訓 · 比賽 · 活動　成就資優兒童的全人發展</span>
      </div>
    </footer>
  );
}

function useRevealAnimation() {
  useEffect(() => {
    const revealGroups = [
      [".hero > div", "reveal-left"],
      [".hero-card", "reveal-right"],
      [".section-heading", "reveal"],
      [".program-card", "reveal-scale"],
      [".pathway", "reveal-scale"],
      [".step", "reveal"],
      [".feature", "reveal-scale"],
      [".cta", "reveal-scale"],
      [".footer", "reveal"],
    ];

    const revealElements = [];

    revealGroups.forEach(([selector, animationClass]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.classList.add("reveal", animationClass);
        element.style.setProperty("--reveal-delay", `${Math.min(index * 90, 360)}ms`);
        revealElements.push(element);
      });
    });

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    });

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);
}

function TutorialPage() {
  usePageStyles("/styles/tutorial.css");
  useRevealAnimation();

  return (
    <div className="page">
      <Header />
      <main id="top">
        <Hero />
        <Programs />
        <Pathway />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default TutorialPage;
