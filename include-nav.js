(async function(){
  try {
    const res = await fetch('./nav.html');
    if (!res.ok) return;
    const html = await res.text();
    const container = document.getElementById('site-nav-root');
    if (container) container.innerHTML = html;
  } catch (e) {
    console.error('Failed to include nav:', e);
  }
})();
