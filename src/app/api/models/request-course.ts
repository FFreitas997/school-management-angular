/* tslint:disable */
/* eslint-disable */
export interface RequestCourse {
  courseCode: string;
  courseDescription: string;
  courseName: string;
  gradeLevel: 'FIRST_GRADE' | 'SECOND_GRADE' | 'THIRD_GRADE' | 'FOURTH_GRADE' | 'FIFTH_GRADE' | 'SIXTH_GRADE' | 'SEVENTH_GRADE' | 'EIGHTH_GRADE' | 'NINTH_GRADE' | 'TENTH_GRADE' | 'ELEVENTH_GRADE' | 'TWELFTH_GRADE';
  preRequisites?: string;
  room?: string;
}
