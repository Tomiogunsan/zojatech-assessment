import Button from "shared/Button";
import { IEmailVerificationAndConfirmationProps } from "./interface";

const EmailVerificationAndConfirmation = ({
  buttonText,
  description,
  image,
  title,
  onClick,
  bottomText,
}: IEmailVerificationAndConfirmationProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-[102px] py-[41px]">
      <img src={image} alt="icon" className="w-[76px] h-[76px]" />
      <h3 className="text-[24px] leading-6 text-[#1D1D18] font-bold">
        {title}
      </h3>
      <p className="text-[14px] leading-6 text-[#5B6871] text-center">
        {description}
      </p>
      <Button type="submit" onClick={onClick}>
        {buttonText}
      </Button>
      <p className="text-[14px] leading-6 text-[#5B6871] pt-[32px]">
        {bottomText}
      </p>
    </div>
  );
};

export default EmailVerificationAndConfirmation;
