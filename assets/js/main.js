// ===== CURSOR =====
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0, cursorActive = false;

if (cursor && cursorRing) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (!cursorActive) {
      cursorActive = true;
      document.body.classList.add('has-mouse');
      rx = mx; ry = my;
    }
  });
  (function tick() {
    if (cursorActive) {
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
      rx += (mx - rx) * .12;
      ry += (my - ry) * .12;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top = ry + 'px';
    }
    requestAnimationFrame(tick);
  })();
}

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ===== FLOATING CTA =====
const floatingCta = document.getElementById('floatingCta');
if (floatingCta) {
  window.addEventListener('scroll', () => {
    floatingCta.classList.toggle('show', window.scrollY > window.innerHeight * 0.8);
  }, { passive: true });
}

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ===== SMOOTH SCROLL (ancres locales) =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== FAQ (délégation) =====
document.addEventListener('click', e => {
  const q = e.target.closest('.faq-q');
  if (!q) return;
  const item = q.closest('.faq-item');
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
});

// ===== FORM FEEDBACK =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  if (!btn) return;
  const original = btn.textContent;
  btn.textContent = '✓ Message envoyé !';
  btn.style.background = '#1a3a2e';
  btn.style.color = '#fff';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.style.color = '';
  }, 3000);
}
window.handleSubmit = handleSubmit;

// ===== CURSOR =====
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0, cursorActive = false;

if (cursor && cursorRing) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (!cursorActive) {
      cursorActive = true;
      document.body.classList.add('has-mouse');
      rx = mx; ry = my;
    }
  });
  (function animCursor() {
    if (cursorActive && cursor && cursorRing) {
      cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
      rx += (mx - rx) * .12; ry += (my - ry) * .12;
      cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px';
    }
    requestAnimationFrame(animCursor);
  })();
}

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== FLOATING CTA =====
const floatingCta = document.getElementById('floatingCta');
if (floatingCta) {
  window.addEventListener('scroll', () => {
    floatingCta.classList.toggle('show', window.scrollY > window.innerHeight * 0.8);
  });
}

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ===== SMOOTH SCROLL (ancres sur la même page) =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ===== FAQ ===== (délégation d'événements : fonctionne sur toutes les pages sans onclick)
document.addEventListener('click', e => {
  const q = e.target.closest('.faq-q');
  if (!q) return;
  const item = q.closest('.faq-item');
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
});

// ===== FORM =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  if (btn) {
    btn.textContent = '✓ Message envoyé !';
    btn.style.background = '#1a3a2e';
    btn.style.color = 'white';
    setTimeout(() => {
      btn.textContent = 'Envoyer le message →';
      btn.style.background = '';
      btn.style.color = '';
    }, 3000);
  }
}
window.handleSubmit = handleSubmit;
