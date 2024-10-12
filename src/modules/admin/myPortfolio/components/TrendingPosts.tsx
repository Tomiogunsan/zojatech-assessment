

const title = [
  {
    title: "8 Upcoming Influencer Marketing Trends and Benefits",
    description:
      "Marketing is evolving. It's changing from a one-way street to a two-way conversa…",
  },
  {
    title: "How Influencer Marketing Affects Consumer Buying Behavior",
    description:
      "As influencer marketing continues to grow, consumers have been turning to their…",
  },
];

const TrendingPosts = () => {
  return (
    <div className="p-[24px] bg-[#fff] grid gap-y-2">
      <h3 className="text-[20px] leading-7 font-bold text-[#3B3B45]">
        Trending posts
      </h3>
    <div className="grid grid-cols-2 gap-4">
        {title.map((item) => {
          return (
            <div className="border-[1px] rounded-[12px] p-[16px] grid gap-y-2 border-[#F1F1F1]">
              <p className="text-[18px] font-[600] leading-6 text-[#3B3B45]">
                {item.title}
              </p>
              <p className="text-[14px] font-[300] leading-5 text-[#818187]">
                {item.description}
              </p>
              <div className="flex gap-4">
                <img src="/260.png" alt="icon" className="w-[64px] h-[27px]" />
                <img src="/234.png" alt="icon" className="w-[64px] h-[27px]" />
                <img src="/123.png" alt="icon" className="w-[64px] h-[27px]" />
              </div>
            </div>
          );
        })}
    </div>
    </div>
  );
}

export default TrendingPosts