/* =========================================================
   Al-Nahran Trading Co. / Life Time Watches — main.js
   i18n + RTL, nav behavior, scroll reveals, hero parallax,
   locations data, wholesale form.
   ========================================================= */

// TODO: replace with the real business WhatsApp number (digits only, country code, no +).
const WHATSAPP_NUMBER = "966000000000";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const STORAGE_KEY = "alnahran.locale";

/* ---------------- i18n dictionaries ---------------- */
const DICT = {
  en: {
    brand: { parent: "Al-Nahran Trading Co.", retail: "Life Time Watches" },
    nav: {
      home: "Home", about: "About", watches: "Life Time Watches",
      locations: "Locations", wholesale: "Wholesale", contact: "Contact",
    },
    language: { toggleTo: "العربية", label: "Language" },
    actions: { whatsapp: "WhatsApp" },
    hero: {
      eyebrow: "Al-Nahran Trading Co. · Life Time Watches",
      headline: "A Timepiece for Every Moment.",
      sub: "From heritage complications to everyday companions — a Saudi house of watch expertise, curating trusted brands, authentic pieces, and lifetime service across wholesale and retail.",
      ctaPrimary: "Explore Life Time Watches",
      ctaSecondary: "Find a Branch",
      whatsappPrefix: "Or",
      whatsapp: "chat with us on WhatsApp",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About Al-Nahran Trading Co.",
      heading: "A Saudi company built on watch expertise.",
      lead: "Al-Nahran Trading Co. is the parent company behind Life Time Watches, operating across the watch industry through both wholesale and retail. Our range spans traditional, fashion, digital, and electronic timepieces — brought to customers and partners across Saudi Arabia.",
      card1Title: "Wholesale & Retail",
      card1Body: "Serving individual customers and business partners alike, side by side.",
      card2Title: "A Wide Range of Watches",
      card2Body: "Traditional, fashion, digital, and electronic timepieces under one house.",
      card3Title: "Presence Across Saudi Arabia",
      card3Body: "A growing footprint of branches reaching customers across the Kingdom.",
      card4Title: "Two Brands, One Standard",
      card4Body: "Al-Nahran Trading Co. and Life Time Watches, held to the same standard of trust.",
    },
    locations: {
      eyebrow: "Our Presence",
      count: "8 Locations Across Saudi Arabia",
      sub: "From the Red Sea coast to the southern highlands — Life Time Watches branches are growing across the Kingdom.",
      branchesLabel: "branches",
      branchLabel: "branch",
      addressPh: "[Address to be added]",
      phonePh: "[Phone to be added]",
    },
    watches: {
      eyebrow: "Life Time Watches",
      heading: "A collection for every kind of moment.",
      sub: "Six categories, one retail promise — genuine pieces, fair pricing, and lifetime service.",
      classicTitle: "Classic", classicBody: "Traditional analog timepieces built to last generations.",
      fashionTitle: "Fashion", fashionBody: "Statement designs that follow the season's style.",
      digitalTitle: "Digital", digitalBody: "Modern digital displays for everyday clarity.",
      electronicTitle: "Electronic", electronicBody: "Smart features paired with dependable build quality.",
      everydayTitle: "Everyday", everydayBody: "Reliable, comfortable pieces for daily wear.",
      premiumTitle: "Premium", premiumBody: "Refined pieces for those who notice the details.",
    },
    wholesale: {
      eyebrow: "For Business",
      heading: "Built for Business.",
      lead: "Al-Nahran Trading Co. serves wholesale customers and business partners across Saudi Arabia, supplying a wide range of watch products with the reliability an established trading house is built on.",
      point1: "Wholesale supply for retailers across the Kingdom",
      point2: "A wide catalog spanning multiple watch categories",
      point3: "A trading company with a growing branch network",
      formName: "Name", formCompany: "Company Name", formCity: "City / Country",
      formPhone: "Phone Number", formType: "Business Type",
      typeSelect: "Select…", typeRetailer: "Retailer", typeDistributor: "Distributor",
      typeBrand: "Watch Brand", typeOther: "Other",
      formMessage: "Message",
      formSubmit: "Discuss a Wholesale Partnership",
      formNote: "We'll get back to you shortly after reviewing your inquiry.",
      formSuccess: "Thank you — your inquiry has been noted. We'll be in touch soon.",
    },
    contact: {
      eyebrow: "Get in Touch",
      heading: "Find Your Time.",
      sub: "Whether you're looking for a branch, a piece, or a partnership — we're one message away.",
      wholesaleCta: "Wholesale Inquiry",
      phoneLabel: "Phone", phonePlaceholder: "[Phone to be added]",
      emailLabel: "Email", emailPlaceholder: "[Email to be added]",
      hoursLabel: "Hours", hoursPlaceholder: "[Hours to be added]",
    },
    footer: {
      blurb: "Parent to Life Time Watches — a Saudi house of watch expertise, wholesale and retail.",
      navHeading: "Navigate",
      locationsHeading: "Locations",
      contactHeading: "Contact",
      khamisCount: "Khamis Mushait (×3)",
      rights: "© 2026 Al-Nahran Trading Co. All rights reserved.",
    },
    cities: {
      jeddah: "Jeddah", dammam: "Dammam", jizan: "Jizan",
      najran: "Najran", abqaiq: "Abqaiq", khamis: "Khamis Mushait",
    },
  },
  ar: {
    brand: { parent: "شركة النهران التجارية", retail: "لايف تايم للساعات" },
    nav: {
      home: "الرئيسية", about: "من نحن", watches: "لايف تايم للساعات",
      locations: "الفروع", wholesale: "الجملة", contact: "تواصل",
    },
    language: { toggleTo: "English", label: "اللغة" },
    actions: { whatsapp: "واتساب" },
    hero: {
      eyebrow: "شركة النهران التجارية · لايف تايم للساعات",
      headline: "ساعة لكل لحظة.",
      sub: "من التعقيدات العريقة إلى رفيق اليوم — بيت سعودي متخصص بالساعات، يجمع أشهر الماركات الموثوقة، بضمان الأصالة وخدمة تدوم مدى الحياة، جملة وتجزئة.",
      ctaPrimary: "اكتشف لايف تايم للساعات",
      ctaSecondary: "أقرب فرع",
      whatsappPrefix: "أو",
      whatsapp: "تحدث معنا عبر واتساب",
      scroll: "اسحب للأسفل",
    },
    about: {
      eyebrow: "عن شركة النهران التجارية",
      heading: "شركة سعودية قائمة على الخبرة في عالم الساعات.",
      lead: "شركة النهران التجارية هي الشركة الأم لـ لايف تايم للساعات، وتعمل في قطاع الساعات عبر الجملة والتجزئة معًا. تشمل مجموعتنا الساعات التقليدية والعصرية والرقمية والإلكترونية، لعملائنا وشركائنا في أنحاء المملكة.",
      card1Title: "جملة وتجزئة",
      card1Body: "نخدم الأفراد والشركاء التجاريين على حد سواء.",
      card2Title: "تشكيلة واسعة من الساعات",
      card2Body: "ساعات تقليدية وعصرية ورقمية وإلكترونية تحت مظلة واحدة.",
      card3Title: "حضور في أنحاء المملكة",
      card3Body: "شبكة فروع متنامية تصل إلى العملاء في مختلف المناطق.",
      card4Title: "علامتان، معيار واحد",
      card4Body: "شركة النهران التجارية ولايف تايم للساعات، بنفس معايير الثقة.",
    },
    locations: {
      eyebrow: "حضورنا",
      count: "8 فروع في أنحاء المملكة",
      sub: "من ساحل البحر الأحمر إلى المرتفعات الجنوبية — فروع لايف تايم للساعات في نمو مستمر داخل المملكة.",
      branchesLabel: "فروع",
      branchLabel: "فرع",
      addressPh: "[سيُضاف العنوان]",
      phonePh: "[سيُضاف رقم الهاتف]",
    },
    watches: {
      eyebrow: "لايف تايم للساعات",
      heading: "تشكيلة تناسب كل لحظة.",
      sub: "ست فئات، ووعد واحد في البيع بالتجزئة — قطع أصلية، وأسعار عادلة، وخدمة مدى الحياة.",
      classicTitle: "كلاسيكية", classicBody: "ساعات تقليدية عقارب مصممة لتدوم أجيالًا.",
      fashionTitle: "عصرية", fashionBody: "تصاميم مميزة تواكب أسلوب الموسم.",
      digitalTitle: "رقمية", digitalBody: "شاشات رقمية عصرية لوضوح يومي.",
      electronicTitle: "إلكترونية", electronicBody: "ميزات ذكية مع جودة تصنيع موثوقة.",
      everydayTitle: "يومية", everydayBody: "قطع مريحة وموثوقة للاستخدام اليومي.",
      premiumTitle: "فاخرة", premiumBody: "قطع راقية لمن يهتم بالتفاصيل.",
    },
    wholesale: {
      eyebrow: "لقطاع الأعمال",
      heading: "مبنية لخدمة الأعمال.",
      lead: "تخدم شركة النهران التجارية عملاء الجملة والشركاء التجاريين في أنحاء المملكة، وتوفر تشكيلة واسعة من منتجات الساعات بموثوقية شركة تجارية راسخة.",
      point1: "توريد بالجملة لتجار التجزئة في أنحاء المملكة",
      point2: "كتالوج واسع يشمل عدة فئات من الساعات",
      point3: "شركة تجارية بشبكة فروع متنامية",
      formName: "الاسم", formCompany: "اسم الشركة", formCity: "المدينة / الدولة",
      formPhone: "رقم الهاتف", formType: "نوع النشاط",
      typeSelect: "اختر…", typeRetailer: "تاجر تجزئة", typeDistributor: "موزّع",
      typeBrand: "ماركة ساعات", typeOther: "أخرى",
      formMessage: "الرسالة",
      formSubmit: "ناقش شراكة بالجملة",
      formNote: "سنعاود التواصل معك بعد مراجعة طلبك.",
      formSuccess: "شكرًا لك — تم تسجيل طلبك، وسنتواصل معك قريبًا.",
    },
    contact: {
      eyebrow: "تواصل معنا",
      heading: "اعثر على وقتك.",
      sub: "سواء كنت تبحث عن فرع، أو قطعة، أو شراكة — نحن على بعد رسالة واحدة.",
      wholesaleCta: "استفسار جملة",
      phoneLabel: "الهاتف", phonePlaceholder: "[سيُضاف رقم الهاتف]",
      emailLabel: "البريد الإلكتروني", emailPlaceholder: "[سيُضاف البريد الإلكتروني]",
      hoursLabel: "أوقات العمل", hoursPlaceholder: "[ستُضاف أوقات العمل]",
    },
    footer: {
      blurb: "الشركة الأم لـ لايف تايم للساعات — بيت سعودي متخصص بالساعات، جملة وتجزئة.",
      navHeading: "التصفح",
      locationsHeading: "الفروع",
      contactHeading: "تواصل",
      khamisCount: "خميس مشيط (×3)",
      rights: "© 2026 شركة النهران التجارية. جميع الحقوق محفوظة.",
    },
    cities: {
      jeddah: "جدة", dammam: "الدمام", jizan: "جازان",
      najran: "نجران", abqaiq: "بقيق", khamis: "خميس مشيط",
    },
  },
};

/* ---------------- Locations data ---------------- */
// TODO: replace all address/phone placeholders with real branch details.
const CITIES = [
  { key: "jeddah", branches: 1 },
  { key: "dammam", branches: 1 },
  { key: "jizan", branches: 1 },
  { key: "najran", branches: 1 },
  { key: "abqaiq", branches: 1 },
  { key: "khamis", branches: 3 },
];

/* ---------------- i18n engine ---------------- */
function resolve(dict, path) {
  return path.split(".").reduce((node, key) => (node && node[key] !== undefined ? node[key] : null), dict) ?? path;
}

function getLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") return stored;
  } catch (e) { /* ignore */ }
  return "en";
}

function setLocale(locale) {
  try { localStorage.setItem(STORAGE_KEY, locale); } catch (e) { /* ignore */ }
  document.documentElement.setAttribute("lang", locale);
  document.documentElement.setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
  applyTranslations(locale);
  renderCities(locale);
}

function applyTranslations(locale) {
  const dict = DICT[locale];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = resolve(dict, el.getAttribute("data-i18n"));
    if (typeof value === "string") el.textContent = value;
  });
}

function toggleLocale() {
  setLocale(getLocale() === "en" ? "ar" : "en");
}

/* ---------------- Render locations ---------------- */
function renderCities(locale) {
  const dict = DICT[locale];
  const grid = document.getElementById("cityGrid");
  if (!grid) return;
  grid.innerHTML = "";
  CITIES.forEach((city) => {
    const card = document.createElement("div");
    card.className = "city-card reveal";
    const branchWord = city.branches > 1 ? dict.locations.branchesLabel : dict.locations.branchLabel;
    let branchesHtml = "";
    for (let i = 0; i < city.branches; i++) {
      branchesHtml += `
        <div class="branch-item">
          <strong>${dict.cities[city.key]} — ${city.branches > 1 ? (i + 1) : ""}</strong><br>
          <span class="ph">${dict.locations.addressPh}</span><br>
          <span class="ph">${dict.locations.phonePh}</span>
        </div>`;
    }
    card.innerHTML = `
      <div class="pin">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
      </div>
      <h3>${dict.cities[city.key]}</h3>
      <div class="branch-count">${city.branches} ${branchWord}</div>
      <div class="chevron-indicator">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="expand-panel">${branchesHtml}</div>
    `;
    card.addEventListener("click", () => card.classList.toggle("expanded"));
    grid.appendChild(card);
  });
  observeReveals();
  setupCityCardSpotlight();
}

/* ---------------- Scroll reveal ---------------- */
let revealObserver;
function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.in)");
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
  }
  items.forEach((el) => revealObserver.observe(el));
}

/* ---------------- Nav + mobile menu ---------------- */
function setupNav() {
  const nav = document.getElementById("siteNav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");
  const open = () => { mobileMenu.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { mobileMenu.classList.remove("open"); document.body.style.overflow = ""; };
  menuToggle.addEventListener("click", open);
  menuClose.addEventListener("click", close);
  mobileMenu.querySelectorAll(".mm-link").forEach((a) => a.addEventListener("click", close));
}

/* ---------------- Hero parallax + 3D cursor tilt ---------------- */
let heroScrollT = 0, heroScrollS = 1, heroScrollO = 1;
let heroTiltX = 0, heroTiltY = 0;

function applyHeroWatchTransform() {
  const stage = document.getElementById("watchStage");
  if (!stage) return;
  stage.style.transform =
    `translateY(${heroScrollT}px) scale(${heroScrollS}) ` +
    `perspective(1200px) rotateX(${heroTiltX}deg) rotateY(${heroTiltY}deg)`;
  stage.style.opacity = String(heroScrollO);
}

function setupHeroParallax() {
  const stage = document.getElementById("watchStage");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!stage || reduce) return;
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        heroScrollT = (y / 600) * 100;
        heroScrollS = 1 + (y / 600) * 0.06;
        heroScrollO = Math.max(1 - (y / 600) * 0.5, 0.5);
        applyHeroWatchTransform();
        ticking = false;
      });
    },
    { passive: true }
  );
}

function setupHeroTilt() {
  const heroSection = document.getElementById("top");
  const stage = document.getElementById("watchStage");
  if (!heroSection || !stage || !tiltEnabled) return;
  const maxHeroTiltX = 10;
  const maxHeroTiltY = 16;
  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    heroTiltX = (0.5 - py) * maxHeroTiltX;
    heroTiltY = (px - 0.5) * maxHeroTiltY;
    applyHeroWatchTransform();
  });
  heroSection.addEventListener("mouseleave", () => {
    heroTiltX = 0;
    heroTiltY = 0;
    applyHeroWatchTransform();
  });
}

/* ---------------- Watch face tick marks (generated once) ---------------- */
function buildWatchTicks() {
  const ring = document.getElementById("ringOuter");
  const face = document.getElementById("watchFace");
  if (ring && !ring.dataset.built) {
    for (let i = 0; i < 60; i++) {
      const tick = document.createElement("span");
      tick.className = "tick" + (i % 5 === 0 ? " major" : "");
      tick.style.transform = `rotate(${i * 6}deg)`;
      ring.appendChild(tick);
    }
    ring.dataset.built = "1";
  }
  if (face && !face.dataset.built) {
    for (let i = 0; i < 12; i++) {
      const tick = document.createElement("span");
      tick.className = "hour-tick";
      tick.style.transform = `rotate(${i * 30}deg)`;
      face.insertBefore(tick, face.firstChild);
    }
    face.dataset.built = "1";
  }
}

/* ---------------- Live second hand ---------------- */
function setupSecondHand() {
  const secHand = document.querySelector(".hand-sec");
  if (!secHand) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return; // respect reduced-motion: leave it static
  function tick() {
    const ms = Date.now() % 60000;
    const angle = (ms / 1000) * 6; // 360deg / 60s = 6deg per second, smooth sub-second sweep
    secHand.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------------- Card tilt + spotlight (desktop pointer only) ---------------- */
const canHoverTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reduceMotionTilt = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const tiltEnabled = canHoverTilt && !reduceMotionTilt;

// City cards are rebuilt every time the language toggles, so this runs after each render.
function setupCityCardSpotlight() {
  if (!tiltEnabled) return;
  document.querySelectorAll(".city-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
  });
}

// Watch category cards are static, so this only needs to run once.
function setupWatchCardTilt() {
  if (!tiltEnabled) return;
  const maxTilt = 12;
  document.querySelectorAll(".watch-card").forEach((card) => {
    card.addEventListener("mouseenter", () => card.classList.add("tilting"));
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      const py = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
      const rx = (0.5 - py) * maxTilt;
      const ry = (px - 0.5) * maxTilt;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("tilting");
      card.style.transform = "";
    });
  });
}

/* ---------------- Global cursor glow (single dot, no trail) ---------------- */
function setupCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow || !tiltEnabled) return;
  let shown = false;
  let lastSparkle = 0;
  document.addEventListener(
    "mousemove",
    (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      if (!shown) {
        glow.classList.add("active");
        shown = true;
      }
      const now = performance.now();
      if (now - lastSparkle > 60) {
        lastSparkle = now;
        spawnSparkle(e.clientX, e.clientY);
      }
    },
    { passive: true }
  );
  document.addEventListener("mouseleave", () => glow.classList.remove("active"));
}

function spawnSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  const jitterX = (Math.random() - 0.5) * 14;
  const jitterY = (Math.random() - 0.5) * 14;
  const size = 4 + Math.random() * 5;
  sparkle.style.left = `${x + jitterX}px`;
  sparkle.style.top = `${y + jitterY}px`;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  document.body.appendChild(sparkle);
  sparkle.addEventListener("animationend", () => sparkle.remove());
}

/* ---------------- Hero video: respect reduced motion ---------------- */
function setupHeroVideo() {
  const video = document.getElementById("heroWatchVideo");
  if (!video) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    video.removeAttribute("autoplay");
    video.pause();
    video.currentTime = 0;
  }
}

/* ---------------- WhatsApp links ---------------- */
function wireWhatsAppLinks() {
  ["waNavBtn", "waMobileBtn", "waHeroLink", "waContactLink", "waFooterLink", "waFab"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", WHATSAPP_URL);
  });
}

/* ---------------- Wholesale form ---------------- */
function setupWholesaleForm() {
  const form = document.getElementById("wholesaleForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // TODO: wire this up to a real backend or form service (e.g. Formspree, Google Sheets via Apps Script).
    const locale = getLocale();
    const note = form.querySelector(".form-note");
    if (note) note.textContent = DICT[locale].wholesale.formSuccess;
    form.querySelectorAll("input, select, textarea").forEach((f) => (f.disabled = true));
    form.querySelector(".form-submit").setAttribute("disabled", "true");
  });
}

/* ---------------- Init ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  buildWatchTicks();
  wireWhatsAppLinks();
  setupNav();
  setupHeroParallax();
  setupHeroTilt();
  setupHeroVideo();
  setupWholesaleForm();
  setupSecondHand();
  setupWatchCardTilt();
  setupCursorGlow();

  document.getElementById("langSwitch")?.addEventListener("click", toggleLocale);
  document.getElementById("langSwitchMobile")?.addEventListener("click", toggleLocale);
  document.getElementById("langSwitchFooter")?.addEventListener("click", toggleLocale);

  setLocale(getLocale());
  observeReveals();
});
