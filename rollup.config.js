import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default {
  input: 'main.js',
  output: { dir: 'dist' },
  plugins: [
    resolve(),
    copy({
      targets: [
        { src: [ 'index.html', 'assets', 'gallery' ], dest: 'dist' },
        {
          src: 'node_modules/source-sans/source-sans-3VF.css',
          dest: 'dist/node_modules/source-sans/'
        },
        {
          src: [
            'node_modules/source-sans/WOFF2/VAR/SourceSans3VF-Roman.ttf.woff2',
            'node_modules/source-sans/WOFF2/VAR/SourceSans3VF-Italic.ttf.woff2'
          ],
          dest: 'dist/node_modules/source-sans/WOFF2/VAR/'
        },
        {
          src: [
            'node_modules/source-sans/WOFF/VAR/SourceSans3VF-Roman.ttf.woff',
            'node_modules/source-sans/WOFF/VAR/SourceSans3VF-Italic.ttf.woff'
          ],
          dest: 'dist/node_modules/source-sans/WOFF/VAR/'
        },
        {
          src: [
            'node_modules/source-sans/VAR/SourceSans3VF-Roman.ttf',
            'node_modules/source-sans/VAR/SourceSans3VF-Italic.ttf'
          ],
          dest: 'dist/node_modules/source-sans/VAR/'
        },
        {
          src: 'node_modules/@shoelace-style/shoelace/dist/themes/dark.css',
          dest: 'dist/node_modules/@shoelace-style/shoelace/dist/themes/'
        },
        {
          src: 'node_modules/@shoelace-style/shoelace/dist/assets',
          dest: 'dist/node_modules/@shoelace-style/shoelace/dist/'
        }
      ]
    })
  ]
}
