import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { EPlayerPositionName } from 'src/modules/real-player/constants/player-position-name.enum';
import { RealPlayerFullInfoDto } from 'src/modules/real-player/dto/real-player-full-info.dto';

// using for swagger instead of type: ...
export class PropertiesMainSquadDto {
  @ComposeDecorators()
  [EPlayerPositionName.RB]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.LCF]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.ST]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.RCF]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.LWM]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.AML]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.AMC]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.AMR]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.RWM]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.LM]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.LCM]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.CM]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.RCM]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.RM]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.LWB]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.LDM]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.CDM]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.RDM]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.RWB]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.LB]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.LCB]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.CB]: RealPlayerFullInfoDto;

  @ComposeDecorators()
  [EPlayerPositionName.RCB]: RealPlayerFullInfoDto;
}

function ComposeDecorators() {
  const decorators = [ApiProperty({ required: false, type: RealPlayerFullInfoDto })];
  return applyDecorators(...decorators);
}
