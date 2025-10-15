import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.headers['api-key'];

    // valor esperado — pode vir de .env
    const validKey = process.env.API_KEY;

    if (!apiKey || apiKey !== validKey) {
      throw new UnauthorizedException('Chave de API inválida ou ausente');
    }

    return true;
  }
}
