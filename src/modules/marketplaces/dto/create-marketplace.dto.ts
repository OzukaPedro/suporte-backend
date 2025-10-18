import { IsString, MinLength } from 'class-validator';

export class CreateMarketplaceDto {
  @MinLength(2, {
    message: 'O nome precisa ter pelo menos 2 caracteres',
  })
  @IsString()
  name: string;
}
