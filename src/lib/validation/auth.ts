import { z } from "zod";

const nationalCodeRegex = /^[0-9]{10,12}$/;

export const loginSchema = z.object({
    id_number: z.string().nonempty("کدملی راوارد کنید").regex(nationalCodeRegex, "کدملی باید عددی و بین ۱۰ تا ۱۲ رقم باشد"),
    password: z.string().nonempty("رمز عبور را وارد کنید"),
  });
export type LoginSchemaType = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z.object({
  current_password: z.string().nonempty('رمز عبور فعلی را وارد کنید'),
  new_password: z.string().nonempty('رمز عبور جدید را وارد کنید').min(8,'حداقل 8 کاراکتر'),
  new_password_retype: z.string().nonempty('رمز عبور جدید را دوباره وارد کنید')
}).refine((data)=>data.new_password === data.new_password_retype,{
  message:'رمز عبور جدید همخوانی ندارد',
  path:['new_password_retype']
});
export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;

export const forgotPasswordSchema = z.object({
  id_number: z.string().nonempty("کدملی راوارد کنید").regex(nationalCodeRegex, "کدملی باید عددی و بین ۱۰ تا ۱۲ رقم باشد"),
})
export type ForgoPasswordSchemaType = z.infer<typeof forgotPasswordSchema>; 

export const forgotPasswordConfirmSchema = z.object({
  new_password: z.string().nonempty('رمز عبور جدید را وارد کنید').min(8,'حداقل 8 کاراکتر'),
  new_password_retype: z.string().nonempty('رمز عبور جدید را دوباره وارد کنید')
}).refine((data)=>data.new_password === data.new_password_retype,{
  message:'رمز عبور جدید همخوانی ندارد',
  path:['new_password_retype']
});
export type ForgotPasswordConfirmSchemaType = z.infer<typeof forgotPasswordConfirmSchema>;