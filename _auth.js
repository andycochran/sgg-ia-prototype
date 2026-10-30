(function () {
  // 1. List of file names that require authentication
  const authGatedPages = [
    'profile.html',
    'organizations.html',
    'workspace.html',
    'saved-searches.html'
  ];

  // Helper to determine if current page requires authentication
  function isCurrentPageAuthGated() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const hasAttr = document.body && document.body.dataset.authRequired === 'true';
    return hasAttr || authGatedPages.includes(currentFile);
  }

  // 2. Allow URL override (?auth=true / ?auth=false)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('auth')) {
    localStorage.setItem('sgg_authenticated', urlParams.get('auth') === 'true');
  }

  // 3. Read auth state
  const isAuthenticated = localStorage.getItem('sgg_authenticated') === 'true';

  // 4. Gatekeeper: if user lands on an auth-gated page while logged out, send home immediately
  function enforceGate() {
    if (!isAuthenticated && isCurrentPageAuthGated()) {
      window.location.replace('index.html');
      return;
    }

    if (document.body) {
      document.body.classList.toggle('is-authenticated', isAuthenticated);
      document.body.classList.toggle('is-anonymous', !isAuthenticated);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enforceGate);
  } else {
    enforceGate();
  }

  // 5. Global Sign Out function
  window.signOut = function () {
    localStorage.setItem('sgg_authenticated', 'false');

    if (isCurrentPageAuthGated()) {
      window.location.href = 'index.html';
    } else {
      window.location.reload();
    }
  };

  // Backwards compatibility with previous setAuthState(false)
  window.setAuthState = function (state) {
    if (!state) {
      window.signOut();
    } else {
      localStorage.setItem('sgg_authenticated', 'true');
      window.location.reload();
    }
  };

  window.toggleAuthState = function () {
    window.setAuthState(!isAuthenticated);
  };
})();
