
import {z} from 'zod';

// const nationalCodeRegex = /^[0-9]{10,12}$/;

export const createStudentSchema = z.object({
  birth_date: z.date( "تاریخ تولد الزامی است" ),
  full_name: z.string().nonempty("نام کامل را وارد کنید"),
  home_phone_number: z.string().regex(/^\d{8}$/, "تلفن منزل باید دقیقا 8 رقم عددی باشد"),
  id_number: z.string().regex(/^\d{10,12}$/, "کد ملی باید عددی و بین 10 تا 12 رقم باشد"),
  parent_phone_number: z.string().regex(/^\d{11}$/, "شماره والدین باید دقیقا 11 رقم باشد"),
  phone_number: z.string().regex(/^\d{11}$/, "شماره تلفن باید دقیقا 11 رقم باشد"),
  password: z.string().min(8, "رمز عبور باید حداقل 8 کاراکتر باشد"),
});


export type createStudentSchemaType = z.infer<typeof createStudentSchema>