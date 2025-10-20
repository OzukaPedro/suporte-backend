import { IsNotEmpty, IsString, IsUUID, MinLength, IsIn } from 'class-validator';
import * as accessTypes from '../types/access-types';

export class CreateAccessDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome de usuário é obrigatório' })
  @MinLength(3, {
    message: 'O nome de usuário precisa ter pelo menos 3 caracteres',
  })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  password: string;

  @IsIn(accessTypes.ACCESS_TYPES, {
    message: `O tipo deve ser um dos: ${accessTypes.ACCESS_TYPES.join(', ')}`,
  })
  @IsNotEmpty({ message: 'O tipo de acesso é obrigatório' })
  type: accessTypes.AccessType;

  @IsUUID('4', { message: 'O ID da loja deve ser um UUID válido' })
  @IsNotEmpty({ message: 'O ID da loja é obrigatório' })
  storeId: string;
}
