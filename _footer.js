class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- FOOTER -->
      <footer class="usa-footer usa-footer--big">
        <div class="usa-footer__primary-section padding-y-6">
          <div class="grid-container">
            <div class="grid-row grid-gap">
              <div class="mobile-lg:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <h4 class="usa-footer__primary-link">Support</h4>
                  <ul class="usa-list usa-list--unstyled">
                    <li class="usa-footer__secondary-link"><a href="#" data-page="applicant-help">Applicant help</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="forms-library">Forms library</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="grantor-resources">Grantor resources</a></li>
                  </ul>
                </section>
              </div>
              <div class="mobile-lg:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <h4 class="usa-footer__primary-link">About</h4>
                  <ul class="usa-list usa-list--unstyled">
                    <li class="usa-footer__secondary-link"><a href="#" data-page="newsletter">Newsletter</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="events">Events</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="privacy">Privacy</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="disclaimers">Disclaimers</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="blog">Blog</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="social-media">Social media</a></li>
                  </ul>
                </section>
              </div>
              <div class="mobile-lg:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <h4 class="usa-footer__primary-link">Website updates</h4>
                  <ul class="usa-list usa-list--unstyled">
                    <li class="usa-footer__secondary-link"><a href="#" data-page="what-were-building-next">What we're building next</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="release-notes">Release notes</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="public-wiki">Public wiki</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="discussion-forum">Discussion forum</a></li>
                  </ul>
                </section>
              </div>
              <div class="mobile-lg:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <h4 class="usa-footer__primary-link">Developers</h4>
                  <ul class="usa-list usa-list--unstyled">
                    <li class="usa-footer__secondary-link"><a href="#" data-page="api-keys">API keys</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="api-guide">API guide</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="api-docs">API docs</a></li>
                    <li class="usa-footer__secondary-link"><a href="#" data-page="xml-extract">XML extract</a></li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- USWDS IDENTIFIER -->
      <div class="usa-identifier">
        <section class="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier">
          <div class="usa-identifier__container">
            <div class="usa-identifier__identity">
              <p class="usa-identifier__identity-domain">Simpler.Grants.gov</p>
              <p class="usa-identifier__identity-disclaimer">An official website of the <a href="https://www.hhs.gov">U.S. Department of Health and Human Services</a></p>
            </div>
          </div>
        </section>
        <nav class="usa-identifier__section usa-identifier__section--required-links" aria-label="Important links">
          <div class="usa-identifier__container">
            <ul class="usa-identifier__required-links-list">
              <li class="usa-identifier__required-links-item"><a href="https://www.hhs.gov/about/index.html" class="usa-identifier__required-link">About HHS</a></li>
              <li class="usa-identifier__required-links-item"><a href="https://www.hhs.gov/foia/index.html" class="usa-identifier__required-link">FOIA Requests</a></li>
              <li class="usa-identifier__required-links-item"><a href="https://www.hhs.gov/vulnerability-disclosure-policy/index.html" class="usa-identifier__required-link">Vulnerability Disclosure Policy</a></li>
            </ul>
          </div>
        </nav>
      </div>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
