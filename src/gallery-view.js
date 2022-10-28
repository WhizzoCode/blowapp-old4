import {LitElement, css, html} from 'lit';
import '@shoelace-style/shoelace/dist/components/card/card.js';

export class GalleryView extends LitElement {

  constructor() {
    super();
  }

  static styles = css`

    .grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: var(--sl-spacing-x-large);
      margin: var(--sl-spacing-x-large) var(--sl-spacing-x-large);
    }

    sl-card {
      --border-radius: 0;
      --border-width: 0;
      --padding: var(--sl-spacing-small);
    }

    sl-card::part(base) {
      background-color: transparent;
      box-shadow: none;
    }

    img {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: bottom;
    }

    .title {
      font-size: var(--sl-font-size-x-small);
      font-weight: var(--sl-font-weight-light);
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
  `;

  render() {
    let allPhotos = html``;
    [
      'IMG_20190103_182110.jpg',
      'IMG_20190103_182246.jpg',
      'IMG_20190105_175833.jpg',
      'IMG_20190105_180022.jpg',
      'IMG_20190105_180141.jpg',
      'IMG_20190105_180918.jpg',
      'IMG_20190105_181744.jpg',

      'IMG_20190103_182110.jpg',
      'IMG_20190103_182246.jpg',
      'IMG_20190105_175833.jpg',
      'IMG_20190105_180022.jpg',
      'IMG_20190105_180141.jpg',
      'IMG_20190105_180918.jpg',
      'IMG_20190105_181744.jpg',

      'IMG_20190103_182110.jpg',
      'IMG_20190103_182246.jpg',
      'IMG_20190105_175833.jpg',
      'IMG_20190105_180022.jpg',
      'IMG_20190105_180141.jpg',
      'IMG_20190105_180918.jpg',
      'IMG_20190105_181744.jpg'
    ].forEach(filename => {
      allPhotos = html`
        ${ allPhotos }
        <sl-card>
          <img
            src="./gallery/${ filename }"
            alt="${ filename }"
            slot="image"
          />
          <div class="title">${ filename }</div>
        </sl-card>
      `;
    });
    return html`<div class="grid">${ allPhotos }</div>`;
  }

}

customElements.define('gallery-view', GalleryView);
