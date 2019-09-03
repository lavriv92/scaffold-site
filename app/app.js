document.addEventListener('DOMContentLoaded', () => {
  const link = document.querySelectorAll('.navigation a');

  console.log('a', link);

  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('safdsaf');
  });
});
