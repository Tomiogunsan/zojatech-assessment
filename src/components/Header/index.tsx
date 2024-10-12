import { useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const location = useLocation();
  const title = location.pathname
    .split("/")
    .splice(2)
    .join(" / ")
    .replace("-", " ");
  const headerTitle = title.replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="flex justify-between items-center py-[24px] bg-[#f6f6f6] w-full px-8">
      <div>
        <h3 className="text-[25px] leading-[33px] text-[#3B3B45] font-bold">
          {headerTitle}
        </h3>
      </div>
      <div className="flex gap-4 ">
        <div className="flex items-center  gap-4 bg-white p-2 rounded-[16px] w-[422px]">
          <button className="cursor-pointer text-[#aaa6a6]">
            <IoIosSearch />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
        </div>
        <div className="w-[48px] h-[48px]">
          <img src="/plus.png" alt="icon" />
        </div>
        <div className="w-[48px] h-[48px]">
          <img src="/bell.png" alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
