import React from "react";

import { Text, Button, Img } from "components";

const CardssectionexampleFivePage = () => {
  return (
    <>
      <div className="bg-gray_900 flex font-montserrat items-center justify-end mx-auto py-1.5 w-full">
        <div className="bg-gray_900 flex h-[625px] md:h-auto items-center justify-start max-w-[1632px] mt-[22px] pb-[100px] pt-[59px] w-full">
          <div className="flex flex-col gap-[59px] items-center justify-start max-w-[1175px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="font-semibold font-urbanist text-left text-white_A700 w-auto"
                  variant="body3"
                ></Text>
                <Text
                  className="font-futuramaxicgbook font-normal leading-[29.00px] max-w-[1175px] md:max-w-full text-left text-white_A700"
                  variant="body11"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  est amet a ornare tempus, risus. Integer in nunc tempus nunc,
                  risus, vel vitae ut. Ut sodales fusce purus risus, turpis
                  faucibus. Ipsum adipiscing nunc.
                </Text>
              </div>
              <Button className="bg-yellow_A701 cursor-pointer font-bold leading-[normal] min-w-[150px] sm:px-5 px-8 py-4 rounded-lg text-center text-gray_900 text-sm uppercase w-auto">
                SHOP NOW
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start md:pl-10 sm:pl-5 pl-[74px] py-2.5 w-full">
              <div className="flex items-start justify-start w-[328px]">
                <div className="bg-white_A700 flex flex-col gap-2.5 items-center justify-start outline outline-yellow_A701 px-10 sm:px-5 py-[35px] w-[328px]">
                  <Img
                    src="images/img_bitcoinsvgrepocom.svg"
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
              <div className="border border-solid border-yellow_A701 flex items-start justify-start w-[329px]">
                <div className="bg-white_A700 border-b-[12px] border-solid border-yellow_A701 flex flex-col gap-2.5 h-[212px] md:h-auto items-center justify-start px-10 sm:px-5 py-[35px] w-[328px]">
                  <div className="flex items-center justify-start w-1/5 md:w-full">
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
              <div className="flex h-[212px] md:h-auto items-start justify-start pb-4 self-stretch w-auto">
                <div className="bg-white_A700 border-b-[12px] border-solid border-yellow_A701 flex flex-col gap-[3px] h-[212px] md:h-auto items-center justify-start pb-[46px] pt-[31px] px-10 sm:px-5 w-[328px]">
                  <Img
                    src="images/img_search_yellow_a701_49x48.svg"
                    className="h-[49px] w-12"
                    alt="search"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CardssectionexampleFivePage;
