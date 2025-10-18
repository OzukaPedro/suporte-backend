import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ResponseStoreDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  baseUrl: string;

  @Expose()
  marketplaceId: string;
}

export default ResponseStoreDto;
