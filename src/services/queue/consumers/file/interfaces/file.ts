interface IBuffer {
  type: 'string';
  data: number[];
}

export interface IFile extends Omit<Express.Multer.File, 'buffer'> {
  file: Buffer;
  buffer: IBuffer;
}

export interface IJobUploadFile {
  file: IFile;
}
