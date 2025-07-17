import { Button } from "../ui/button"
import Spinner from "./Spinner"

type CustomButtonType = {
    type: "button" | "submit" | "reset" | undefined,
    className: string,
    disabled: boolean | undefined,
    text: string,
    showLoading: boolean
}




export default function  CustomButton({
    type,
    className,
    disabled,
    text,
    showLoading
}: CustomButtonType) {
    return  <Button type={type} className={`${className} ${!disabled  ? 'cursor-pointer' : 'cursor-not-allowed'}`} disabled={disabled}>
    {showLoading ?
    <div className="flex items-center justify-center">
        <Spinner size={20} />
    </div>
  : text} 
  </Button>
}