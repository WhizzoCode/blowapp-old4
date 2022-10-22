import '@shoelace-style/shoelace/dist/themes/dark.css';
import './source-sans-3VF.css';
import './style.css';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import '@shoelace-style/shoelace/dist/components/split-panel/split-panel.js';
import { BlowApp } from './lib/BlowApp.js';

setBasePath('shoelace');

const app = document.createElement('blow-app');
document.body.appendChild(app);
