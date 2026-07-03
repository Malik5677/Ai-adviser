import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Heavy libs (three.js, lottie) are already code-split via
    // dynamic import() in App.jsx / Landing.jsx, so a larger warning
    // limit here just avoids noisy false positives in the build log.
    chunkSizeWarningLimit: 1000,
  },
})
