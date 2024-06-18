/* tslint:disable */
/* eslint-disable */
import { TextBookDto } from '../models/text-book-dto';
export interface CourseResponse {
  courseCode?: string;
  courseDescription?: string;
  courseName?: string;
  gradeLevel?: 'FIRST_GRADE' | 'SECOND_GRADE' | 'THIRD_GRADE' | 'FOURTH_GRADE' | 'FIFTH_GRADE' | 'SIXTH_GRADE' | 'SEVENTH_GRADE' | 'EIGHTH_GRADE' | 'NINTH_GRADE' | 'TENTH_GRADE' | 'ELEVENTH_GRADE' | 'TWELFTH_GRADE';
  id?: number;
  preRequisites?: string;
  schoolId?: number;
  schoolName?: string;
  textBooks?: Array<TextBookDto>;
}
