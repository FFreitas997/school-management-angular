/* tslint:disable */
/* eslint-disable */
import { PageableObject } from '../models/pageable-object';
import { ResponseTeacher } from '../models/response-teacher';
import { SortObject } from '../models/sort-object';
export interface PageResponseTeacher {
  content?: Array<ResponseTeacher>;
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
