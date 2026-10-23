import os, zipfile

theme_dir = os.path.abspath('sta-wordpress/sta-theme')
zip_path = os.path.abspath('sta-wordpress/sta-theme.zip')

if os.path.exists(zip_path):
    os.remove(zip_path)

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(theme_dir):
        for file in files:
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, os.path.dirname(theme_dir))
            # Force forward slashes for Linux/Unix compatibility
            arcname = rel_path.replace('\\', '/')
            zipf.write(full_path, arcname)

print('Built', zip_path, 'size:', os.path.getsize(zip_path))
