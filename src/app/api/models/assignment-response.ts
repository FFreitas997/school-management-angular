/* tslint:disable */
/* eslint-disable */
export interface AssignmentResponse {
  assignmentType?: 'HOMEWORK' | 'QUIZ' | 'TEST';
  courseCode?: string;
  delivery?: string;
  description?: string;
  feedback?: string;
  grade?: number;
  studentID?: number;
  submissionType?: 'ONLINE' | 'OFFLINE';
  title?: string;
}
