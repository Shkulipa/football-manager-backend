import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

import { wsExceptionFilterHelper } from '../helpers/ws-exception-filter.helper';
import { SocketUserData } from '../interfaces/socket-user-data.interface';

@Catch()
export class WsExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const socket: SocketUserData = host.switchToWs().getClient();
    const error = wsExceptionFilterHelper(exception);
    socket.emit('exception', JSON.stringify(error));
  }
}
