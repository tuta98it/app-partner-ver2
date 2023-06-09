export class SearchListPatient {
  keyword: string;
  patientName: string;
  address: string;
  phone: string;
  patientCode: string;
  doctorName: string;
  from: string;
  to: string;
  inGroup: boolean;
  pageSize?: number;
  page?: number;
  newId: string;
  groupId: string;
  roomId: string;
  doctorInCareDoctId: string;
  nursingInCareId: string;
  sosRange: number;
  psychiatristId: string;
  pharmacistId: string;
  coordinatorId: string;
  volunteerId: string;
  endTreatment: number;
  newPrescription: number;
  isVisited: number;
  reported: number;
  districtName: string;
  wardName: string;
  gender?: number;
  minAge?: number;
  maxAge?: number;
  dateNoMin?: number;
  dateNoMax?: number;
  vaccinated?: number;
  hasDiseases?: number;
  receptionDate?: Date;
  oTSearchFields?: any[];
}
