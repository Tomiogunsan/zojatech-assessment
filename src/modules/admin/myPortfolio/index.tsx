import PotentialMembers from "./components/PotentialMembers";
import Revenue from "./components/Revenue";
import TotalCount from "./components/TotalCount"
import TrendingNews from "./components/TrendingNews";
import TrendingPosts from "./components/TrendingPosts";
import WatchList from "./components/WatchList";


const MyPortfolio = () => {
  return (
    <div className="grid grid-cols-3 gap-[32px] px-8 bg-[#f6f6f6]">
      <div className="col-span-2  grid gap-y-[16px] h-screen">
        <TotalCount />
        <div>
          <img src="/overview.png" alt="overview graph" />
        </div>
        <TrendingPosts />
        <PotentialMembers />
      </div>
      <div className='  grid gap-y-[16px] h-screen'>
        <WatchList/>
        <Revenue/>
        <TrendingNews/>
      </div>
    </div>
  );
}

export default MyPortfolio