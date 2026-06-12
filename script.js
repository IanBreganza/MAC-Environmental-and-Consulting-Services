/* ================================================================
   MC ENVIRONMENTAL — behaviour
   Populates the DOM from window.SITE_CONTENT, then wires up:
     · Mobile nav toggle
     · Smooth-scroll CTA links
     · Portfolio lightbox
     · Scroll-reveal (Intersection Observer)
     · Contact mailto form
   No external libraries.
   ================================================================ */

/* ── INLINE SVG ICONS (service cards) ─────────────────────────── */
const ICONS = {
  tree: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M12 22v-6"/>
    <path d="M5 16h14l-3-5h2L12 3 6 11h2l-3 5z"/>
  </svg>`,

  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8
      0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>`,

  microscope: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M6 18h8"/>
    <path d="M3 21h18"/>
    <path d="M14 21v-4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4"/>
    <path d="M10 7V5"/>
    <rect x="8" y="2" width="4" height="5" rx="1"/>
    <path d="M10 7a5 5 0 0 1 5 5"/>
    <path d="M10 12h.01"/>
  </svg>`,

  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6
      a2 2 0 0 1 2-2h2"/>
    <path d="M9 12h6M9 16h4"/>
  </svg>`,

  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10
      A15.3 15.3 0 0 1 8 12 15.3 15.3 0 0 1 12 2z"/>
  </svg>`,

  map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
    <line x1="8" y1="2" x2="8" y2="18"/>
    <line x1="16" y1="6" x2="16" y2="22"/>
  </svg>`,

  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>`,
};

/* ── CONTACT DETAIL ICONS ──────────────────────────────────────── */
const DETAIL_ICONS = {
  address: `<svg class="contact__detail-icon" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
    stroke-linejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>`,

  phone: `<svg class="contact__detail-icon" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
    stroke-linejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
      A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.51
      A2 2 0 0 1 3.62 1.33h3a2 2 0 0 1 2 1.72
      c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9
      a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45
      c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>`,

  email: `<svg class="contact__detail-icon" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
    stroke-linejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4
      c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`,
};

/* ── HELPERS ───────────────────────────────────────────────────── */

/** Safely encode a string for use in innerHTML. */
function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/**
 * Attempt to load an image and, if successful, apply it as the
 * background-image of the element with the given id.
 * Falls back silently to the CSS placeholder gradient on failure.
 */
function applyImageBg(id, path) {
  if (!path) return;
  const el = document.getElementById(id);
  if (!el) return;
  const img = new Image();
  img.onload = () => {
    el.style.backgroundImage    = `url('${path}')`;
    el.style.backgroundSize     = 'cover';
    el.style.backgroundPosition = 'center';
  };
  img.src = path;
}

/* ── POPULATE DOM FROM CONTENT.JS ──────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const C = window.SITE_CONTENT;
  if (!C) {
    console.error('[MC Environmental] SITE_CONTENT not found. Is content.js loaded?');
    return;
  }

  /* ── NAV ─────────────────────────────────────────────────── */
  document.getElementById('nav-company-name').textContent = C.nav.companyName;

  const navMenu = document.getElementById('nav-menu');
  C.nav.links.forEach(link => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href        = link.href;
    a.textContent = link.label;
    li.appendChild(a);
    navMenu.appendChild(li);
  });

  /* ── HERO ────────────────────────────────────────────────── */
  document.getElementById('hero-headline').textContent    = C.hero.headline;
  document.getElementById('hero-subheadline').textContent = C.hero.subheadline;

  const ctaPrimary = document.getElementById('hero-cta-primary');
  ctaPrimary.textContent = C.hero.ctaPrimary.label;
  ctaPrimary.href        = C.hero.ctaPrimary.href;

  const ctaSecondary = document.getElementById('hero-cta-secondary');
  ctaSecondary.textContent = C.hero.ctaSecondary.label;
  ctaSecondary.href        = C.hero.ctaSecondary.href;

  applyImageBg('hero-image', C.hero.imagePath);

  /* ── SERVICES ────────────────────────────────────────────── */
  const servicesGrid = document.getElementById('services-grid');
  C.services.forEach((svc, i) => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.style.setProperty('--i', i);
    card.innerHTML = `
      <div class="service-card__icon">${ICONS[svc.icon] || ICONS.leaf}</div>
      <h3 class="service-card__title">${esc(svc.title)}</h3>
      <p  class="service-card__desc">${esc(svc.description)}</p>
    `;
    servicesGrid.appendChild(card);
  });

  /* ── ABOUT ───────────────────────────────────────────────── */
  document.getElementById('about-heading').textContent = C.about.heading;

  const aboutBody = document.getElementById('about-body');
  C.about.body.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    aboutBody.appendChild(p);
  });

  document.getElementById('about-pull-quote').textContent = C.about.pullQuote;

  const statsContainer = document.getElementById('about-stats');
  C.about.stats.forEach(stat => {
    const div = document.createElement('div');
    div.className    = 'stat-item';
    div.setAttribute('role', 'listitem');
    div.innerHTML = `
      <div class="stat-item__value">${esc(stat.value)}</div>
      <div class="stat-item__label">${esc(stat.label)}</div>
    `;
    statsContainer.appendChild(div);
  });

  applyImageBg('about-image', C.about.imagePath);

  /* ── PORTFOLIO ───────────────────────────────────────────── */
  const grid = document.getElementById('portfolio-grid');
  C.portfolio.forEach((item, i) => {
    const imgId = `pf-img-${i}`;

    const card = document.createElement('div');
    card.className = 'portfolio__card reveal';
    card.style.setProperty('--i', i);
    card.setAttribute('tabindex',   '0');
    card.setAttribute('role',       'button');
    card.setAttribute('aria-label', `View project: ${item.title}`);
    card.dataset.index = i;

    card.innerHTML = `
      <div class="portfolio__card-img-wrap">
        <img class="portfolio__card-img" id="${imgId}"
             alt="${esc(item.imageAlt)}" loading="lazy" />
      </div>
      <div class="herbarium-tag">${esc(item.speciesLabel)}</div>
      <div class="portfolio__card-overlay" aria-hidden="true">
        <p class="portfolio__card-title">${esc(item.title)}</p>
      </div>
    `;

    /* Set src after innerHTML so the element exists for onerror */
    const imgEl = card.querySelector('.portfolio__card-img');
    if (imgEl) {
      imgEl.src     = item.imagePath;
      /* If the file doesn't exist yet, hide broken-image chrome;
         the wrapper's placeholder gradient shows instead. */
      imgEl.onerror = () => { imgEl.style.visibility = 'hidden'; };
    }

    card.addEventListener('click',   () => openLightbox(i));
    card.addEventListener('keydown', e  => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(i);
      }
    });

    grid.appendChild(card);
  });

  /* ── TESTIMONIALS ────────────────────────────────────────── */
  const track = document.getElementById('testimonials-track');
  C.testimonials.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card reveal';
    card.style.setProperty('--i', i);
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <p class="testimonial-card__quote">${esc(t.quote)}</p>
      <p class="testimonial-card__name">${esc(t.name)}</p>
      <p class="testimonial-card__org">${esc(t.org)}</p>
    `;
    track.appendChild(card);
  });

  /* ── CONTACT ─────────────────────────────────────────────── */
  document.getElementById('contact-heading').textContent = C.contact.heading;
  document.getElementById('contact-intro').textContent   = C.contact.intro;

  /* Labels */
  document.getElementById('label-name').textContent    = C.contact.fields.name;
  document.getElementById('label-email').textContent   = C.contact.fields.email;
  document.getElementById('label-subject').textContent = C.contact.fields.subject;
  document.getElementById('label-message').textContent = C.contact.fields.message;
  document.getElementById('form-submit').textContent   = C.contact.fields.submit;

  /* Placeholders */
  document.getElementById('form-name').placeholder    = C.contact.fields.name;
  document.getElementById('form-email').placeholder   = C.contact.fields.email;
  document.getElementById('form-subject').placeholder = C.contact.formSubjectDefault;
  document.getElementById('form-message').placeholder = C.contact.fields.message;

  /* Detail items */
  const detailList = document.getElementById('contact-details');
  [
    { key: 'address', text: C.contact.address },
    { key: 'phone',   text: C.contact.phone   },
    { key: 'email',   text: C.contact.email   },
  ].forEach(d => {
    const li = document.createElement('li');
    li.className = 'contact__detail-item';
    li.innerHTML = `${DETAIL_ICONS[d.key]}<span>${esc(d.text)}</span>`;
    detailList.appendChild(li);
  });

  /* ── FOOTER ──────────────────────────────────────────────── */
  document.getElementById('footer-company-name').textContent = C.footer.companyName;
  document.getElementById('footer-tagline').textContent      = C.footer.tagline;
  document.getElementById('footer-copyright').textContent    = C.footer.copyright;

  const footerList = document.getElementById('footer-nav-list');
  C.footer.links.forEach(link => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href        = link.href;
    a.textContent = link.label;
    li.appendChild(a);
    footerList.appendChild(li);
  });

  /* ── MOBILE NAV TOGGLE ───────────────────────────────────── */
  const hamburger = document.getElementById('nav-hamburger');
  const menu      = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', open);
    hamburger.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });

  function closeNav() {
    menu.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
  }

  /* Close on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeNav();
  });

  /* ── CONTACT MAILTO FORM ─────────────────────────────────── */
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name    = document.getElementById('form-name').value.trim();
    const email   = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim()
                    || C.contact.formSubjectDefault;
    const message = document.getElementById('form-message').value.trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n');

    const mailto = [
      `mailto:${encodeURIComponent(C.contact.email)}`,
      `?subject=${encodeURIComponent(subject)}`,
      `&body=${encodeURIComponent(body)}`,
    ].join('');

    window.location.href = mailto;
  });

  /* ── SCROLL REVEAL ───────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.10 }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── TESTIMONIALS AUTO-SCROLLER ──────────────────────────── */
  initTestimonialsScroller();
});

/* ── TESTIMONIALS AUTO-SCROLLER ───────────────────────────────────
   Slowly slides the row forward, pauses at the end, then slides
   back, pauses at the start, and repeats indefinitely.
   Pauses whenever the user hovers, focuses, or touches the track.
   ──────────────────────────────────────────────────────────────── */
function initTestimonialsScroller() {
  const track = document.getElementById('testimonials-track');
  if (!track) return;

  const SPEED        = 0.6;   // px per animation frame  (~36 px/s at 60 fps)
  const END_PAUSE    = 110;   // frames to hold at each end before reversing (~1.8 s)

  let direction = 1;          //  1 = forward,  -1 = backward
  let paused    = false;
  let countdown = 0;          // pause-at-end countdown

  function tick() {
    if (!paused) {
      if (countdown > 0) {
        countdown--;
      } else {
        const max = track.scrollWidth - track.clientWidth;

        if (max > 0) {
          track.scrollLeft += direction * SPEED;

          if (direction === 1 && track.scrollLeft >= max - 1) {
            track.scrollLeft = max;
            direction        = -1;
            countdown        = END_PAUSE;
          } else if (direction === -1 && track.scrollLeft <= 1) {
            track.scrollLeft = 0;
            direction        = 1;
            countdown        = END_PAUSE;
          }
        }
      }
    }
    requestAnimationFrame(tick);
  }

  /* Pause while the user interacts with the track */
  track.addEventListener('mouseenter', () => { paused = true; });
  track.addEventListener('mouseleave', () => { paused = false; });
  track.addEventListener('focusin',    () => { paused = true; });
  track.addEventListener('focusout',   () => { paused = false; });
  track.addEventListener('touchstart', () => { paused = true; },  { passive: true });
  track.addEventListener('touchend',   () => {
    /* Resume after a short settle time so the user finishes swiping */
    setTimeout(() => { paused = false; }, 2000);
  }, { passive: true });

  requestAnimationFrame(tick);
}

/* ── LIGHTBOX ──────────────────────────────────────────────────── */

let _lastFocused = null;

function openLightbox(idx) {
  const C    = window.SITE_CONTENT;
  const item = C.portfolio[idx];

  document.getElementById('lightbox-title').textContent   = item.title;
  document.getElementById('lightbox-desc').textContent    = item.description;
  document.getElementById('lightbox-species').textContent = item.speciesLabel;

  applyImageBg('lightbox-image-box', item.imagePath);

  const lb = document.getElementById('lightbox');
  lb.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  _lastFocused = document.activeElement;
  document.getElementById('lightbox-close').focus();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.setAttribute('hidden', '');
  document.body.style.overflow = '';
  if (_lastFocused) _lastFocused.focus();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);

  document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (e.key === 'Escape' && !lb.hasAttribute('hidden')) {
      closeLightbox();
    }
    /* Focus trap inside lightbox */
    if (e.key === 'Tab' && !lb.hasAttribute('hidden')) {
      const focusable = lb.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
});
