import { twMerge } from "tailwind-merge";
import { ICardProps } from "./interface";


const Card = ({ image, count, smallText, countClassName }: ICardProps) => {
  return (
    <div className="flex justify-between bg-white rounded-[12px] p-[16px] border-[1px] ">
      <div>
        <p
          className={twMerge(
            "text-[25px] leading-8 font-[700] text-[#3B3B45]",
            countClassName
          )}
        >
          {count}
        </p>
        <p className="text-[12px] leading-4 text-[#A3A3A6]">{smallText}</p>
      </div>
      <div>
        <img src={image} alt="icon" className="w-[48px] h-[48px]" />
      </div>
    </div>
  );
};

export default Card;
