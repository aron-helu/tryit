import React from "react";

import { Img, Text } from "components";

const CardsPage = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row sm:gap-5 md:gap-5 items-center mx-auto overflow-auto w-full">
        <aside className="bg-white_A700 flex flex-col md:hidden justify-start outline outline-yellow_A701 md:px-5 w-[330px]">
          <Img
            src="images/img_bitcoinsvgrepocom.svg"
            className="h-[72px] md:ml-[0] ml-[99px] mr-[159px] mt-[53px] w-[72px]"
            alt="bitcoinsvgrepoc"
          />
          <div className="flex flex-col gap-[26px] items-center justify-start mb-[198px] md:ml-[0] ml-[31px] mr-[90px] mt-[104px] w-auto">
            <Text
              className="font-futuramaxicgbold text-bluegray_901 text-center w-auto"
              variant="body8"
            >
              WEB 3.0 Payments
            </Text>
            <Text
              className="font-futuramaxicgbook font-normal leading-[22.00px] text-center text-gray_601"
              variant="body15"
            >
              <>
                Through various Blockchain <br />
                Networks / Wallets
              </>
            </Text>
          </div>
        </aside>
        <div className="flex-1 h-[212px] md:ml-[0] ml-[93px] md:px-5 relative w-full">
          <div className="border-b border-solid border-yellow_A701 h-[212px] my-auto shadow-bs4 w-[85%]"></div>
          <div className="absolute bg-white_A700 border-b-[12px] border-solid border-yellow_A701 flex flex-col gap-2.5 md:h-auto h-full inset-[0] items-center justify-start m-auto px-10 sm:px-5 py-[35px] w-full sm:w-full">
            <div className="flex items-center justify-start w-[16%] md:w-full">
              <Img
                src="images/img_bag.svg"
                className="h-[39px] w-auto"
                alt="bag"
              />
            </div>
            <Text
              className="font-futuramaxicgbold text-bluegray_901 text-center w-auto"
              variant="body8"
            >
              The Best Electronic Products
            </Text>
            <Text
              className="font-futuramaxicgbook font-normal leading-[22.00px] text-center text-gray_601"
              variant="body15"
            >
              <>
                With + 60.000 electronics products
                <br />
                with the best discounts
              </>
            </Text>
          </div>
        </div>
        <div className="ml-8 md:ml-[0] overflow-x-auto w-[34%]">
          <div className="md:h-[206px] h-[212px] pb-4 md:px-5 relative w-[390px] sm:w-full">
            <div className="h-[203px] mx-auto pb-4 shadow-bs4 w-full"></div>
            <div className="absolute bg-white_A700 border-b-[12px] border-solid border-yellow_A701 flex flex-col gap-[3px] md:h-auto h-full inset-[0] items-center justify-start m-auto pb-[46px] pt-[31px] px-10 sm:px-5 w-[390px] sm:w-full">
              <Img
                src="images/img_music.svg"
                className="h-[49px] w-12"
                alt="music"
              />
              <div className="flex flex-col items-center justify-start w-auto md:w-full">
                <Text
                  className="font-futuramaxicgbold text-bluegray_901 text-center w-auto"
                  variant="body8"
                >
                  Fast Shipping
                </Text>
                <Text
                  className="font-futuramaxicgbook font-normal leading-[22.00px] mt-[3px] text-center text-gray_601"
                  variant="body15"
                >
                  <>
                    receive your products
                    <br /> in 1-3 days
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsPage;
