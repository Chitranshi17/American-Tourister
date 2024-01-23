import React from "react";
import BannerCard from "./BannerCard";
const Banner = () => {
  const data = [
    {
      id: 1,
      image:
        "https://cdn.anscommerce.com/live/image/americantourister/banner/623_202312190551_Desktop_Banner_4.png",
      heading: "Best Sellers",
      content:
        "Shop American Tourister's best-sellers online. Discover the most popular, top-rated travel gear handpicked by American Tourister fans!",
      btnContent: "Shop Now",
    },
    {
      id: 2,
      image:
        "https://cdn.anscommerce.com/live/image/americantourister/banner/623_202312190630_Desktop_Banner_4_(1).png",
      heading: "New Arrivals",
      content:
        "Shop new carry-on luggage to backpacks. Freshen up your next trip with the latest in luggage and travel gear.",
      btnContent: "Shop Now",
    },
  ];

  return (
    <>
      {data.map((data) => (
        <BannerCard key={data.id} data={data} />
      ))}
    </>
  );
};

export default Banner;
