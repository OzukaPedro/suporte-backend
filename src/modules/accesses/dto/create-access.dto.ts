import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateAccessDto {
  @IsString()
  @MinLength(2, {
    message: 'O nome precisa ter mais de 2 caracteres',
  })
  name: string;

  @IsString()
  @MinLength(2, {
    message: 'O nome precisa ter mais de 2 caracteres',
  })
  url: string;

  @IsString()
  @IsOptional()
  panelUser?: string;

  @IsString()
  @IsOptional()
  panelPassword?: string;

  @IsString()
  @IsOptional()
  dbUser?: string;

  @IsString()
  @IsOptional()
  dbPassword?: string;

  @IsString()
  @IsOptional()
  ftpHost?: string;

  @IsString()
  @IsOptional()
  ftpUser?: string;

  @IsString()
  @IsOptional()
  ftpPassword?: string;

  @IsString()
  @IsOptional()
  clientFtpUser?: string;

  @IsString()
  @IsOptional()
  clientFtpPassword?: string;

  @IsString()
  storeId: string;
}
