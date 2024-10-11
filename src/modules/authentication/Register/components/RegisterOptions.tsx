

const RegisterOptions = ({onClick}: {onClick: () => void}) => {
  return (
    <>
      <div className="border-[1px] border-[#DDE2E4] p-2 items-center flex gap-2 justify-center cursor-pointer rounded-md mt-4" onClick={onClick}>
        <img src="/signupEmail.png" alt="email" className="w-[24px] h-[24px]" />
        <p className="text-[14px] leading-6 text-[#5B6871]">
          Sign up with email
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 my-2">
        <div className="border-b-[1px] border-[#DDE2E4] w-[172px]" />
        <p className="text-[#5B6871] text-[13px]">or</p>{" "}
        <div className="border-b-[1px] border-[#DDE2E4] w-[172px]" />
      </div>
      <div className=" mb-8 border-[1px] border-[#DDE2E4] p-2 items-center flex gap-2 justify-center cursor-pointer rounded-md">
        <img src="/Google.png" alt="email" className="w-[24px] h-[24px]" />
        <p className="text-[14px] leading-6 text-[#5B6871]">
          Sign up with Google
        </p>
      </div>
    </>
  );
}

export default RegisterOptions