import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "./Input";
 
const siteKey = import.meta.env.VITE_SITE_KEY

 
export const ReCAPTCHAForm = () => {
  const recaptchaRef = React.useRef<ReCAPTCHA>();
 
  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef?.current?.executeAsync();
    
    // apply to form data
  }
 
  return (

      <ReCAPTCHA
        ref={recaptchaRef as React.RefObject<ReCAPTCHA>}
        sitekey={siteKey}
      />
      
      
  )
 
}