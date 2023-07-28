// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: 'minecraft-memory-game',
  }

  if (command !== 'serve') {
    config.base = '/minecraft-memory-game/'
  }

  return config
})
