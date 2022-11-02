import {LitElement, css, html} from 'lit';
import '@shoelace-style/shoelace/dist/components/card/card.js';

export class GalleryView extends LitElement {

  constructor() {
    super();
  }

  static styles = css`

    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: var(--sl-spacing-4x-large);
      margin: var(--sl-spacing-2x-large) var(--sl-spacing-2x-large);
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

    sl-card::part(image) {
      overflow: visible;
    }

    img {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: bottom;
    }

    img.selected {
      filter:
        drop-shadow(8px 0 0 var(--blow-color-shotwell-action))
        drop-shadow(-8px 0 0 var(--blow-color-shotwell-action))
        drop-shadow(0 8px 0 var(--blow-color-shotwell-action))
        drop-shadow(0 -8px 0 var(--blow-color-shotwell-action));
    }

    .title {
      font-size: var(--sl-font-size-small);
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
            class="${ filename === 'IMG_20190103_182246.jpg' ? 'selected' : '' }"
          />
          <div class="title">${ filename }</div>
        </sl-card>
      `;
    });
    return html`<div class="grid">${ allPhotos }</div>`;
  }

}

customElements.define('gallery-view', GalleryView);
