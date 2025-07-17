'use client';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type formInputProps = {
    id: string,
    label: string,
    type?: string,
    register: UseFormRegisterReturn,
    error?: FieldError
}

export default function FormInput({
    id,
    label,
    type = "text",
    register,
    error,
}: formInputProps) {

    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === "password";

    return (
        <div className="grid gap-2 relative">
            <Label htmlFor={id}>{label}</Label>
            <Input 
                id={id} 
                type={isPasswordField ? (showPassword ? "text" : "password") : type}
                {...register}
             />
                {isPasswordField && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute  left-3 bottom-2.5 flex items-center text-gray-500 hover:text-gray-800"
                    tabIndex={-1}
                >
                    {!showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                )}
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