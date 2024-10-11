import { register } from "@services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { toastAlert } from "@utils/toastConfig";

export const useRegister = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toastAlert.success("Registration successful");
    },
    onError: () => {
      toastAlert.error("Something went wrong");
    },
  });

  return {
    register: mutateAsync,
    registrationIsPending: isPending,
  };
};
