import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ResponseAccessDto {
  @Expose()
  id: string;

  @Expose()
  type: string;

  @Expose()
  username: string;

  @Expose()
  password: string;
}

export default ResponseAccessDto;
