'use strict';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: ['model/d3/LineChartTooltipBundle.js'],
  output: {
    file: 'public/lineChartFunctions.min.js',
    format: 'umd',
    compact: false,
    name: 'd3'
  },
  plugins: [
    resolve(),
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