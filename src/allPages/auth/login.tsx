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

export default function Login() {

  
  return (
    <div className="w-full h-screen 
    flex justify-center 
   relative
    max-w-screen
    overflow-x-hidden
    ">
      <div className="absolute border-2 top-[50%] right-[10%] h-[200px] w-[200px] rounded-2xl hidden md:block -rotate-12 shadow-lg -z-10 " />
      <div className="absolute border-2 top-[30%] right-[20%] h-[120px] w-[120px] rounded-2xl hidden md:block rotate-12 shadow-lg -z-10" />
      <div className="absolute border-2 top-[50%] right-[50%] h-[300px] w-[300px] rounded-2xl hidden md:block rotate-6 shadow-lg -z-10" />
      <div className="absolute border-2 top-[0%] right-[80%] h-[400px] w-[400px] rounded-2xl hidden md:block rotate-45 shadow-lg -z-10" />
      <Card className="w-full max-w-sm m-auto shadow-2xl ">
        <CardHeader>
          <CardTitle>ورود</CardTitle>
          <CardDescription>
            برای ورود به حساب کاربری شماره موبایل خود را وارد کنید.
          </CardDescription>
          <CardAction>
            <Button variant="link">ثبت نام</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="phone">شماره موبایل</Label>
                <Input
                  id="phone"
                  type="phone"
                  placeholder="...09"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">رمز عبور</Label>
                  <a
                    href="#"
                    className="mr-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    فراموشی؟                </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" onClick={()=>{
            toast("عملیات با موفقیت انجام شد")
          }}>
            ورود
          </Button>
          
        </CardFooter>
      </Card>
    </div>
  )
}
