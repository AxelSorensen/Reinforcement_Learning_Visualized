import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Reinforcement_Learning_Visualized/',
  plugins: [react()],
})
