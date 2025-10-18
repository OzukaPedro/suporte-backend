import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateAccessDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(2, { message: 'O nome precisa ter pelo menos 2 caracteres' })
  name: string;

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

  @IsUUID('4', { message: 'O ID da loja deve ser um UUID válido' })
  @IsNotEmpty({ message: 'O ID da loja é obrigatório' })
  storeId: string;
}
