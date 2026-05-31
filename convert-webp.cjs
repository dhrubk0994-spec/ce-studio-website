const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const collectionsDir = path.join(__dirname, 'public', 'collections');

async function convertToWebp(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertToWebp(fullPath);
    } else if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const newPath = path.join(dir, `${name}.webp`);

      console.log(`Converting ${fullPath} -> ${newPath}`);
      try {
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(newPath);
        
        // Remove original file
        fs.unlinkSync(fullPath);
      } catch (err) {
        console.error(`Failed to convert ${fullPath}:`, err);
      }
    }
  }
}

console.log('Starting WebP conversion...');
convertToWebp(collectionsDir).then(() => {
  console.log('Conversion complete!');
}).catch(console.error);
