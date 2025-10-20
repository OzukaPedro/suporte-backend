import { Type } from 'class-transformer';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MinLength,
  ValidateNested,
} from 'class-validator';
import {
  type AccessType,
  ACCESS_TYPES,
} from 'src/modules/accesses/types/access-types';

export class CreateStoreDto {
  @MinLength(2, {
    message: 'O nome precisa ter pelo menos 2 caracteres',
  })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @IsString()
  name: string;

  @IsString()
  @IsUrl({}, { message: 'A URL base deve ser uma URL válida' })
  @IsNotEmpty({ message: 'A URL base é obrigatória' })
  baseUrl: string;

  @IsUUID('4', { message: 'O ID do marketplace deve ser um UUID válido' })
  @IsNotEmpty({ message: 'O ID do marketplace é obrigatório' })
  marketplaceId: string;

  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => AccessDto)
  accesses?: AccessDto[];
}

export class AccessDto {
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

  @IsIn(ACCESS_TYPES, {
    message: `O tipo deve ser um dos: ${ACCESS_TYPES.join(', ')}`,
  })
  @IsNotEmpty({ message: 'O tipo de acesso é obrigatório' })
  type: AccessType;
}
