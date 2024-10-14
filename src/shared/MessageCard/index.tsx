import { twMerge } from "tailwind-merge";


export type IMessageCard = {
    avatar: string;
    name: string;
    role: string;
    icon?: string;
    time?: string;
    className?: string;
}



const MessageCard = ({avatar, name, role, icon, time, className}: IMessageCard) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src={avatar} alt="avatar" className="w-[45px] h-[45px]" />
        <div>
          <p className="text-[16px] leading-5 font-[600] text-[#ff8600]">
            {name}
          </p>
          <p className={twMerge("text-[9px] font-[400] leading-3 text-[#959595]", className)}>
            {role}
          </p>
        </div>
      </div>
      <div>
        {icon && <img src={icon} alt="icon" className="w-[16px] h-[17px]" />}
        {time && <p className="text-[9px] font-[400] leading-[9px] text-[#8d8d8d]">{time}</p>}
      </div>
    </div>
  );
}

export default MessageCard