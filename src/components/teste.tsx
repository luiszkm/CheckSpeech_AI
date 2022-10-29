import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
 
const siteKey = import.meta.env.VITE_SITE_KEY

 
export const ReCAPTCHAForm = () => {
  const recaptchaRef = React.useRef<ReCAPTCHA>();
 
  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef?.current?.executeAsync();
 
    // apply to form data
  }
 
  return (
    <form onSubmit={onSubmitWithReCAPTCHA}>
      <ReCAPTCHA
        ref={recaptchaRef as React.RefObject<ReCAPTCHA>}
        sitekey={siteKey}
      />
    </form>
  )
 
}