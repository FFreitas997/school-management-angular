/* tslint:disable */
/* eslint-disable */
import { SchoolDto } from '../models/school-dto';
import { TeacherDto } from '../models/teacher-dto';
export interface ResponseCourse {
  courseCode?: string;
  courseDescription?: string;
  courseName?: string;
  gradeLevel?: 'FIRST_GRADE' | 'SECOND_GRADE' | 'THIRD_GRADE' | 'FOURTH_GRADE' | 'FIFTH_GRADE' | 'SIXTH_GRADE' | 'SEVENTH_GRADE' | 'EIGHTH_GRADE' | 'NINTH_GRADE' | 'TENTH_GRADE' | 'ELEVENTH_GRADE' | 'TWELFTH_GRADE';
  id?: number;
  preRequisites?: string;
  room?: string;
  school?: SchoolDto;
  teacher?: TeacherDto;
}
