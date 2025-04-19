import { defineConfig } from 'vite'


export default defineConfig({
	build: {
		rollupOptions: {
		  input: {
			main:'index.html',
			project1: 'project-1.html',
			project2: 'project-2.html',
			project3: 'project-3.html',
			project4: 'project-4.html',
			project5: 'project-5.html',
		  },
		},
	  },
	plugins: []	
})