/* tslint:disable */
/* eslint-disable */
import { StudentDto } from '../models/student-dto';
export interface ResponseParent {
  description?: string;
  email?: string;
  firstName?: string;
  id?: number;
  isEnabled?: boolean;
  lastName?: string;
  occupation?: string;
  studentResponsible?: StudentDto;
  type?: 'MOTHER' | 'FATHER' | 'OTHER';
}
