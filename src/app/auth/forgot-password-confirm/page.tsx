'use client';

import CustomButton from "@/components/customComponents/CustomButton";
import FormInput from "@/components/customComponents/formInput";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ForgoPasswordSchemaType, forgotPasswordSchema } from "@/lib/validation/auth";
import { forgotPassword } from "@/services/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence,motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function ForgotPasswordConfirm () {

    const pathname = usePathname();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        }
        } =  useForm<ForgoPasswordSchemaType>({
        resolver: zodResolver(forgotPasswordSchema)
        });

        const {
            status,
            mutate
        }=useMutation({
            mutationFn: forgotPassword,
            onSuccess: () => {
                    
            },
            onError: () => {

            }
        })
        const onSubmit = (data: ForgoPasswordSchemaType) =>{
                mutate(data)
        }

    return   (
        <AnimatePresence mode="wait">
        <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
        >
        <Card className="w-full max-w-sm m-auto shadow-2xl">
            <CardHeader>
            <CardTitle>تایید کد</CardTitle>
            <CardDescription>
                رمز عبور جدید را واردکنید
            </CardDescription>
            </CardHeader>
            <CardContent className="relative">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <FormInput 
                id="id_number"
                label="کدملی"
                register={register("id_number")}
                error={errors.id_number}
                className="mb-10"
                />
            
                <CustomButton  
                type="submit" 
                className="w-full " 
                disabled={status === "pending"}
                text={'تایید'} 
                showLoading={status === "pending"}
                />
            </form>
            </CardContent>
            <CardFooter />
        </Card>
        </motion.div>
        </AnimatePresence>
    )
}