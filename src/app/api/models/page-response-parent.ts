/* tslint:disable */
/* eslint-disable */
import { PageableObject } from '../models/pageable-object';
import { ResponseParent } from '../models/response-parent';
import { SortObject } from '../models/sort-object';
export interface PageResponseParent {
  content?: Array<ResponseParent>;
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
