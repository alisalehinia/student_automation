'use client';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { ChangeEvent } from "react";

type formInputProps = {
    id: string,
    label: string,
    type?: string,
    register: UseFormRegisterReturn,
    error?: FieldError,
    className?: string,
    showForgotPassword?: boolean, 
    onForgotPassword?: () => void 
}

function convertPersianDigitsToEnglish(value: string): string {
    return value.replace(/[۰-۹]/g, (w) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(w)));
  }

export default function FormInput({
    id,
    label,
    type = "text",
    register,
    error,
    className,
    showForgotPassword,
    onForgotPassword
}: formInputProps) {

    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === "password";

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const englishValue = convertPersianDigitsToEnglish(e.target.value);
        e.target.value = englishValue;
        register.onChange(e); 
      };
      
    return (
        <div className={`grid gap-2 ${className}`}>
           <div className="relative">
            <div className="flex items-center justify-between mb-2">
                <Label htmlFor={id}>{label}</Label>
                {showForgotPassword && (
                <button
                    type="button"
                    onClick={onForgotPassword}
                    className="text-xs text-blue-600 dark:text-blue-100 hover:underline"
                >
                    فراموشی رمز؟
                </button>
                )}
            </div>
            <Input
                id={id}
                type={isPasswordField ? (showPassword ? "text" : "password") : type}
                {...register}
                onChange={handleChange}
            />
            {isPasswordField && (
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 bottom-2 flex items-center text-gray-500 hover:text-gray-800"
                tabIndex={-1}
                >
                {!showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
            )}
            </div>


                <AnimatePresence mode="wait" initial={false}>
                    {
                        error?.message && 
                        <motion.p 
                            key={error.message}
                            initial={{opacity:0, y:4}}
                            animate={{opacity:1,y:0}}
                            exit={{opacity: 0,y: -4}}
                            transition={{duration: 0.25}}
                            className="text-red-600 text-xs"
                        >
                            {error.message}
                        </motion.p>
                    }
            </AnimatePresence>
        </div>
    )
}