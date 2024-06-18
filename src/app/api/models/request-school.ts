/* tslint:disable */
/* eslint-disable */
export interface RequestSchool {
  address: string;
  city?: string;
  email: string;
  facebookURL?: string;
  instagramURL?: string;
  name: string;
  phoneNumber: string;
  type: 'PRIMARY' | 'SECONDARY' | 'HIGH_SCHOOL' | 'UNIVERSITY' | 'OTHER';
  zipCode?: string;
}
