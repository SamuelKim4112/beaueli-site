const sharp = require('sharp');
const path = require('path');

const images = ['review_ba_2.jpg', 'review_ba_3.jpg', 'review_ba_1.jpg', 'review_ba_4.jpg'];

async function checkDims() {
    for (const file of images) {
        try {
            const p = path.join(process.cwd(), 'public', file);
            const md = await sharp(p).metadata();
            console.log(`${file}: ${md.width}x${md.height} (Ratio: ${(md.width / md.height).toFixed(2)})`);
        } catch (e) {
            console.log(`${file}: Error ${e.message}`);
        }
    }
}
checkDims();
