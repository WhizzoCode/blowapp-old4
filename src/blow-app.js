import {LitElement, css, html} from 'lit';

export class BlowApp extends LitElement {

  constructor() {
    super();
  }

  static styles = css`

    .layout {
      display: flex;
      height: 100%;
    }

    .panel,
    .view {
      overflow: scroll;
    }

    .panel {
      width: 250px;
      flex-shrink: 0;
      background-color: var(--color-panel);
      border-right: 1px solid var(--color-panel-border);
    }

    .view {
      flex-grow: 1;
    }

  `;

  render() {
    return html`
      <div class="layout">

        <div class="panel">
          <!-- <gallery-panel></gallery-panel> -->
        </div>

        <div class="view">
          <!-- <gallery-view></gallery-view> -->
        </div>

      </div>
    `;
  }

}

customElements.define('blow-app', BlowApp);
