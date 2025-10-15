import { IsString, MinLength } from 'class-validator';

export class CreateStoreDto {
  @MinLength(2, {
    message: 'O nome precisa ter mais de 2 caracteres',
  })
  @IsString()
  name: string;
}
