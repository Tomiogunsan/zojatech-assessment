import { registerSchema } from "@modules/authentication/validation";
import { useForm } from "react-hook-form";
import Button from "shared/Button";
import ControlledInputPassword from "shared/Button/InputPassword/ControlledInputPassword";
import ControlledInput from "shared/Input/ControlledInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegisterQuery } from "@services/interface/DTO/auth";
import { useRegister } from "hooks/auth/useRegister";
import CircularProgress from "shared/CircularProgress";
import { useNavigate } from "react-router-dom";
import { AuthPaths } from "@constants/path";

const RegisterWithEmail = () => {
    const navigate = useNavigate()
  const { control, handleSubmit } = useForm<IRegisterQuery>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const { register, registrationIsPending } = useRegister();

  const handleRegister = (data: IRegisterQuery) => {
    register(data);
    localStorage.setItem("email", data.email)
    navigate(`/${AuthPaths.CONFIRM_EMAIL}`)
  };

  return (
    <>
      <p className="text-[13px] leading-5 text-[#5B6871]">
        Proceed to create account and setup your organization
      </p>
      <div className="flex gap-6">
        <ControlledInput
          name="first_name"
          label="First Name"
          control={control}
          startAdornment={<img src="/Name.png" alt="icon" />}
        />
        <ControlledInput
          name="last_name"
          label="Last Name"
          startAdornment={<img src="/Name.png" alt="icon" />}
          control={control}
        />
      </div>
      <ControlledInput
        name="email"
        label={"Email"}
        startAdornment={<img src="/email.png" alt="icon" />}
        asteric
        control={control}
      />
      <ControlledInputPassword
        name="password"
        label="Password"
        startAdornment={<img src="/lock_open.png" alt="icon" />}
        control={control}
      />
      <Button
        type="submit"
        className="w-full mt-[10px]"
        onClick={() =>
          handleSubmit(handleRegister)()
        }
      >
        {registrationIsPending ? <CircularProgress /> : "Create account"}
      </Button>
    </>
  );
};

export default RegisterWithEmail;
