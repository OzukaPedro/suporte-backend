import { IsString, IsStrongPassword, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(2, {
    message: 'O nome precisa ter mais de 2 caracteres',
  })
  @IsString()
  name: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'A senha deve conter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial.',
    },
  )
  password: string;
}
