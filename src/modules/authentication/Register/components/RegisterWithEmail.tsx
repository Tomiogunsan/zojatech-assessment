import { useForm } from "react-hook-form";
import Button from "shared/Button";
import ControlledInputPassword from "shared/Button/InputPassword/ControlledInputPassword";
import ControlledInput from "shared/Input/ControlledInput";


const RegisterWithEmail = () => {
     const { control } = useForm();
  return (
    <>
      <p className="text-[13px] leading-5 text-[#5B6871]">
        Proceed to create account and setup your organization
      </p>
      <div className="flex gap-6">
        <ControlledInput
          name="firstname"
          label="First Name"
          control={control}
          startAdornment={<img src="/Name.png" alt="icon" />}
        />
        <ControlledInput
          name="lastname"
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
      <Button type="submit" className="w-full mt-[10px]">
        Create account
      </Button>
    </>
  );
}

export default RegisterWithEmail