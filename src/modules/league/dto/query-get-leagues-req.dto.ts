import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsOptional } from 'class-validator';
import { QueryDto } from 'src/common/dto/query.dto';
import { commonArrayNullIdValidator } from 'src/common/validators/common-array-null-id.validator';

export class QueryGetLeaguesReqDto extends QueryDto {
  @ApiProperty({ required: false, isArray: true })
  @IsArray()
  @IsOptional()
  @Transform(commonArrayNullIdValidator)
  country: string[];
}
