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
    
    // First, temporarily rename the ones we want to change
    content = content.replace(/text-zinc-300/g, 'TEMP_300');
    content = content.replace(/text-zinc-400/g, 'TEMP_400');
    
    // Then map them to brighter values
    content = content.replace(/TEMP_300/g, 'text-zinc-200');
    content = content.replace(/TEMP_400/g, 'text-zinc-300');
    
    // Also inject some subtle red borders/glows on cards that are purely white/10
    // Replace border-white/5 with border-brand-red/10 in some structural components
    // We'll leave this to manual if it's too risky, but we can do it for common card classes.
    content = content.replace(/bg-white\/\[0\.02\]/g, 'bg-gradient-to-b from-white/[0.03] to-transparent');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
