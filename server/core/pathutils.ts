import { fileURLToPath } from 'url';
import path from 'path';

export const getDirname = (metaUrl: string): string => {
  return path.dirname(fileURLToPath(metaUrl));
};

export const getStaticFilePath = (metaUrl: string, fileName: string): string => {
  const isProd = process.env.NODE_ENV === 'production';
  const currentDir = getDirname(metaUrl);
  
  if (!isProd) {
    return path.join(currentDir, fileName);
  }

  // In production, all assets are flattened in the dist directory 
  // TODO: Explore fix for multiple JSON files with the same name in different directories (like server/core/config.json and server/services/config.json)
  return path.join(process.cwd(), 'dist', fileName);
};
