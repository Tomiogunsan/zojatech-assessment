import { verifyOtp } from "@services/auth.service"
import { useMutation } from "@tanstack/react-query"


export const useOTP = () => {
    const {mutateAsync, isPending} = useMutation({
        mutationFn: verifyOtp,
        onSuccess: () => {},
        onError: () => {}
    })
    return {
        verifyOtp: mutateAsync,
        otpIsPending: isPending
    }
}