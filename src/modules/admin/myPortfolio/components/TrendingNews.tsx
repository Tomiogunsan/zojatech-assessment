const news = [
  {
    icon: "/russia.png",
    title: "Russia & Ukraine War",
    subtitle: `Marketing is evolving. It's chang...`,
  },

  {
    icon: "/elon.png",
    title: "Elon Musk bought Twitter",
    subtitle: "Twitter is the most useful social pl...",
  },

  {
    icon: "/russia.png",
    title: "Fuel Crisis Everywhere",
    subtitle: "Due to covid situation in 2020 the...",
  },
];

const TrendingNews = () => {
  return (
    <div className="grid gap-y-[12px] bg-white p-[20px] rounded-[16px]">
      <h3 className="text-[20px] leading-7 font-bold text-[#3B3B45]">
        Trending News
      </h3>
      <div className='grid gap-2'>
{news.map((item) => {
    return (
      <div className="flex gap-2 border-[1px] border-[#F1F1F1] rounded-[12px] p-[16px]">
        <div>
          <img src={item.icon} alt="icon" className="w-[40px] h-[40px]" />
        </div>
        <div>
          <p
            className="text-[14px] leading-[18px] font-[600] text-[#3B3B45]"
          >
            {item.title}
          </p>
          <p className="text-[12px] leading-[16px] font-[300] text-[#818187]">
            {item.subtitle}
          </p>
        </div>
      </div>
    );
})}
      </div>
    </div>
  );
};

export default TrendingNews;
