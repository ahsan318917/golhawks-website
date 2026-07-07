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
    
    // 1. Surfaces
    content = content.replace(/bg-gradient-to-b from-white\/\[0\.03\] to-transparent/g, 'bg-zinc-900');
    content = content.replace(/bg-white\/\[0\.02\]/g, 'bg-zinc-900');
    content = content.replace(/bg-brand-black\/40/g, 'bg-zinc-900');
    content = content.replace(/bg-brand-black\/50/g, 'bg-zinc-900');
    content = content.replace(/bg-brand-black\/60/g, 'bg-zinc-900/90');
    content = content.replace(/bg-brand-black\/80/g, 'bg-zinc-900/95');
    content = content.replace(/bg-white\/5/g, 'bg-zinc-800');
    content = content.replace(/bg-white\/10/g, 'bg-zinc-700');
    content = content.replace(/bg-zinc-950/g, 'bg-zinc-900'); // Some I might have accidentally set to 950 earlier
    content = content.replace(/bg-brand-black/g, 'bg-zinc-950'); // Replace brand-black (which was 18181b) to 950 (which is 09090b)
    
    // Fix: If bg-brand-black/40 became bg-zinc-950/40 from the previous run, map it:
    content = content.replace(/bg-zinc-950\/40/g, 'bg-zinc-900');
    content = content.replace(/bg-zinc-950\/50/g, 'bg-zinc-900');
    content = content.replace(/bg-zinc-950\/60/g, 'bg-zinc-900/90');

    // 2. Borders
    content = content.replace(/border-white\/5/g, 'border-zinc-800');
    content = content.replace(/border-white\/10/g, 'border-zinc-700');
    content = content.replace(/border-white\/20/g, 'border-zinc-600');
    content = content.replace(/border-white\/\[0\.06\]/g, 'border-zinc-800');
    
    // 3. Text (we did some earlier, let's fix any placeholders)
    content = content.replace(/placeholder:text-zinc-500/g, 'placeholder:text-zinc-400');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
