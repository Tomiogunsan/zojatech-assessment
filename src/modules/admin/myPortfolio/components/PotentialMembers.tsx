import React from "react";

const member = [
  {
    icon: "/wandar.png",
    name: "Wanda Parker",
    handle: "@ashking1234",
    analytics: "10.3%",
  },
  {
    icon: "/terry.png",
    name: "Terry Brown",
    handle: "@ashking1234",
    analytics: "9.8%",
  },
  {
    icon: "/lucas.png",
    name: "Lucas Holmes",
    handle: "@ashking1234",
    analytics: "6.5%",
  },
  {
    icon: "/janice.png",
    name: "Janice Miller",
    handle: "@ashking1234",
    analytics: "8.6%",
  },
  {
    icon: "/brown.png",
    name: "Terry Brown",
    handle: "@ashking1234",
    analytics: "9.8%",
  },
];

const PotentialMembers = () => {
  return (
    <div className="bg-white p-[20px] grid gap-y-[16px]">
      <h3 className="text-[20px] leading-7 font-bold text-[#3B3B45]">
        Potential Members
      </h3>
      <div className="grid grid-cols-5 gap-2">
        {member.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center rounded-[12px] border-[1px] border-[#F1F1F1] bg-white gap-2 p-[16px]">
              <img src={item.icon} alt="icon" className="w-[40px] h-[40px]" />
              <p className="text-[14px] leading-[18px] font-[600]">
                {item.name}
              </p>
              <p className="text-[11px] leading-[13px] font-[400] text-[#818187]">
                {item.handle}
              </p>
              <div className="flex gap-2">
                <img
                  src="/analytics.png"
                  alt="icon"
                  className="w-[16px] h-[10px]"
                />
                <p className="text-[16px] leading-5 font-[700]">
                  {item.analytics}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PotentialMembers;
