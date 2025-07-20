'use client';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordSchemaType, resetPasswordSchema } from "@/lib/validation/auth";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/services/api/auth";
import CustomButton from "@/components/customComponents/CustomButton";
import FormInput from "@/components/customComponents/formInput";
import routes from "@/constants/routes";


export default function ResetPassword() {
    const pathname = usePathname();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState:{errors , isSubmitting}
    } = useForm<ResetPasswordSchemaType>({
            resolver: zodResolver(resetPasswordSchema)
        });

    const {
        mutate,
        status
    } = useMutation({
        mutationFn: resetPassword,
        onSuccess: (data)=>{
            router.push(routes.home.url);
        },
        onError: (error : any) =>{
        }
    });

    const onSubmit = (data: ResetPasswordSchemaType) =>{
        mutate(data);
    }

    return (
     <AnimatePresence mode="wait">
        <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
        >
            <Card className="w-full max-w-sm m-auto shadow-2xl ">
                <CardHeader>
                <CardTitle>تغییر رمزعبور</CardTitle>
                <CardDescription>
                رمز عبور قبلی و رمز جدید را وارد کنید.
                </CardDescription>
            
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-6">
                        <FormInput 
                            id="current_password"
                            label="رمزعبور قبلی"
                            register={register("current_password")}
                            error={errors.current_password}
                            type="password"
                        />
                             <FormInput 
                                id="password"
                                label="رمزعبور جدید"
                                register={register("new_password")}
                                error={errors.new_password}
                                type="password"
                            />
                            <FormInput 
                                id="new_password_retype"
                                label="رمزعبور جدید(تکرار)"
                                register={register("new_password_retype")}
                                error={errors.new_password_retype}
                                type="password"
                            />
                        </div>
                        <CustomButton  
                            type="submit" 
                            className="w-full mt-4" 
                            disabled={status === "pending"}
                            text={'تایید'} 
                            showLoading={status === "pending"}
                        />
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    </AnimatePresence>
    )
}