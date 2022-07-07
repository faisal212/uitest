import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import multi from '@rollup/plugin-multi-entry';

export default {
  input: ['src/components/Button.tsx', 'src/components/Input.tsx'],
  output: {
    dir: 'output',
    sourcemap:true

  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    multi(),
    terser(),
  ]
};