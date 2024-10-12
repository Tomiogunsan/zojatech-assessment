

const WatchList = () => {
  return (
    <div className="p-[20px] rounded-[16px] bg-white grid gap-y-[12px]">
      <div className="flex justify-between items-center   ">
        <p className="text-[20px] leading-[26px] font-[700] text-[#3B3B45]">
          Watchlist
        </p>
        <p className="text-[12px] font-[600] leading-4 text-[#FF8600]">
          View All
        </p>
      </div>
      <img src="/Stocks.png" alt="icon" />
      <img src="/Stocks2.png" alt="icon" />
    </div>
  );
}

export default WatchList