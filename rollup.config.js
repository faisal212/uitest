import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import multi from '@rollup/plugin-multi-entry';
const packageJson = require("./package.json");

export default [
  {
    input: [
      "src/components/Button",
      "src/components/Input"
    ],
    output: {
      dir: 'dist'
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      multi()
    ],
    external: ["react", "react-dom", "styled-components"],
    preserveModules: true,
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
