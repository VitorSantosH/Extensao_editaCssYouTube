const fs = require('fs');
const path = require('path');

const files = {
  'manifest.json': `{
      "manifest_version": 3,
      "name": "Diminue o tamanho dos videos na pagina home do you tube",
      "version": "1.0",
      "description": "Change CSS of a specific webpage",
      "permissions": ["activeTab", "scripting"],
      "content_scripts": [
        {
          "matches": ["https://www.youtube.com/*"],
          "css": ["styles.css"],
          "js": ["content.js"]
        }
      ]
    }`,

  'content.js': `const element = document.querySelector('.style-scope ytd-rich-grid-renderer');
  if (element) {
    element.style.maxWidth = '20vw';
  }

  console.log("aqui")`,

  'styles.css': `.style-scope .ytd-rich-grid-renderer {
        max-width: 20vw;
    }`
};

Object.keys(files).forEach(fileName => {
  const filePath = path.join(__dirname, fileName);
  fs.writeFileSync(filePath, files[fileName]);
  console.log(`${fileName} criado com sucesso!`);
});