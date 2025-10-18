import {
  IsNotEmpty,
  IsString,
  IsUrl,
  IsUUID,
  MinLength,
} from 'class-validator';

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
}
