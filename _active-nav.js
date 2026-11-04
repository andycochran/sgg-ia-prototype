function setActiveNav() {
  // Get the current filename and extract the prefix before the first hyphen
  const currentFile = window.location.pathname.split('/').pop().split(/[?#]/)[0] || 'index.html';
  const currentPrefix = currentFile.includes('-') ? currentFile.split('-')[0].toLowerCase() : null;

  // Don't apply a current class on the home page
  if (currentFile === 'index.html') return;

  // Scan all links to determine if they're in the active section
  document.querySelectorAll('.usa-nav__submenu a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('http')) return;

    const linkFile = href.split('/').pop().split(/[?#]/)[0];
    const linkPrefix = linkFile.includes('-') ? linkFile.split('-')[0].toLowerCase() : null;

    const isMatch = linkFile === currentFile || (currentPrefix && linkPrefix === currentPrefix);

    if (isMatch) {
      const parentItem = link.closest('.usa-nav__primary-item');
      const parentButton = parentItem ? parentItem.querySelector('button') : null;

      if (parentButton) {
        parentButton.classList.add('usa-current');
      }
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setActiveNav);
} else {
  setActiveNav();
}
