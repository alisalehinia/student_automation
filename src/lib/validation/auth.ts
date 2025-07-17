import { z } from "zod";


export const loginSchema = z.object({
    id_number: z.string().nonempty("کدملی راوارد کنید").min(10, "کدملی باید ۱۰ رقم باشد"),
    password: z.string().nonempty("پسورد را وارد کنید"),
  });

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z.object({
  current_password: z.string().nonempty('پسورد فعلی را وارد کنید'),
  new_password: z.string().nonempty('پسورد جدید را وارد کنید').min(8,'حداقل 8 کاراکتر'),
  new_password_retype: z.string().nonempty('پسورد جدید را دوباره وارد کنید')
}).refine((data)=>data.new_password === data.new_password_retype,{
  message:'پسورد جدید همخوانی ندارد',
  path:['new_password_retype']
});

export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;