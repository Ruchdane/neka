import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

const vitestConfig = defineConfig({test: {
    environment: 'jsdom',
    setupFiles: ['./setup.ts'],
    globals: true
},})

export default mergeConfig(viteConfig, vitestConfig);