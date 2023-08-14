import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-web",
  plugins: [react()],
})

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, "index.html"),
//         404: resolve(__dirname, "public/404.html"),
//       },
//     },
//   },
// });
