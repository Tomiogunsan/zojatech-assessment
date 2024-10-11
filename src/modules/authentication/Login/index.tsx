import AuthLayout from "@components/Layout/AuthLayout";
import { AuthPaths, BasePaths } from "@constants/path";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginQuery } from "@services/interface/DTO/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "shared/Button";
import ControlledInputPassword from "shared/Button/InputPassword/ControlledInputPassword";
import ControlledInput from "shared/Input/ControlledInput";
import { loginSchema } from "../validation";
import { useLogin } from "hooks/auth/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<ILoginQuery>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const { login } = useLogin();

  const handleLogin = (data: ILoginQuery) => {
    login(data);

    navigate(BasePaths.ADMIN);
  };

  return (
    <AuthLayout bottomText>
      <div className="grid gap-y-4 p-[50px] w-full">
        <h3 className="text-[24px] leading-6 font-semibold">
          Log in to your account
        </h3>
        <p className="text-[13px] leading-5 text-[#5B6871]">
          Proceed to create account and setup your organization
        </p>
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
          onClick={() => handleSubmit(handleLogin, (err) => console.log(err))()}
        >
          Login
        </Button>
        <p className="text-[#84919A] text-[13px] leading-5 mt-[10px]">
          By clicking the button above, you agree to our{" "}
          <span className="text-[#ff8600]">Terms of Service</span> and{" "}
          <span className="text-[#ff8600]">Privacy Policy.</span>
        </p>
        <p className="text-[14px] leading-6 text-[#5B6871] pt-[32px]">
          Don’t have an account?{" "}
          <span className="text-[#ff8600] cursor-pointer">
            <Link to={`/${AuthPaths.REGISTER}`}>Register</Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
