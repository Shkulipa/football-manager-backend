import { ApiProperty } from '@nestjs/swagger';
import { Request } from 'express';

class User {
  @ApiProperty({ type: String })
  email: string;
}

export interface ISocialAuth extends Request {
  user: User;
}
