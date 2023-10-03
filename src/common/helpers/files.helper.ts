import { BadRequestException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { extension } from 'mime-types';

/**
 * uploadFilesLimits - limits for uploading files
 * @param {string[]} allowedExtensions - allowed extensions (.png, .jpg and so on)
 * @param {number} maxNumberOfFiles - hom many file possible upload
 * @returns {MulterOptions} - getting MulterOptions
 */
export const uploadFilesLimits = (allowedExtensions: string[], maxNumberOfFiles = 1): MulterOptions => ({
  limits: {
    fileSize: 2 * 1e6,
    files: maxNumberOfFiles,
  },
  fileFilter: (req: Request, file, cb) => {
    const ext = extension(file.mimetype);
    if (!ext || !allowedExtensions.includes(ext)) {
      return cb(new BadRequestException('Extension not allowed'), false);
    }
    return cb(null, true);
  },
});
