/* tslint:disable */
/* eslint-disable */
export interface RequestAssignment {
  assignmentType: 'HOMEWORK' | 'QUIZ' | 'TEST';
  courseCode: string;
  deliverAssignment: string;
  description: string;
  submissionType: 'ONLINE' | 'OFFLINE';
  title: string;
}
