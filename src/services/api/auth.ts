import axiosInstance from "./axios";
import { ForgoPasswordSchemaType, ForgotPasswordConfirmSchemaType, LoginSchemaType, ResetPasswordSchemaType } from "@/lib/validation/auth";



export const login = async (data: LoginSchemaType) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const resetPassword = async (data: ResetPasswordSchemaType) =>{
  const response = await axiosInstance.patch('/auth/reset-password', data);
  return response.data;
}

export const forgotPassword = async(data: ForgoPasswordSchemaType) => {
  const response = await axiosInstance.post("/auth/forgot-password", data);
  return response;
}

export const forgotPasswordConfirm = async ({
  data,
  token,
}: {
  data: ForgotPasswordConfirmSchemaType;
  token: string;
}) =>{
  const response = await axiosInstance.post(`/auth/forgot-password-confirm/${token}`,data);
  return response;
}