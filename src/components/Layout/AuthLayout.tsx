type IAuthLayoutProps = {
    children: React.ReactNode;
    bottomText?: string;
}


const buddyText = [
  "Track real-time overview of company’s financial performance.",
  "Track created projects budget against actual revenue and expenses.",
  "Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.",
];


const AuthLayout = ({ children, bottomText }: IAuthLayoutProps) => {
  return (
    <div className="grid lg:grid-cols-2 w-full h-screen">
      <div className="bg-[#fff] hidden lg:block">
        <div className="m-[113px]">
          <div className="flex gap-2">
            <img src="/Group.png" alt="logo" />
            <p className="font-semibold text-[25px] leading-[33.5px]">Buddy</p>
          </div>
          <div className="mt-[127px] grid gap-y-[37px]">
            {buddyText.map((item) => {
              return (
                <div className="flex items-center gap-2">
                  <img src="/Checkbox.png" alt="bullet" />
                  <p className="text-[#5B6871] text-[18px] leading-[24px]">
                    {item}
                  </p>
                </div>
              );
            })}
            <p className="text-[#84919A] text-[13px] leading-[19px] mt-[100px]">
              © 2022 Revvex. All rights reserved
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F8FAFC]  w-full h-full">
        <div className=" m-[160px] bg-[#fff]">{children}</div>
        {bottomText && (
          <div className="flex gap-2 bg-[#FF8600] absolute bottom-[97px] right-[110px] p-[15px] rounded-[60px]">
            <p className="text-[#fff] text-[14px] leading-6">Get Help</p>
            <img src="/question.png" alt="question" />
          </div>
        )}
       
      </div>
    </div>
  );
};

export default AuthLayout