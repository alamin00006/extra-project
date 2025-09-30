import { hospitalType } from "./hospitalType";
import { IAdminUser } from "./user";

export interface IHospitalLocation {
  state: string;
  city: string;
  postCode: string;
  address: string;
}

export interface IHospital extends IAdminUser {
  userId: any;
  serviceId: any;
  payments: any;
  appointments: any;
  hospitalId: any;
  doctorId: any;
  id: string;
  userName: string;
  hospitalName: string;
  hospitalType: hospitalType;
  specialty?: string;
  hospitalRegistrationNum: string;
  yearsOfEstablishment: string;
  hospitalContactNumber?: string;
  contactNumber?: string;
  website?: string;
  hospitalMail?: string;
  hospitalOpenTime: string;
  hospitalCloseTime: string;
  location?: IHospitalLocation;
  banners: File[];
  logo: File[];
}
