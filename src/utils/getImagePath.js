// src/utils/getImagePath.js
export const getImagePath = (relativePath) => {
  // Keep basic validation
  if (typeof relativePath !== 'string' || !relativePath) {
     console.error("Invalid relativePath received:", relativePath);
     return "";
  }
  try {
    // Create the string first - this version works!
    const pathArgument = `../assets/${relativePath}`;
    const imageUrl = new URL(pathArgument, import.meta.url).href;
    return imageUrl;
  } catch (err) {
    // Keep error logging for safety
    console.error(`Image path error constructing URL for relativePath "${relativePath}":`, err);
    console.error(`Base URL (import.meta.url) was: ${import.meta.url}`);
    return "";
  }
};
