import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    host: true, // Allows external connections
    port: 5173,
  },

  // optimizeDeps: {
  //   include: ['swiper'],
  // },
})

// export default {
//   server: {
//     host: true, // Allows external connections
//     port: 5173,
//   },
// };
