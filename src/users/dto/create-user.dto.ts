import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(2)
  @IsString()
  name: string;

  @MinLength(6)
  password: string;
}
