import {LitElement, html} from 'lit';

export class BlowApp extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <h1>BlowApp</h1>
    `;
  }

}

customElements.define('blow-app', BlowApp);
