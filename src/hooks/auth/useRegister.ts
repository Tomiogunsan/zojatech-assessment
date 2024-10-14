import { AuthPaths } from "@constants/path";
import { register } from "@services/auth.service";
import { IRegisterResponse } from "@services/interface/response/auth";
import { useMutation } from "@tanstack/react-query";
import { toastAlert } from "@utils/toastConfig";
import { setToken } from "helpers/auth";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate()
  const { mutateAsync, isPending } = useMutation({
    mutationFn: register,

    onSuccess: (data: IRegisterResponse) => {
      setToken(data.data.data.token);
       navigate(`/${AuthPaths.CONFIRM_EMAIL}`);
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
