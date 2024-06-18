/* tslint:disable */
/* eslint-disable */
export interface RequestStudent {
  birthDate: string;
  description?: string;
  email: string;
  firstName: string;
  gradeLevel: 'FIRST_GRADE' | 'SECOND_GRADE' | 'THIRD_GRADE' | 'FOURTH_GRADE' | 'FIFTH_GRADE' | 'SIXTH_GRADE' | 'SEVENTH_GRADE' | 'EIGHTH_GRADE' | 'NINTH_GRADE' | 'TENTH_GRADE' | 'ELEVENTH_GRADE' | 'TWELFTH_GRADE';
  lastName: string;
  medicalInformation?: string;
  password: string;
  schoolID: number;
  studentIdentification?: string;
}
