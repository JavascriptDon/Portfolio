const fs = require('fs-extra');

const htmlFiles = ['project-1.html', 'project-2.html', 'project-3.html'];

async function copyHtmlFiles() {
  try {
    for (const file of htmlFiles) {
      await fs.copyFile(file, `dist/${file}`);
    }
    console.log('HTML files copied successfully.');
  } catch (err) {
    console.error('Error copying HTML files:', err);
  }
}

copyHtmlFiles();