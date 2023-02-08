import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class FileSizeValidationGuard implements PipeTransform {
  transform(file: any, metadata: ArgumentMetadata) {
    // return file.size < maxValue;
    console.log('file', file);
    console.log('metadata', metadata);
    return true;
  }
}
