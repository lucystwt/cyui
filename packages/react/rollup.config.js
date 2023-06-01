import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { createRequire } from 'node:module'

import { defineConfig } from 'rollup'
import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const entry = 'src/index.ts'

export default defineConfig(
  {
    input: entry,
    output: [
      { file: pkg.module, format: 'es', sourcemap: true },
      { file: pkg.main, format: 'cjs', sourcemap: true },
    ],
    plugins: [
      alias({
        customResolver: nodeResolve({
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        entries: Object.entries({
          '~/*': ['./src/*'],
          '~/utils': ['./src/utils/*'],
        }).map(([alias, value]) => ({
          find: new RegExp(`${alias.replace('/*', '')}`),
          replacement: path.resolve(__dirname, `${value[0].replace('/*', '')}`),
        })),
      }),
      commonjs(),
      nodeResolve(),
      esbuild(),
    ],
    external: Object.keys(pkg.peerDependencies).map(
      (dep) => new RegExp(`^${dep}(/.+)*$`)
    ),
  },
  {
    input: entry,
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [
      alias({
        customResolver: nodeResolve({ extensions: ['.ts', '.tsx'] }),
        entries: Object.entries({
          '~/*': ['./src/*'],
          '~/utils': ['./src/utils/*'],
        }).map(([alias, value]) => ({
          find: new RegExp(`${alias.replace('/*', '')}`),
          replacement: path.resolve(__dirname, `${value[0].replace('/*', '')}`),
        })),
      }),
      dts(),
    ],
  }
)
