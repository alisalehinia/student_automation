import axiosInstance from "./axios";
import { LoginSchemaType, ResetPasswordSchemaType } from "@/lib/validation/auth";



export const login = async (data: LoginSchemaType) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const resetPassword = async (data: ResetPasswordSchemaType) =>{
  const response = await axiosInstance.patch('/auth/reset-password', data);
  return response.data;
}