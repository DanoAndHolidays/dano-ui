import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    base: './',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        target: 'esnext',
        minify: true,
        cssCodeSplit: true, // 确保启用 CSS 代码分割
        rollupOptions: {
            external: ['vue'],
            input: ['index.js'],
            output: [
                {
                    format: 'es',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    exports: 'named',
                    dir: resolve(__dirname, './ui/es'),
                    // 确保 CSS 被单独提取到输出文件夹
                    assetFileNames: 'assets/[name].[ext]',
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    preserveModules: true,
                    exports: 'named',
                    dir: resolve(__dirname, './ui/lib'),
                    // 确保 CSS 被单独提取到输出文件夹
                    assetFileNames: 'assets/[name].[ext]',
                },
            ],
        },
        lib: {
            entry: './index.js',
            name: 'BendCard',
        },
    },
    
})
