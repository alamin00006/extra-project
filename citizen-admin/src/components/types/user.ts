import { Role } from "enums/role";
import { STATUS } from "enums/status";

export interface IAdminUser {
  email: string;
  password: string;
  confirmPassword?: string;
  role: Role;
  hospital?: string | null;
  doctor?: string;
  admin?: string;
  SuperAdmin?: string;
  status: STATUS;
}
