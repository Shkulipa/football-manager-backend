import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';

import { RestorePasswordDbDto } from './dto/restore-password-db.dto';
import { RestorePassword } from './entity/restore-password.entity';

@Injectable()
export class RestorePasswordRepository extends BaseMongoRepository<RestorePasswordDbDto> {
  constructor(
    @InjectModel(RestorePassword.name)
    private readonly restorePasswordModel: Model<RestorePasswordDbDto>,
  ) {
    super(restorePasswordModel, 'Restore Password token');
  }

  async validateRestorePassword(activationId: string) {
    const activation = await this.restorePasswordModel.findOne({ activationId });
    if (!activation) throw new NotFoundException("Restore Password token wasn't found");

    return activation;
  }
}
