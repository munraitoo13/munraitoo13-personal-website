import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export function useCaptcha() {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const resetCaptcha = () => {
    captchaRef.current?.reset();
    setCaptchaToken(null);
  };

  return {
    captchaToken,
    captchaRef,
    setCaptchaToken,
    resetCaptcha,
  };
}
