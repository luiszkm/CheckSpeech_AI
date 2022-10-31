import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
 }

export function Input(props: TextInputInputProps) {
  return (

    <div className="flex items-center gap-2 py-2 px-1 rounded-lg border-2 border-black focus-within:border-cyan-500  ">
      {props.icon}
       <input className= 'bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400 '
      {...props}
    />
    </div>
   
  
  )
}