import {LitElement, css, html} from 'lit';

export class BlowApp extends LitElement {

  constructor() {
    super();
  }

  static styles = css`

    sl-split-panel,
    sl-split-panel > div {
      height: 100%;
    }

    sl-split-panel > div:nth-child(1) {
      background: var(--sl-color-neutral-50);
      overflow: scroll;
    }

    sl-split-panel > div:nth-child(2) {
      background: var(--sl-color-neutral-0);
    }

  `;

  render() {
    return html`
      <sl-split-panel position-in-pixels="250" snap="250px">

        <div slot="start">
          <gallery-panel></gallery-panel>
        </div>

        <div slot="end">

        </div>
        
      </sl-split-panel>
    `;
  }

}

customElements.define('blow-app', BlowApp);
