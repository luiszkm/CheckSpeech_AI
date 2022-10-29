import { InputHTMLAttributes } from "react";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {

 }

export function Input(props: TextInputInputProps) {
  return (

    <div>
       <input className= 'bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400 '
      {...props}
    />
    </div>
   
  
  )
}