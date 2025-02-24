'use strict';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'model/d3/LineChartTooltipBundle.js',
  output: {
    file: 'public/lineChartFunctions.min.js',
    format: 'umd',
    compact: false,
    name: 'v'
  },
  plugins: [
    resolve(),
    postcss({
      extract: 'public/stylesheets/test.css',
      minimize: false,
      modules: false,
      include: ['stylesheets/header.css','stylesheets/home.css','stylesheets/footer.css']
    }),
    terser(),
  ],
  // upstream d3 rollup.config.js has this as well.
  onwarn( message, warn ) {
    if ( message.code === 'CIRCULAR_DEPENDENCY' ) {
      return;
    }
    warn( message )
  }
};