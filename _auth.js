(function () {
  // 1. Pages that require authentication
  const authGatedPages = [
    'profile.html',
    'organizations.html',
    'workspace.html',
    'saved-searches.html'
  ];

  function isCurrentPageAuthGated() {
    const currentFile = window.location.pathname.split('/').pop().split(/[?#]/)[0] || 'index.html';
    const hasAttr = document.body && document.body.dataset.authRequired === 'true';
    return hasAttr || authGatedPages.includes(currentFile);
  }

  // 2. URL override support (?auth=true / ?auth=false)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('auth')) {
    const shouldAuth = urlParams.get('auth') === 'true';
    localStorage.setItem('sgg_authenticated', shouldAuth);
    if (shouldAuth) {
      localStorage.setItem('sgg_flash_signin', 'true');
    }
  }

  // 3. Current state
  const isAuthenticated = localStorage.getItem('sgg_authenticated') === 'true';

  // 4. Flash banner renderer
  function showAuthAlerts() {
    const target = document.querySelector('main') || document.body;
    if (!target) return;

    // Sign-in success
    if (localStorage.getItem('sgg_flash_signin') === 'true') {
      localStorage.removeItem('sgg_flash_signin');
      target.insertAdjacentHTML('afterbegin', `
        <div class="grid-container margin-top-4 margin-bottom-neg-2">
          <div class="usa-alert usa-alert--success usa-alert--slim" role="status">
            <div class="usa-alert__body">
              <p class="usa-alert__text">You have successfully signed in.</p>
            </div>
          </div>
        </div>
      `);
    }

    // Sign-out confirmation
    if (localStorage.getItem('sgg_flash_signout') === 'true') {
      localStorage.removeItem('sgg_flash_signout');
      target.insertAdjacentHTML('afterbegin', `
        <div class="grid-container margin-top-4 margin-bottom-neg-2">
          <div class="usa-alert usa-alert--info usa-alert--slim" role="status">
            <div class="usa-alert__body">
              <p class="usa-alert__text">You have been signed out.</p>
            </div>
          </div>
        </div>
      `);
    }
  }

  // 5. Auth gatekeeper & UI class initialization
  function initAuth() {
    if (!isAuthenticated && isCurrentPageAuthGated()) {
      window.location.replace('index.html');
      return;
    }

    if (document.body) {
      document.body.classList.toggle('is-authenticated', isAuthenticated);
      document.body.classList.toggle('is-anonymous', !isAuthenticated);
    }

    showAuthAlerts();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
  } else {
    initAuth();
  }

  // 6. Global Auth Controls
  window.signIn = function () {
    localStorage.setItem('sgg_authenticated', 'true');
    localStorage.setItem('sgg_flash_signin', 'true');
    window.location.reload();
  };

  window.signOut = function () {
    localStorage.setItem('sgg_authenticated', 'false');
    localStorage.removeItem('sgg_flash_signin');
    localStorage.setItem('sgg_flash_signout', 'true'); 

    if (isCurrentPageAuthGated()) {
      window.location.href = 'index.html';
    } else {
      window.location.reload();
    }
  };

  window.setAuthState = function (state) {
    if (state) {
      window.signIn();
    } else {
      window.signOut();
    }
  };

  window.toggleAuthState = function () {
    window.setAuthState(!isAuthenticated);
  };
})();
