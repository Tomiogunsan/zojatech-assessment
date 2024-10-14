import { useEffect, useState } from "react";
import ChatSession from "./components/ChatSession";
import SideBar from "./components/SideBar";

export type IMessage = {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
};

const Messages = () => {
    const initialMessages = () => {
      const savedMessages = localStorage.getItem("messages");
      return savedMessages
        ? JSON.parse(savedMessages)
        : [
            {
              id: 1,
              text: "Hello",
              sender: "David Peters",
              timestamp: new Date().toLocaleTimeString(),
            },
            {
              id: 2,
              text: "Hi",
              sender: "Lisa Roy",
              timestamp: new Date().toLocaleTimeString(),
            },
          ];
    };
  const [message, setMessage] = useState<IMessage[]>(initialMessages);
  
   useEffect(() => {
     localStorage.setItem("messages", JSON.stringify(message));
   }, [message]);

  
  return (
    <div className=" px-8  bg-[#f6f6f6] ">
      <div className="grid grid-cols-3 gap-4 p-[32px] rounded-[12px] bg-[#fff]">
        <div className="bg-[#f6f6f6] rounded-[12px] p-[16px]">
          <SideBar message={message} />
        </div>
        <div className="col-span-2 bg-[#f6f6f6] rounded-[12px] p-[16px]">
          <ChatSession message={message} setMessage={setMessage} />
        </div>
      </div>
    </div>
  );
}

export default Messages