from PIL import Image
import os

def create_favicon(input_path, output_path):
    try:
        img = Image.open(input_path)
        # Assuming the logo is wide (TEXT + ICON usually), or ICON + TEXT.
        # User said "Front part of the logo". 
        # Usually logos are square if just icon, but if "Beaueli" is text, maybe the icon is on the left?
        # Let's inspect the image size first implicitly by cropping a square from the left.
        
        width, height = img.size
        # Crop the left-most square area (assuming icon is there)
        # If the image is 500x100, we crop 100x100 from 0,0.
        
        crop_size = min(width, height)
        # Actually if it's a wide logo, the icon is likely on the left.
        # Let's crop a square from the left.
        
        left = 0
        top = 0
        right = height # Make it a square based on height
        bottom = height
        
        if width > height:
             # Wide logo
             cropped = img.crop((left, top, right, bottom))
        else:
             # Vertical or square logo, just resize
             cropped = img
        
        # Resize to standard favicon size (e.g. 512x512 for high res icon.png)
        cropped = cropped.resize((192, 192), Image.Resampling.LANCZOS)
        
        cropped.save(output_path)
        print(f"Successfully created favicon at {output_path}")

    except Exception as e:
        print(f"Error: {e}")

# Run
create_favicon('/Users/samuelkim/Desktop/Renewal Beaueli/public/logo_clean.png', '/Users/samuelkim/Desktop/Renewal Beaueli/src/app/icon.png')
