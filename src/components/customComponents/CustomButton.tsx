import { MouseEvent } from "react"
import { Button } from "../ui/button"
import Spinner from "./Spinner"

type CustomButtonType = {
    type?: "button" | "submit" | "reset" | undefined,
    className?: string,
    disabled?: boolean | undefined,
    text: string,
    showLoading?: boolean,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}


export default function  CustomButton({
    type = "button",
    className,
    disabled,
    text,
    showLoading,
    onClick
}: CustomButtonType) {
    return  <Button 
    type={type}
     className={`${className} ${!disabled  ? 'cursor-pointer' : 'cursor-not-allowed'}`} 
     disabled={disabled}
     onClick={onClick}
     >
    {showLoading ?
    <div className="flex items-center justify-center">
        <Spinner size={20} />
    </div>
  : text} 
  </Button>
}