import { Expose } from 'class-transformer';

export class ResponseMarketplaceDto {
  @Expose()
  id: string;

  @Expose()
  name: string;
}
