import React from "react";

import { Img, Text } from "components";

const RowPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row gap-[30px] items-center justify-start mx-auto self-stretch shadow-bs5 w-auto sm:w-full md:w-full">
        <div className="flex items-start justify-start md:px-5 w-[328px]">
          <div className="bg-white_A700 flex flex-col gap-2.5 items-center justify-start px-10 sm:px-5 py-[35px] w-[328px]">
            <Img
              src="images/img_bitcoinsvgrepocom_yellow_a700.svg"
              className="h-[43px] w-[43px]"
              alt="bitcoinsvgrepoc"
            />
            <Text
              className="font-futuramaxicgbold text-bluegray_901 text-center w-auto"
              variant="body8"
            >
              WEB 3.0 Payments
            </Text>
            <Text
              className="font-futuramaxicglight font-normal leading-[22.00px] text-center text-gray_601"
              variant="body15"
            >
              <>
                Through various Blockchain <br />
                Networks / Wallets
              </>
            </Text>
          </div>
        </div>
        <div className="flex items-start justify-start md:px-5 w-[329px]">
          <div className="bg-white_A700 flex flex-col gap-2.5 items-center justify-start px-10 sm:px-5 py-[35px] w-[328px]">
            <div className="flex items-center justify-start w-1/5 md:w-full">
              <Img
                src="images/img_bag_yellow_a700.svg"
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
              className="font-futuramaxicglight font-normal leading-[22.00px] text-center text-gray_601"
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
        <div className="flex items-start justify-start md:px-5 self-stretch w-auto">
          <div className="bg-white_A700 flex flex-col gap-2.5 h-[227px] md:h-auto items-center justify-start px-10 sm:px-5 py-[35px] w-[328px]">
            <Img
              src="images/img_music_yellow_a700.svg"
              className="h-[49px] w-12"
              alt="music"
            />
            <Text
              className="font-bold font-montserrat text-bluegray_901 text-center tracking-[0.10px] w-auto"
              variant="body6"
            >
              Fast Shipping
            </Text>
            <Text
              className="font-futuramaxicglight font-normal leading-[22.00px] text-center text-gray_601"
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
    </>
  );
};

export default RowPage;
