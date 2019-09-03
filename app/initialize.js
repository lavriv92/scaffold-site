document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navigation a, .to-top');

  links.forEach((l) => {
    l.addEventListener('click', (e) => {
      e.preventDefault();

      const section = document.querySelector(l.dataset.href);

      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    });
  });
});
