import MessageCard from "shared/MessageCard";
import Search from "shared/Search";

const SideBar = () => {
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
        role="Hi, are you Available Tomorrow?"
        time="10:35 AM"
      />
      <MessageCard
        name="Jamie Taylor"
        avatar="/jamie.png"
        role="Nice One. Will Do it tommorow"
        time="10:35 AM"
      />
      <MessageCard
        name="Amy Frost"
        role="Hi, will you start working on the chat app right now?"
        time="10:35 AM"
        avatar="/amy.png"
      />
    </div>
  );
};

export default SideBar;
