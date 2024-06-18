/* tslint:disable */
/* eslint-disable */
import { PageableObject } from '../models/pageable-object';
import { ResponseStudent } from '../models/response-student';
import { SortObject } from '../models/sort-object';
export interface PageResponseStudent {
  content?: Array<ResponseStudent>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: Array<SortObject>;
  totalElements?: number;
  totalPages?: number;
}
