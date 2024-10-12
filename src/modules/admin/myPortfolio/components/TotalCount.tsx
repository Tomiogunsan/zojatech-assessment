import Card from "shared/Card";


const TotalCount = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card count="51" smallText="Total Channels" image="/totalChannel.png" />
      <Card count="125" smallText="New Members" image="/newMembers.png" />
      <Card count="789" smallText="All Impressions" image='/impressions.png' />
     
    </div>
  );
}

export default TotalCount