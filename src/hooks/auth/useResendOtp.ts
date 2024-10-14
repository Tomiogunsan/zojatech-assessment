import { resendOtp } from "@services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { toastAlert } from "@utils/toastConfig";

export const useResendOtp = () => {
  const { mutateAsync } = useMutation({
    mutationFn: resendOtp,
    onSuccess: () => {
        toastAlert.success('OTP resent successfully')
    },
    onError: () => {
        toastAlert.error('Something went wrong')
    }
  });
  return {
    resendOtp: mutateAsync,
  };
};
