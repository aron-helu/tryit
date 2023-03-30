import React from "react";

import { Img, Text } from "components";

const CardsOnePage = () => {
  return (
    <>
      <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start mx-auto py-2.5 self-stretch w-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col items-center justify-start p-[31px] md:px-5 rounded-[16px] shadow-bs7 w-full">
          <div className="bg-gray_900 flex h-[69px] md:h-auto items-center justify-center mt-[50px] rounded-[34px] w-[69px]">
            <Img
              src="images/img_volume.svg"
              className="h-[69px] rounded-[50%] w-[69px]"
              alt="volume"
            />
          </div>
          <Text
            className="font-futuramaxicgbold mt-[52px] text-bluegray_901 text-left w-auto"
            variant="body7"
          >
            WEB 3.0 Payments
          </Text>
          <Text
            className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[50px] mt-[23px] text-center text-gray_601"
            variant="body15"
          >
            <>
              Through various Blockchain <br />
              Networks / Wallets
            </>
          </Text>
        </div>
        <div className="bg-white_A700 flex flex-col items-center justify-start p-[23px] md:px-5 rounded-[16px] shadow-bs7 w-full">
          <div className="md:h-[127px] h-[70px] mt-[57px] relative w-[85px]">
            <div className="bg-gray_900 h-[69px] m-auto rounded-[34px] w-[69px]"></div>
            <div className="absolute h-[70px] inset-[0] justify-center m-auto px-[7px] w-full">
              <Img
                src="images/img_bag.svg"
                className="h-[50px] m-auto w-[50px]"
                alt="bag"
              />
              <Img
                src="images/img_contrast.svg"
                className="absolute h-[70px] inset-[0] justify-center m-auto w-[70px]"
                alt="contrast"
              />
            </div>
          </div>
          <Text
            className="font-futuramaxicgbold mt-[50px] text-bluegray_901 text-left w-auto"
            variant="body8"
          >
            The Best Electronic Products
          </Text>
          <Text
            className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[58px] mt-[27px] text-center text-gray_601"
            variant="body15"
          >
            <>
              With + 60.000 electronics products
              <br />
              with the best discounts
            </>
          </Text>
        </div>
        <div className="bg-white_A700 flex flex-col items-center justify-start p-[31px] md:px-5 rounded-[16px] shadow-bs7 w-full">
          <div className="bg-gray_900 flex h-[69px] md:h-auto items-center justify-center mt-[49px] rounded-[34px] w-[69px]">
            <Img
              src="images/img_ticket.svg"
              className="h-[69px] rounded-[50%] w-[69px]"
              alt="ticket"
            />
          </div>
          <Text
            className="font-futuramaxicgbold mt-12 text-bluegray_901 text-left w-auto"
            variant="body8"
          >
            Fast Shipping
          </Text>
          <Text
            className="font-futuramaxicgbook font-normal leading-[22.00px] mb-[49px] mt-[22px] text-center text-gray_601"
            variant="body15"
          >
            <>
              receive your products
              <br /> in 1-3 days
            </>
          </Text>
        </div>
      </div>
    </>
  );
};

export default CardsOnePage;
