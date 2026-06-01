const siteHeader = document.querySelector('.site-header');
const menuToggle = document.querySelector('.site-header_menu-toggle');
const whyKoffi = document.querySelector('.why-koffi');
const whyKoffiCards = document.querySelectorAll('.why-koffi_card');
const cursorFollower = document.querySelector('.cursor-follower');

if (siteHeader && menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      siteHeader.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
    }
  });
}

if (whyKoffi) {
  const revealWhyKoffi = () => {
    whyKoffi.classList.add('is-visible');
  };

  if ('IntersectionObserver' in window) {
    const whyKoffiObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          revealWhyKoffi();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    whyKoffiObserver.observe(whyKoffi);
  } else {
    revealWhyKoffi();
  }
}

whyKoffiCards.forEach((card) => {
  const activateCard = () => {
    if (card.classList.contains('is-active')) {
      return;
    }

    whyKoffiCards.forEach((item) => item.classList.remove('is-active'));
    card.classList.add('is-active');
    whyKoffi?.classList.add('has-active');
  };

  card.addEventListener('click', () => {
    activateCard();
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateCard();
    }
  });
});

if (
  cursorFollower &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const cursorPosition = {
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
  };

  const interactiveSelector = 'a, button, .why-koffi_card';

  const moveCursor = () => {
    cursorPosition.currentX += (cursorPosition.targetX - cursorPosition.currentX) * 0.2;
    cursorPosition.currentY += (cursorPosition.targetY - cursorPosition.currentY) * 0.2;

    cursorFollower.style.transform = `translate3d(${cursorPosition.currentX}px, ${cursorPosition.currentY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(moveCursor);
  };

  window.addEventListener('pointermove', (event) => {
    cursorPosition.targetX = event.clientX;
    cursorPosition.targetY = event.clientY;
    document.body.classList.add('is-pointer-active');
    document.body.classList.toggle('is-hovering-interactive', Boolean(event.target.closest(interactiveSelector)));
  });

  window.addEventListener('pointerleave', () => {
    document.body.classList.remove('is-pointer-active', 'is-hovering-interactive');
  });

  moveCursor();
}
