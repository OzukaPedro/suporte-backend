import { Expose } from 'class-transformer';

export class ResponseUserDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}

export default ResponseUserDto;
