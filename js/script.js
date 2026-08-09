// ===== FAQ accordion =====
document.querySelectorAll('.faq-item').forEach((item) => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ===== Simple EN/AR label toggle (placeholder) =====
const langSwitch = document.getElementById('langSwitch');
if (langSwitch) {
  langSwitch.addEventListener('click', () => {
    alert('النسخة الإنجليزية قيد التطوير قريبًا');
  });
}
