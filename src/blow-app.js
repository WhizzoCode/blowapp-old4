import {LitElement, css, html} from 'lit';
import './gallery-panel.js';
import './gallery-view.js';

export class BlowApp extends LitElement {

  constructor() {
    super();
  }

  static styles = css`

    .layout {
      --sl-font-sans: 'Source Sans 3 VF';

      display: flex;
      height: 100%;
      background-color: var(--blow-color-shotwell-main);
      color: var(--blow-color-text);
      font-family: 'Source Sans 3 VF';
    }

    .panel,
    .view {
      overflow: scroll;
    }

    .panel {
      width: 200px;
      flex-shrink: 0;
      background-color: var(--blow-color-shotwell-panel);

      border-right: 1px solid var(--blow-color-shotwell-border);
    }

    .view {
      flex-grow: 1;
    }

  `;

  render() {
    return html`
      <div class="layout">

        <div class="panel">
          <gallery-panel></gallery-panel>
        </div>

        <div class="view">
          <gallery-view></gallery-view>
        </div>

      </div>
    `;
  }

}

customElements.define('blow-app', BlowApp);
