import { useEffect, useState } from "react";

import Button from "shared/Button";

type IMessage = {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
};

const ChatSession = () => {
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
  const [value, setValue] = useState("");
  const [message, setMessage] = useState<IMessage[]>(initialMessages);
  const [lastSender, setLastSender] = useState<string>("David Peters");

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(message));
  }, [message]);

  const getNextSender = () => {
    return lastSender === "David Peters" ? "Lisa Roy" : "David Peters";
  };

  const handleSendMessage = () => {
    if (value) {
      const newSender = getNextSender();
      setMessage([
        ...message,
        {
          id: message.length + 1,
          text: value,
          sender: newSender,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
      setLastSender(newSender);
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

 
  return (
    <div className="p-[40px] flex flex-col justify-between h-screen font-[Inter]">
      <div>
        <div className="flex justify-between py-4">
          <div className="flex gap-[4px] items-center">
            <img
              src="/lisa.png"
              alt="lisa"
              className="w-[45px] h-[45px] mr-2 rounded-full"
            />
            <p className="text-[15px] leading-[18px] font-[600] text-[#2e2e2e]">Lisa Roy</p>
          </div>

          <div className="flex gap-4">
            <img src="/search.png" alt="icon" className="w-[20px] h-[20px]" />
            <img src="/love.png" alt="icon" className="w-[20px] h-[20px]" />
            <img src="/alarm.png" alt="icon" className="w-[20px] h-[20px]" />
          </div>
        </div>
        <hr />

        <div className="flex-1 overflow-y-auto space-y-4 p-4 ">
          {message.map((item) => (
            <div
              key={item.id}
              className={`flex ${
                item.sender === "David Peters" ? "justify-end" : "justify-start"
              }`}
            >
              {item.sender === "Lisa Roy" && (
                <img
                  src="/lisa.png"
                  alt="Lisa's avatar"
                  className="w-[30px] h-[30px] mr-2 rounded-full mt-[16px]"
                />
              )}
              <div
                className={`relative max-w-[70%] p-3 rounded-[10px] shadow-md bg-[#f1f1f1]${
                  item.sender === "David Peters"
                    ? " text-right rounded-br-none"
                    : " text-left rounded-bl-none"
                }`}
              >
                <p
                  className={`text-[16px] leading-5 font-[400]  ${
                    item.sender === "David Peters"
                      ? "text-[#ff8600]"
                      : "text-[#2e2e2e]"
                  }`}
                >
                  {item.text}
                </p>
              </div>
              {item.sender === "David Peters" && (
                <img
                  src="/david.png"
                  alt="David's avatar"
                  className="w-[30px] h-[30px] ml-2 rounded-full mt-[16px]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#d9d9d9] rounded-[12px] px-[40px] py-[28px] sticky bottom-0">
        <div className="flex gap-[13px] ">
          <div className="flex items-center  gap-4 bg-white p-2 rounded-[16px] w-full ">
            <img src="/mic.png" alt="icon" className="w-[16px] h-[22px]" />
            <input
              type="text"
              placeholder="Write something..."
              className="bg-transparent outline-none relative"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              onKeyDown={handleKeyDown}
            />
            <div className="flex gap-2 bg-white absolute right-[140px]">
              <img
                src="/attachment.png"
                alt="icon"
                className="w-[24px] h-[20px]"
              />
              <img src="/camera.png" alt="icon" className="w-[24px] h-[20px]" />
              <img src="/smile.png" alt="icon" className="w-[24px] h-[20px]" />
            </div>
          </div>
          <Button
            type="submit"
            className="rounded-full "
            onClick={handleSendMessage}
          >
            <img src="/send.png" alt="icon" className="w-[36px] h-[36px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatSession;
