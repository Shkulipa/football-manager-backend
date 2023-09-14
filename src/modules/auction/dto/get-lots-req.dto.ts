import { ApiProperty, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';
import { IsCheckGreaterThan } from 'src/common/decorators/is-check-greater-than.decorator';
import { QueryGetRealPlayersReqDto } from 'src/modules/real-player/dto/query-get-real-players-req.dto';

export class GetQueryLotsReqDto extends PickType(QueryGetRealPlayersReqDto, [
  'search',
  'positions',
  'ageFrom',
  'ageTo',
  'agilityFrom',
  'agilityTo',
  'country',
  'ratingFrom',
  'ratingTo',
  'jumpingFrom',
  'jumpingTo',
  'passingFrom',
  'passingTo',
  'penaltyTakingFrom',
  'penaltyTakingTo',
  'savingFrom',
  'savingTo',
  'shootingFrom',
  'shootingTo',
  'tacklingFrom',
  'tacklingTo',
  'strengthFrom',
  'strengthTo',
]) {
  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  userId: string;

  @ApiProperty({ type: Number })
  @IsDefined()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit: number;

  @ApiProperty({ type: Number })
  @IsDefined()
  @Type(() => Number)
  @Min(1)
  @IsInt()
  page: number;

  @ApiProperty({ required: true, type: Number })
  @IsOptional()
  @IsInt()
  @Min(10)
  @Type(() => Number)
  @IsCheckGreaterThan('priceFrom', 'priceTo')
  priceFrom: number;

  @ApiProperty({ required: true, type: Number })
  @IsOptional()
  @IsInt()
  @Min(10)
  @Type(() => Number)
  priceTo: number;
}
