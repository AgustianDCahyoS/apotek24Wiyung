import { defineConfig } from 'vite';
import { resolve } from 'path';
import { cpSync, mkdirSync } from 'fs';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        katalog: resolve(__dirname, 'katalog.html'),
        produkDetail: resolve(__dirname, 'produk-detail.html'),
        berita: resolve(__dirname, 'berita.html'),
        beritaDetail: resolve(__dirname, 'berita-detail.html'),
        kontak: resolve(__dirname, 'kontak.html'),
        keranjang: resolve(__dirname, 'keranjang.html'),
        profil: resolve(__dirname, 'profil.html'),
      },
    },
  },
  plugins: [
    {
      name: 'copy-js-assets',
      closeBundle() {
        const outDir = resolve(__dirname, 'dist/assets/js');
        mkdirSync(outDir, { recursive: true });
        cpSync(resolve(__dirname, 'assets/js/main.js'), resolve(outDir, 'main.js'));
        cpSync(resolve(__dirname, 'assets/js/products.js'), resolve(outDir, 'products.js'));
      },
    },
  ],
});
