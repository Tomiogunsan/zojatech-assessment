import ChatSession from "./components/ChatSession";
import SideBar from "./components/SideBar";


const Messages = () => {
  return (
    <div className=" px-8  bg-[#f6f6f6] ">
      <div className="grid grid-cols-3 gap-4 p-[32px] rounded-[12px] bg-[#fff]">
        <div className="bg-[#f6f6f6] rounded-[12px] p-[16px]">
          <SideBar />
        </div>
        <div className="col-span-2">
          <ChatSession />
        </div>
      </div>
    </div>
  );
}

export default Messages