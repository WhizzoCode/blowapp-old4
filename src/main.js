import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { BlowApp } from './lib/BlowApp.js';

import './source-sans-3VF.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import './style.css';

setBasePath('shoelace');

const app = document.createElement('blow-app');
document.body.appendChild(app);
