import { Expose } from 'class-transformer';

export class ResponseStoreDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}

export default ResponseStoreDto;
