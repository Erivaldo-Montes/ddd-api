import {defineConfig} from 'vite'
import tsConfigPath from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsConfigPath()],
  test: {
    globals: true,
  }
})