import { Role } from "@/enums/role";

export interface IAdminUser {
  email: string;
  password: string;
  confirmPassword?: string;
  role: Role;
  hospital?: string | null;
  doctor?: string;
  admin?: string;
  SuperAdmin?: string;
  // status: STATUS;
}
