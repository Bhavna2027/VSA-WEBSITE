/* =============================================
   VSA COACHING INSTITUTE — COMPLETE SCRIPT
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- 1. NAVBAR: scroll shadow + hamburger ---- */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });

    // Close nav when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }

  /* ---- 2. SCROLL ANIMATIONS (Intersection Observer) ---- */
  const animatedEls = document.querySelectorAll(
    '.feature-card, .card, .testimonial-card, .cta-content, .hero-stats'
  );

  animatedEls.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.children];
        const delay    = siblings.indexOf(entry.target) * 80;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedEls.forEach(el => observer.observe(el));

  /* ---- 3. COUNTER ANIMATION ---- */
  const counters = document.querySelectorAll('.stat-num');

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => countObserver.observe(counter));

  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step     = target / (duration / 16);
    let current    = 0;

    el.classList.add('counting');
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        el.classList.remove('counting');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 16);
  }

  /* ---- 4. TESTIMONIAL SLIDER ---- */
  const track = document.getElementById('testimonial-track');
  const dots  = document.querySelectorAll('.dot');
  let current = 0;
  let autoPlay;

  function goToSlide(index) {
    current = index;
    track.style.transform = `translateX(-${100 * index}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.index, 10));
      resetAutoPlay();
    });
  });

  function startAutoPlay() {
    autoPlay = setInterval(() => {
      goToSlide((current + 1) % dots.length);
    }, 4500);
  }

  function resetAutoPlay() {
    clearInterval(autoPlay);
    startAutoPlay();
  }

  if (track && dots.length) startAutoPlay();

  // Swipe support for testimonials
  let touchStartX = 0;
  if (track) {
    track.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      const diff  = touchStartX - e.changedTouches[0].clientX;
      const total = dots.length;
      if (Math.abs(diff) > 40) {
        const next = diff > 0
          ? (current + 1) % total
          : (current - 1 + total) % total;
        goToSlide(next);
        resetAutoPlay();
      }
    }, { passive: true });
  }

  /* ---- 5. ACTIVE NAV LINK on scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  if (sections.length && navItems.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navItems.forEach(a => {
            a.classList.toggle('active',
              a.getAttribute('href').includes(entry.target.id));
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));
  }

  /* ---- 6. ENQUIRE NOW — smooth scroll to contact ---- */
  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---- 7. COURSE CARD — keyboard accessibility ---- */
  document.querySelectorAll('.card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') card.querySelector('.card-link')?.click();
    });
  });

  /* ---- 8. SECTION HEADERS — underline trigger (animations.css) ---- */
  const sectionHeaders = document.querySelectorAll('.section-header');

  if (sectionHeaders.length) {
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          headerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    sectionHeaders.forEach(h => headerObserver.observe(h));
  }

  /* ---- 9. SCROLL TO TOP BUTTON ---- */
  const scrollBtn = document.createElement('button');
  scrollBtn.className    = 'scroll-top-btn';
  scrollBtn.innerHTML    = '&#8679;';           // ↑ arrow
  scrollBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 300);
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- 10. BUTTON RIPPLE EFFECT ---- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      this.classList.remove('ripple');
      // Force reflow so the animation restarts on repeated clicks
      void this.offsetWidth;
      this.classList.add('ripple');
    });
  });

  console.log('%cVSA Coaching Institute | Pune',
    'color:#e94560;font-size:1.2rem;font-weight:bold;');
  console.log('%cBuilt with ❤️ for student success.',
    'color:#8890b0;font-size:0.9rem;');
});