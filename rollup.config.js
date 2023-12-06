// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'index.ts',
    output: {
        dir: 'output',
        format: 'esm',
        name: 'prql'
    },
    plugins: [typescript(), nodeResolve()]
};
