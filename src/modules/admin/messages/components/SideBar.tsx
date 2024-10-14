import MessageCard from "shared/MessageCard";
import Search from "shared/Search";
import { IMessage } from "..";

import { formatTime } from "helpers/date";

const SideBar = ({ message }: { message: IMessage[] }) => {
  return (
    <div className="grid gap-y-[26px]">
      <MessageCard
        name="David Peters"
        avatar="/david.png"
        role="Senior Developer"
        icon="/clarity_pencil-line.png"
        className="!font-[600] !text-[#545454]"
      />
      <Search placeholderText="Search Here..." />
      <MessageCard
        name="Lisa Roy"
        avatar="/lisa.png"
        role={
          message.filter((item) => item.sender === "Lisa Roy").pop()
            ?.text as string
        }
        time={formatTime(
          message.filter((item) => item.sender === "Lisa Roy").pop()
            ?.timestamp as string
        )}
      />
    </div>
  );
};

export default SideBar;
