/* tslint:disable */
/* eslint-disable */
export interface RequestUser {
  description: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT';
}
