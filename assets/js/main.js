// ===== CURSOR =====
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0, cursorActive = false;

if (cursor && cursorRing) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    if (!cursorActive) {
      cursorActive = true;
      document.body.classList.add('has-mouse');
      rx = mx;
      ry = my;
    }
  });
  (function animCursor() {
    if (cursorActive) {
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
      rx += (mx - rx) * .12;
      ry += (my - ry) * .12;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top = ry + 'px';
    }
    requestAnimationFrame(animCursor);
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

function closeMobileNav() {
  if (!mobileNav || !hamburger) return;
  mobileNav.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // Ferme au clic à l'extérieur
  document.addEventListener('click', e => {
    if (!mobileNav.classList.contains('open')) return;
    if (e.target.closest('#mobileNav') || e.target.closest('#hamburger')) return;
    closeMobileNav();
  });

  // Ferme avec la touche Échap
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
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

// ===== FORM SUBMIT VIA FORMSPREE (pas de redirection, message sur la page) =====
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.btn-submit');
  const successEl = form.querySelector('#form-success-message');
  if (!form || !btn) return;

  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Envoi en cours...';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' }
  })
    .then(function (res) {
      if (res.ok) {
        form.reset();
        if (successEl) {
          successEl.style.display = 'block';
          successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        btn.textContent = '✓ Envoyé !';
        btn.style.background = '#1a3a2e';
        btn.style.color = '#fff';
      } else {
        throw new Error('Erreur envoi');
      }
    })
    .catch(function () {
      btn.textContent = 'Erreur — réessayez';
      btn.style.background = '#8b2a2a';
      btn.style.color = '#fff';
      setTimeout(function () {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
      }, 3000);
      return;
    });

  setTimeout(function () {
    btn.textContent = originalText;
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
  }, 4000);
}
window.handleSubmit = handleSubmit;

