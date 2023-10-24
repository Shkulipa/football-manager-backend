import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseMongoRepository } from 'src/database/base-repository/base-mongo.repository';

import { ActivationDbDto } from './dto/activation-db.dto';
import { Activation } from './entity/activation.entity';

@Injectable()
export class ActivationRepository extends BaseMongoRepository<ActivationDbDto> {
  constructor(
    @InjectModel(Activation.name)
    private readonly activationModel: Model<ActivationDbDto>,
  ) {
    super(activationModel, 'Activation');
  }

  async validateActivation(activationId: string) {
    const activation = await this.activationModel.findOne({ activationId });
    if (!activation) throw new NotFoundException("Activation wasn't found");

    return activation;
  }
}
