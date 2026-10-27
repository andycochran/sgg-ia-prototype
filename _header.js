class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- INLINE SVG SPRITE (Prevents CORS issues on file:// protocol) -->
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="icon-search" viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </symbol>
        <symbol id="icon-star" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </symbol>
        <symbol id="icon-topic" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
        </symbol>
        <symbol id="icon-settings" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
        </symbol>
        <symbol id="icon-notifications" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
        </symbol>
        <symbol id="icon-groups" viewBox="0 0 24 24">
          <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </symbol>
      </svg>

      <!-- USWDS BANNER -->
      <section class="usa-banner" aria-label="Official website of the United States government">
        <div class="usa-banner__header">
          <div class="usa-banner__inner">
            <div class="grid-col-auto">
              <img class="usa-banner__header-flag" src="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.8.0/img/us_flag_small.png" alt="U.S. flag">
            </div>
            <div class="grid-col-fill tablet:grid-col-auto">
              <p class="usa-banner__header-text">An official website of the United States government</p>
            </div>
          </div>
        </div>
      </section>

      <!-- HEADER & PRIMARY NAVIGATION -->
      <header class="usa-header usa-header--extended">
        <div class="usa-navbar">
          <div class="usa-logo" id="extended-logo">
            <em class="usa-logo__text">
              <a href="index.html" title="Home" aria-label="Simpler.Grants.gov Home">
                <strong>Simpler</strong>.Grants.gov
              </a>
            </em>
          </div>
          <button type="button" class="usa-menu-btn">Menu</button>
        </div>

        <nav aria-label="Primary navigation" class="usa-nav">
          <div class="usa-nav__inner">
            <button type="button" class="usa-nav__close">
              <img src="https://cdnjs.cloudflare.com/ajax/libs/uswds/3.8.0/img/usa-icons/close.svg" alt="Close">
            </button>

            <ul class="usa-nav__primary usa-accordion">
              
              <!-- 1. LEARN MENU -->
              <li class="usa-nav__primary-item">
                <button type="button" class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="nav-learn">
                  <span>Learn</span>
                </button>
                <ul id="nav-learn" class="usa-nav__submenu">
                  <li class="usa-nav__submenu-item"><a href="learn--grants-101.html">Grants 101</a></li>
                  <li class="usa-nav__submenu-item"><a href="learn--lifecycle-of-a-grant.html">Lifecycle of a grant</a></li>
                  <li class="usa-nav__submenu-item"><a href="learn--application-process.html">Application process</a></li>
                  <li class="usa-nav__submenu-item"><a href="learn--grant-policies.html">Grant policies</a></li>
                  <li class="usa-nav__submenu-item"><a href="learn--grant-making-agencies.html">Grant-making agencies</a></li>
                  <li class="usa-nav__submenu-item"><a href="learn--grant-terminology.html">Grant terminology</a></li>
                  <li class="usa-nav__submenu-item"><a href="learn--fraud.html">Fraud</a></li>
                  <li class="usa-nav__submenu-item"><a href="learn--grant-systems.html">Grant systems</a></li>
                </ul>
              </li>

              <!-- 2. FIND MENU -->
              <li class="usa-nav__primary-item">
                <button type="button" class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="nav-find">
                  <span>Find</span>
                </button>
                <ul id="nav-find" class="usa-nav__submenu">
                  <li class="usa-nav__submenu-item text-bold">
                    <a href="find--search.html" class="display-flex flex-align-center">
                      <svg class="usa-icon margin-right-1" aria-hidden="true" focusable="false" role="img"><use href="#icon-search"></use></svg>
                      <span>Search grants</span>
                    </a>
                  </li>
                  <li class="usa-nav__submenu-item text-bold">
                    <a href="find--saved-searches.html" class="display-flex flex-align-center">
                      <svg class="usa-icon margin-right-1" aria-hidden="true" focusable="false" role="img"><use href="#icon-star"></use></svg>
                      <span>Saved searches</span>
                    </a>
                  </li>
                  <li class="usa-nav__submenu-item text-bold">
                    <a href="find--saved-opportunities.html" class="display-flex flex-align-center">
                      <svg class="usa-icon margin-right-1" aria-hidden="true" focusable="false" role="img"><use href="#icon-star"></use></svg>
                      <span>Saved opportunities</span>
                    </a>
                  </li>
                  <li class="usa-nav__submenu-item border-top-1px border-base-lighter margin-top-1 padding-top-1">
                    <a href="find--reviewing-the-opportunity.html">Reviewing the opportunity</a>
                  </li>
                  <li class="usa-nav__submenu-item"><a href="find--determining-eligibility.html">Determining eligibility</a></li>
                  <li class="usa-nav__submenu-item"><a href="find--search-tips.html">Search tips</a></li>
                </ul>
              </li>

              <!-- 3. APPLY MENU -->
              <li class="usa-nav__primary-item">
                <button type="button" class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="nav-apply">
                  <span>Apply</span>
                </button>
                <ul id="nav-apply" class="usa-nav__submenu">
                  <li class="usa-nav__submenu-item text-bold">
                    <a href="apply--applications.html" class="display-flex flex-align-center">
                      <svg class="usa-icon margin-right-1" aria-hidden="true" focusable="false" role="img"><use href="#icon-topic"></use></svg>
                      <span>Applications</span>
                    </a>
                  </li>
                  <li class="usa-nav__submenu-item border-top-1px border-base-lighter margin-top-1 padding-top-1">
                    <a href="apply--getting-ready-to-apply.html">Getting ready to apply</a>
                  </li>
                  <li class="usa-nav__submenu-item"><a href="apply--building-your-application.html">Building your application</a></li>
                  <li class="usa-nav__submenu-item"><a href="apply--submission-checklist.html">Submission checklist</a></li>
                  <li class="usa-nav__submenu-item"><a href="apply--application-troubleshooting.html">Application troubleshooting</a></li>
                </ul>
              </li>

              <!-- 4. SIGN IN (UNAUTHENTICATED) -->
              <li class="usa-nav__primary-item anon-only" id="unauth-nav-item">
                <a href="" id="sign-in-btn" class="usa-nav__link" onclick="setAuthState(true);">Sign in</a>
              </li>

              <!-- 5. ACCOUNT MENU (AUTHENTICATED) -->
              <li class="usa-nav__primary-item auth-only" id="auth-nav-item">
                <button type="button" class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="nav-account">
                  <span>Account</span>
                </button>
                <ul id="nav-account" class="usa-nav__submenu">
                  <li class="usa-nav__submenu-item text-bold">
                    <a href="account--settings.html" class="display-flex flex-align-center">
                      <svg class="usa-icon margin-right-1" aria-hidden="true" focusable="false" role="img"><use href="#icon-settings"></use></svg>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li class="usa-nav__submenu-item text-bold">
                    <a href="account--notifications.html" class="display-flex flex-align-center">
                      <svg class="usa-icon margin-right-1" aria-hidden="true" focusable="false" role="img"><use href="#icon-notifications"></use></svg>
                      <span>Notifications</span>
                    </a>
                  </li>
                  <li class="usa-nav__submenu-item text-bold">
                    <a href="account--organizations.html" class="display-flex flex-align-center">
                      <svg class="usa-icon margin-right-1" aria-hidden="true" focusable="false" role="img"><use href="#icon-groups"></use></svg>
                      <span>Organizations</span>
                    </a>
                  </li>
                  <li class="usa-nav__submenu-item border-top-1px border-base-lighter margin-top-1 padding-top-1">
                    <a href="" id="sign-out-btn" onclick="setAuthState(false);">Sign out</a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
