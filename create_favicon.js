const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(process.cwd(), 'public', 'logo_clean.png');
const outputPath = path.join(process.cwd(), 'src', 'app', 'icon.png');

async function cropFavicon() {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Assume icon is on the left and square-ish.
        // We'll crop a square from the left side.
        const height = metadata.height;
        const width = metadata.width;

        // If it's a wide logo, crop left square.
        // If it's effectively square already, just resize.
        let extractRegion;

        if (width > height * 1.2) {
            // Wide logo: Crop left square
            extractRegion = { left: 0, top: 0, width: height, height: height };
        } else {
            // Square or portrait: Use as is (maybe resize if needed, but Next.js handles that)
            extractRegion = null;
        }

        let pipeline = image;
        if (extractRegion) {
            pipeline = pipeline.extract(extractRegion);
        }

        // Resize to 512x512 for good measure (standard icon size)
        pipeline = pipeline.resize(512, 512).png();

        await pipeline.toFile(outputPath);
        console.log("Favicon created at " + outputPath);

    } catch (error) {
        console.error("Error creating favicon:", error);
        process.exit(1);
    }
}

cropFavicon();
