import { AdminPath, AuthPagePath } from "@constants/path";
import { GoPerson } from "react-icons/go";
import { RiGroupLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BiDollarCircle } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { logOut } from "helpers/auth";

const ADMIN_SIDENAV = [
  {
    name: "My Portfolio",
    path: AdminPath.MYPORTFOLIO,
    icon: <GoPerson className="text-[#FF8600]" />,
    iconWhite: <GoPerson className="text-[#818187] " />,
  },
  {
    name: "My Group",
    path: AdminPath.MYGROUP,
    icon: <RiGroupLine className="text-[#FF8600]" />,
    iconWhite: <RiGroupLine />,
  },
  {
    name: "Messages",
    path: AdminPath.MESSAGES,
    icon: <FaRegEnvelope className="text-[#FF8600]" />,
    iconWhite: <FaRegEnvelope className="text-[#818187] " />,
  },
  {
    name: "Analytics",
    path: AdminPath.ANALYTICS,
    icon: <IoAnalyticsOutline className="text-[#FF8600]" />,
    iconWhite: <IoAnalyticsOutline className="text-[#818187] " />,
  },
  {
    name: "Pack",
    path: AdminPath.PACK,
    icon: <BiDollarCircle className="text-[#FF8600]" />,
    iconWhite: <BiDollarCircle className="text-[#818187] " />,
  },
  {
    name: "Settings",
    path: AdminPath.SETTINGS,
    icon: <CiSettings className="text-[#FF8600]" />,
    iconWhite: <CiSettings />,
  },
];

const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname.split("/")[2];
  const handleLogout = () => {
    logOut();
    navigate(AuthPagePath.signin(), { replace: true });
  };
  return (
    <div className="overflow-auto bg-[#Ffffffff] flex flex-col border-r-2 border-[#F7F7F8] items-center mt-8 text-[#000] font-[Lexend] h-screen">
      <div className="h-[5rem] px-[28px] py-[8px]">
        <div className="flex gap-2">
          <img src="/Group.png" alt="logo" />
          <p className="font-semibold text-[25px] leading-[33.5px]">Buddy</p>
        </div>{" "}
      </div>
      <div className="flex flex-col gap-2 pl-4 pr-4">
        {ADMIN_SIDENAV.map((sidenav) => (
          <NavLink
            className={twMerge(
              "grid grid-flow-col items-center justify-start gap-3 px-[14px] text-[13px] font-[500] text-[#818187] leading-5 h-[40px]",
              "transition-[all_.3s] rounded-[10px]",
              "[&.active]:bg-white [&.active]:shadow-sm [&.active]:shadow-[#00000012]",
              "[&.active]:text-[#FF8600]"
            )}
            to={sidenav.path}
            key={sidenav.name}
          >
            {pathName === sidenav.path ? (
              <div>{sidenav.icon} </div>
            ) : (
              <div>{sidenav.iconWhite} </div>
            )}
            <span>{sidenav.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col py-8 mt-auto w-[202px]  ">
        <div className="flex flex-col items-center justify-center bg-[#fff] rounded-[12px] shadow-md px-4 pb-4 gap-[6px]">
          <img src="/Ellipse.png" alt="avatar" className="w-[60px] h-[60px]" />
          <h3 className="text-[18px] font-[500] leading-6 text-[#3B3B45]">
            Theresa milly
          </h3>
          <p className="text-[12px] leading-4 font-[400] text-[#818187]">
            Influencer
          </p>
          <div
            className="bg-[#FF860029] rounded-[12px] flex gap-2 items-center justify-center p-4 w-full cursor-pointer"
            onClick={handleLogout}
          >
            <img src="/Logout.png" alt="icon" className="w-[18px]" />
            <p className="text-[#ff8600] text-[14px] leading-5 font-[500]">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
