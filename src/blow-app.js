import {LitElement, css, html} from 'lit';
import '@shoelace-style/shoelace/dist/components/split-panel/split-panel.js';
import './gallery-panel.js';
import './gallery-view.js';

export class BlowApp extends LitElement {

  constructor() {
    super();
  }

  static styles = css`

    sl-split-panel {
      --divider-width: 0px;
    }

    sl-split-panel::part(divider) {
      cursor: auto;
    }

    sl-split-panel,
    sl-split-panel > div {
      height: 100%;
    }

    sl-split-panel > div {
      overflow: scroll;
    }

    sl-split-panel > div:nth-child(1) {
      background: var(--sl-color-neutral-50);
    }

    sl-split-panel > div:nth-child(2) {
      background: var(--sl-color-neutral-0);
    }

  `;

  render() {
    return html`
      <sl-split-panel position-in-pixels="250" disabled primary="start">

        <div slot="start">
          <gallery-panel></gallery-panel>
        </div>

        <div slot="end">
          <gallery-view></gallery-view>
        </div>
        
      </sl-split-panel>
    `;
  }

}

customElements.define('blow-app', BlowApp);
