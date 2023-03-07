import { SetMetadata } from '@nestjs/common/decorators/core/set-metadata.decorator';
import { EUserRoles } from 'src/common/interfaces/userRoles.interfaces';

import { EVariables } from '../constants/namesVariables';

export const Roles = (role: EUserRoles) => SetMetadata(EVariables.ROLE, role);
