import { register } from "@services/auth.service";
import { IRegisterResponse } from "@services/interface/response/auth";
import { useMutation } from "@tanstack/react-query";
import { toastAlert } from "@utils/toastConfig";
import { setToken } from "helpers/auth";

export const useRegister = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: register,

    onSuccess: (data: IRegisterResponse) => {
      setToken(data.data.data.token);
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
