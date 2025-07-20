"use client";

import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/services/api/auth";
import CustomButton from "@/components/customComponents/CustomButton";
import { AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function WaitForSms() {
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const {
    status,
    mutate
  } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      setSecondsLeft(60);
    },
    onError: () => {
    
    },
  });
  
  const handleResend = () => {
    const id_number = localStorage.getItem("id_number");
    if (!id_number) return;
    mutate({ id_number });
  };
  
  const disabledBtn = status === "pending" || secondsLeft > 0

  return (
    <AnimatePresence mode="wait">
         <Card className="w-full max-w-sm m-auto shadow-2xl">
         <CardHeader>
            <CardTitle className="text-center text-lg">ارسال لینک بازیابی رمز</CardTitle>
            <CardDescription className="text-center text-md">
                 لینک تنظیم رمز عبور به شماره موبایل شما ارسال شد.<br/>
                 لطفاً تا دریافت پیامک منتظر بمانید.
            </CardDescription>
            </CardHeader>
            <CardContent className="relative">
            <CustomButton  
                    type="button" 
                    className={`w-full ${!disabledBtn && 'cursor-pointer'}`} 
                    disabled={disabledBtn}
                    text={secondsLeft > 0
                        ? `ارسال مجدد تا ${secondsLeft} ثانیه`
                        : "ارسال مجدد پیامک"} 
                    showLoading={status === "pending"}
                    onClick={handleResend}
                    />
                </CardContent>
         </Card>
    </AnimatePresence>
  );
}
