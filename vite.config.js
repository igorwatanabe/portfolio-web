import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-web",
  plugins: [react()],
})

// export default defineConfig(({ command }) => {
//   const config = {
//     plugins: [react()],
//     base: '/',
//   }

//   if (command !== 'serve') {
//     config.base = '/portfolio-web/'
//   }

//   return config
// })

