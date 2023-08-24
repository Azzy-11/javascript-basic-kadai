const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  setTimeout(() => {
    document.querySelector('#text').textContent = 'ボタンをクリックしました';
  }, 2000);
});