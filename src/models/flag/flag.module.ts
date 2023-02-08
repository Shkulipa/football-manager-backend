import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { S3Module } from 'src/models/s3/s3.module';
import { Flag, FlagSchema } from './entities/flag.entity';
import { FlagController } from './flag.controller';
import { FlagService } from './flag.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Flag.name, schema: FlagSchema }]),
    S3Module,
  ],
  controllers: [FlagController],
  providers: [FlagService],
})
export class FlagModule {}
