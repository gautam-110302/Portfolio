// src/utils/getImagePath.js (or rename to assetUtils.js)

// Use a recursive glob pattern '**' to find all relevant files
// in any subdirectory under /src/assets/
// Include all file extensions you need (png, jpg, svg, mp4, webm, etc.)
// 'eager: true' loads all modules upfront (good for smaller number of assets)
// 'import: 'default'' directly imports the processed URL/path string
const allAssetModules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,svg,mp4,webm}', { eager: true, import: 'default' });

export const getImagePath = (relativePathFromAssets) => {
  // relativePathFromAssets is the path you store in your data,
  // e.g., "skills/Cplusplus.png", "projects/socialize.png", "projects/socializeDemo.mp4"

  // Construct the key that import.meta.glob uses (absolute path from root)
  const key = `/src/assets/${relativePathFromAssets}`;

  const resolvedPath = allAssetModules[key];

  if (resolvedPath === undefined) {
    // Log a warning if the asset wasn't found in the glob results
    console.warn(`Asset not found via glob for key: ${key} (derived from path: ${relativePathFromAssets})`);
    // Optional: You can log all available keys during debugging if needed:
    // console.log('Available keys in glob:', Object.keys(allAssetModules));
    return ""; // Return empty string or a placeholder image/video path
  }

  // Return the processed path string provided by Vite
  return resolvedPath;
};

// You can keep the old name 'getImagePath' or rename it,
// just make sure components import the correct name you export.
// export const getImagePath = getAssetPath; // Optional alias if needed