/* tslint:disable */
/* eslint-disable */
import { PageableObject } from '../models/pageable-object';
import { ResponseCourse } from '../models/response-course';
import { SortObject } from '../models/sort-object';
export interface PageResponseCourse {
  content?: Array<ResponseCourse>;
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
