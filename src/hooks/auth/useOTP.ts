import { verifyOtp } from "@services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { toastAlert } from "@utils/toastConfig"


export const useOTP = () => {
    const {mutateAsync, isPending} = useMutation({
        mutationFn: verifyOtp,
        onSuccess: () => {
            toastAlert.success("OTP verified successfully")
        },
        onError: () => {
            toastAlert.error("Something went wrong")
        }
    })
    return {
        verifyOtp: mutateAsync,
        otpIsPending: isPending
    }
}