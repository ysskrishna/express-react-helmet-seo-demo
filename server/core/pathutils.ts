import { fileURLToPath } from 'url';
import path from 'path';

export const getDirname = (metaUrl: string) => {
  return path.dirname(fileURLToPath(metaUrl));
};

export const getFilename = (metaUrl: string) => {
  return fileURLToPath(metaUrl);
};
