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
import { toast } from "sonner"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { LoginSchemaType, loginSchema } from "@/lib/validation/auth";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/api/auth";
import CustomButton from "@/components/customComponents/CustomButton";
import FormInput from "@/components/customComponents/formInput";


export default function Login() {
  const pathname = usePathname();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const {
    mutate,
    status
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { access_token, refresh_token, role } = data.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("role", role);
      router.push("/dashboard");
    },
    onError: (error: any) => {
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    mutate(data);
  };

 
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
        <Card className="w-full max-w-sm m-auto shadow-2xl">
          <CardHeader>
            <CardTitle>ورود</CardTitle>
            <CardDescription>
              برای ورود به حساب کاربری کدملی خود را وارد کنید.
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
              <FormInput 
                id="password"
                label="رمزعبور"
                register={register("password")}
                error={errors.password}
                type="password"
                showForgotPassword
                onForgotPassword={()=>{
                  router.push('/auth/forgot-password')
                }}
              />
              <CustomButton  
                type="submit" 
                className="w-full " 
                disabled={status === "pending"}
                text={'ورود'} 
                showLoading={status === "pending"}
              />
            </form>
          </CardContent>
          <CardFooter />
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
