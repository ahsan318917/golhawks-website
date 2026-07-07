const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace bg-black with bg-brand-black
    // We use a regex to ensure we match 'bg-black' and its opacity variants like 'bg-black/40'
    // but not something like 'bg-black-500' if it existed.
    content = content.replace(/bg-black\b/g, 'bg-brand-black');
    
    // Also change border-black to border-brand-black if any
    content = content.replace(/border-black\b/g, 'border-brand-black');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
