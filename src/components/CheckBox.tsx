import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { AiOutlineCheck } from 'react-icons/ai';


export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
 
}

export function Checkbox (props: CheckboxProps){
  return(
    <CheckboxPrimitive.Root {...props}
    className ='h-6 w-6 p-[1px] border-black border-2 rounded'>
      <CheckboxPrimitive.Indicator asChild>
      <AiOutlineCheck className='h-5 w-5 text-cyan-500' />
      </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
   
  ) 
}