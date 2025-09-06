import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        project1: './projects/project-1.html',
        project2: './projects/project-2.html',
        project3: './projects/project-3.html',
        project4: './projects/project-4.html',
        project5: './projects/project-5.html',
      },
    },
  },
})