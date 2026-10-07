(() => {
  const button = document.querySelector('[data-back-to-top]');
  if (!button) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let updatePending = false;

  function updateVisibility() {
    button.hidden = window.scrollY < 320;
    updatePending = false;
  }

  window.addEventListener('scroll', () => {
    if (updatePending) return;
    updatePending = true;
    window.requestAnimationFrame(updateVisibility);
  }, { passive: true });
  window.addEventListener('pageshow', updateVisibility);

  button.addEventListener('click', () => {
    const heading = document.querySelector('main h1');
    if (heading) {
      // Move keyboard focus to the content we are returning to.
      if (!heading.hasAttribute('tabindex')) {
        heading.setAttribute('tabindex', '-1');
        heading.addEventListener('blur', () => heading.removeAttribute('tabindex'), { once: true });
      }
      heading.focus({ preventScroll: true });
    }
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  });

  updateVisibility();
})();
