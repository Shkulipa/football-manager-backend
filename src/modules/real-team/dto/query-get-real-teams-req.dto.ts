import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';
import Trim from 'src/common/decorators/trim.decorator';
import { QueryDto } from 'src/common/dto/query.dto';
import { commonArrayNullIdValidator } from 'src/common/validators/common-array-null-id.validator';

export class QueryGetRealTeamsReqDto extends QueryDto {
  @ApiProperty({ type: String })
  @IsArray()
  @IsOptional()
  @Transform(commonArrayNullIdValidator)
  leagueId: string[];

  @ApiProperty({ type: String })
  @IsString()
  @IsOptional()
  @Trim()
  clubName: string;
}
