'use client';

import CustomButton from "@/components/customComponents/CustomButton";
import FormInput from "@/components/customComponents/formInput";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ForgotPasswordConfirmSchemaType, forgotPasswordConfirmSchema, forgotPasswordSchema } from "@/lib/validation/auth";
import {  forgotPasswordConfirm } from "@/services/api/auth";
import { useAuthStore } from "@/store/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence,motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type ForgotPasswordConfirmType = {
  params: {
    token: string
};
}

export default function ForgotPasswordConfirm ({params}: ForgotPasswordConfirmType) {

    const pathname = usePathname();
    const router = useRouter();
    const loginZustand = useAuthStore((state) => state.login);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    if(!isLoggedIn) {
        router.push('/auth/login')
    }
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        }
        } =  useForm<ForgotPasswordConfirmSchemaType>({
        resolver: zodResolver(forgotPasswordConfirmSchema)
        });

        const {
            status,
            mutate
        }=useMutation({
            mutationFn: forgotPasswordConfirm,
            onSuccess: (data) => {
              const { access_token, refresh_token, role } = data.data;
              loginZustand(access_token, refresh_token, role);
              router.push("/dashboard");
            },
            onError: () => {

            }
        })
        const onSubmit = (data: ForgotPasswordConfirmSchemaType) =>{
                mutate({data , token: params?.token})
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
                id="new_password"
                type="password"
                label="رمزعبور جدید"
                register={register("new_password")}
                error={errors.new_password}
                className="mb-10"
                />
            
            <FormInput 
                id="new_password_retype"
                type="password"
                label="رمزعبور جدید(تکرار)"
                register={register("new_password_retype")}
                error={errors.new_password_retype}
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