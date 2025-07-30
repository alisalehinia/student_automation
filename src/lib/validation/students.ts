
import {z} from 'zod';

const nationalCodeRegex = /^[0-9]{10,12}$/;

export const createStudentSchema = z.object({
    birth_date : z.date(),
    full_name: z.string().nonempty('نام کامل را وادر کنید'),
    home_phone_number: z.string().nonempty('تلفن منزل را وارد کنید'),
    id_number: z.string().nonempty("کدملی راوارد کنید").regex(nationalCodeRegex, "کدملی باید عددی و بین ۱۰ تا ۱۲ رقم باشد"),
    parent_phone_number: z.string().nonempty("شماره والدین را وارد کنید"),
    password: z.string().min(8),
    phone_number: z.string().min(11, 'شماره تلفن باید حداقل 11 رقم باشد').regex(/^[0-9]+$/, 'شماره تلفن باید عددی باشد'),
})

export type createStudentSchemaType = z.infer<typeof createStudentSchema>