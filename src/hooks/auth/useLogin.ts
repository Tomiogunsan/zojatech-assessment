import { login } from "@services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { toastAlert } from "@utils/toastConfig";

export const useLogin = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => {
        toastAlert.success("Login successful");
    },
    onError: () => {
        toastAlert.error('Something went wrong')
    },
  });
  return {
    login: mutateAsync,
    loginIsPending: isPending,
  };
};
