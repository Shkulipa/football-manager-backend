import { RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { isEmpty } from 'lodash';
import { LoggerModuleAsyncParams } from 'nestjs-pino/params';
import { consoleColors } from 'src/common/constants/console-colors';
import { EEnvVariables } from 'src/common/constants/env-variables.enum';
import { EMode } from 'src/common/constants/mode.enum';
import { UserJtwDataDto } from 'src/common/dto/user-jwt-data.dto';
import { JwtModule } from 'src/services/jwt/jwt.module';
import { JwtService } from 'src/services/jwt/jwt.service';
import { v4 as uuidv4 } from 'uuid';

export const loggerAsyncOptions: LoggerModuleAsyncParams = {
  imports: [ConfigModule, JwtModule],
  inject: [ConfigService, JwtService],
  useFactory: async (configService: ConfigService, jwtService: JwtService) => {
    const mode = configService.get(EEnvVariables.NODE_ENV);

    return {
      pinoHttp: {
        ...(mode !== EMode.PRODUCTION && mode !== EMode.STAGING
          ? {
              level: 'debug',
              transport: {
                target: 'pino-pretty',
                options: {
                  colorize: true,
                  levelFirst: true,
                  translateTime: 'HH:MM:ss',
                  messageFormat: `${consoleColors.green}[{req.reqId}] [{userId}] ${consoleColors.bright}${consoleColors.yellow}[{req.method} {req.url}]${consoleColors.reset}${consoleColors.green}[{context}] {msg} ${consoleColors.bright}${consoleColors.magenta}[{responseTime} ms]${consoleColors.green}{statusCodeColor}[{res.statusCode} {res.statusMessage}]${consoleColors.reset}`,
                  ignore: 'pid,hostname,context,req,res,responseTime,userId,statusCodeColor',
                },
              },
            }
          : {
              transport: {
                target: 'pino-pretty',
                options: {
                  singleLine: true,
                  messageFormat: `[{req.reqId}] [{userId}] [{req.method} {req.url}] [{context}] {msg} [{responseTime} ms] [{res.statusCode} {res.statusMessage}]`,
                  ignore: 'pid,hostname,context,res,responseTime,userId,statusCodeColor',
                },
              },
            }),
        genReqId: function () {
          return uuidv4();
        },
        autoLogging: true,
        serializers: {
          req(req) {
            const body = req.raw?.body;
            const query = req.raw?.query;
            return {
              reqId: req.id,
              userId: req.userId,
              method: req.method,
              url: req.url,
              ...(!isEmpty(body) ? { body: sanitizeRequest(body) } : {}),
              ...(!isEmpty(query) ? { query: sanitizeRequest(query) } : {}),
              headers: sanitizeHeaders(req.headers),
            };
          },
          res(res) {
            return {
              statusCode: res.statusCode,
              statusMessage: res.raw.statusMessage,
            };
          },
        },
        customProps: function (req, res) {
          const statusCodeColor = getStatusCodeColor(res.statusCode);
          const bearerToken = req.headers.authorization;
          const customProps: any = {
            statusCodeColor,
          };
          if (bearerToken) {
            const token = bearerToken.split(' ')[1];
            const user = jwtService.verifyAccessToken(token) as UserJtwDataDto;
            customProps.userId = user._id;
          }
          return customProps;
        },
      },
      exclude: [{ method: RequestMethod.GET, path: '/health' }],
    };
  },
};

function getStatusCodeColor(statusCode: number): string {
  // Informational responses (100 – 199)
  // Successful responses (200 – 299)
  // Redirection messages (300 – 399)
  // Client error responses (400 – 499)
  // Server error responses (500 – 599)
  let statusCodeColor = consoleColors.green;
  if (statusCode >= 100 && statusCode <= 199) statusCodeColor = consoleColors.white;
  if (statusCode >= 200 && statusCode <= 299) statusCodeColor = consoleColors.green;
  if (statusCode >= 300 && statusCode <= 399) statusCodeColor = consoleColors.yellow;
  if (statusCode >= 400 && statusCode <= 599) statusCodeColor = consoleColors.red;
  return statusCodeColor;
}

function sanitizeRequest(o) {
  const obj = { ...o };
  try {
    for (const k in obj) {
      if (k === 'parent') {
        continue;
      }
      if (k === 'file') {
        obj[k] = null;
      } else if (typeof obj[k] == 'object' && obj[k] !== null) {
        if (typeof obj[k] === 'string' || obj[k] instanceof String) {
          if (k.toLowerCase().includes('password')) {
            obj[k] = 'SANITIZED_PASSWORD';
          }
        } else {
          obj[k] = sanitizeRequest(obj[k]);
        }
      } else {
        if (typeof obj[k] === 'string' || obj[k] instanceof String) {
          if (k.toLowerCase().includes('password')) {
            obj[k] = 'SANITIZED_PASSWORD';
          }
        }
      }
    }
  } catch (e) {}
  return obj;
}

function sanitizeHeaders(headers) {
  const sanitizedHeaders = { ...headers };
  delete sanitizedHeaders.authorization;
  return sanitizedHeaders;
}
