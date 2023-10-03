import Token from 'src/common/decorators/token.decorator';
import { IUserData } from 'src/common/interfaces/user-data.interfaces';

export class RefreshResDto extends IUserData {
  @Token()
  accessToken: string;
}
