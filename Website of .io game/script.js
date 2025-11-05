// small interactivity & helper
document.getElementById('year').textContent = new Date().getFullYear();

// optional: simple click analytics placeholder
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn.small');
  if (!btn) return;
  // Could add analytics here (e.g. send fetch to your server)
  console.log('Play clicked:', btn.closest('.game-card')?.querySelector('h3')?.textContent);
});
