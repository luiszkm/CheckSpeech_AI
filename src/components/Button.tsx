import { ButtonHTMLAttributes, ReactNode } from 'react';


 interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string
}

export function Button({ children, className, ...props }: ButtonProps) {

  return (
    <button
      className={className || 'py-3 px-4 bg-cyan-500 rounded-full font-semibold text-black text-sm w-full max-w-fit transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'}
      {...props}>
      {children}
    </button>
  )
}