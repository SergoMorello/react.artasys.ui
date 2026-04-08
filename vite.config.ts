import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [
	react(),
	dts({
		entryRoot: 'src',
		insertTypesEntry: true
	}),
],

  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {},
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'react-artasys-ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
	
    cssCodeSplit: false,

    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
		assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'styles.css';
          }
          return assetInfo.name || '';
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})