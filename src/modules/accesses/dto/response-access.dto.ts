import { Exclude, Expose } from 'class-transformer';
import * as accessTypes from '../types/access-types';

@Exclude()
export class ResponseAccessDto {
  @Expose()
  id: string;

  @Expose()
  type: accessTypes.AccessType;

  @Expose()
  username: string;

  @Expose()
  password: string;
}

export default ResponseAccessDto;
