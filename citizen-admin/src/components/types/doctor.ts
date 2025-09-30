import { Gender } from "@/enums/gender";
import { IAdminUser } from "./user";

export interface IDutyTime {
  start?: string;
  end?: string;
}
export interface IDoctor extends IAdminUser {
  doctorDescription: any;
  id: string;
  doctorMail: string;
  firstName: string;
  lastName: string;
  bmdcRegNumber: string;
  phoneNumber: string;
  yearsExperience: string;
  department: string;
  specialization: string;
  additionalPhoneNumber?: string;
  gender?: Gender;
  address?: string;
  doctorPhoto: File[];
  dutyTime: IDutyTime;
}
