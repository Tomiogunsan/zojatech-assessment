import Card from "shared/Card";

const Revenue = () => {
  return (
    <div className="bg-white p-[20px] rounded-[16px] grid gap-y-[12px]">
      <h3 className="text-[20px] leading-7 font-bold text-[#3B3B45]">
        Revenue
      </h3>
      <div className='grid gap-2 '>
        <Card
          image="/facebook.png"
          count="$4,000"
          countClassName="text-[18px] font-[600] leading-[24px]"
          smallText="Recently Added Pages"
        />
        <Card
          image="/IG.png"
          count="$2,120"
          countClassName="text-[18px] font-[600] leading-[24px]"
          smallText="Video Monetization"
        />
        <Card
          image="/linkedin.png"
          count="$1,752"
          countClassName="text-[18px] font-[600] leading-[24px]"
          smallText="Community Buildup"
        />
      </div>
    </div>
  );
};

export default Revenue;
