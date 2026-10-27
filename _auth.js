(function () {
  // Allow overriding state via URL parameter 
  // e.g. ?auth=true or ?auth=false 
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('auth')) {
    localStorage.setItem('sgg_authenticated', urlParams.get('auth') === 'true');
  }

  // Read state (defaults to false/anonymous)
  const isAuthenticated = localStorage.getItem('sgg_authenticated') === 'true';

  // Immediately set the body class once DOM begins loading
  function applyAuthState() {
    if (document.body) {
      document.body.classList.toggle('is-authenticated', isAuthenticated);
      document.body.classList.toggle('is-anonymous', !isAuthenticated);
    } else {
      document.addEventListener('DOMContentLoaded', applyAuthState);
    }
  }
  applyAuthState();

  // Global helpers for buttons/controls
  window.setAuthState = function (state) {
    localStorage.setItem('sgg_authenticated', state ? 'true' : 'false');
    window.location.reload();
  };

  window.toggleAuthState = function () {
    window.setAuthState(!isAuthenticated);
  };
})();
