import React from "react";

import Frame48095563Nav from "components/Frame48095563Nav";
import Frame48095563Navno from "components/Frame48095563Navno";
import { Text, Input, Img, Button } from "components";
import Frame48095563Openyes from "components/Frame48095563Openyes";

const Frame48095563Page = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-futuramaxicgdemi items-center justify-start mx-auto w-full">
        <div className="h-[129px] md:px-5 relative w-full">
          <Frame48095563Nav className="flex flex-col h-full items-center justify-start m-auto w-full" />
          <Frame48095563Navno
            className="absolute bottom-[13%] flex flex-col items-start justify-start px-2.5 right-[0] w-auto sm:w-full"
            label="All Categories"
            labelOne="All Categories"
            labelTwo="All Categories"
            labelThree="All Categories"
            labelFour="Smart Home"
            labelFive="Smartphones"
            labelSix="Tv & Video"
          />
        </div>
        <div className="bg-gray_900 font-poppins h-[1074px] md:px-5 relative shadow-bs1 w-full">
          <div
            className="bg-cover bg-no-repeat flex h-full items-center justify-end m-auto p-[23px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group7.png')" }}
          >
            <div className="flex flex-col items-center justify-start mt-[94px] w-[67%] md:w-full">
              <Text
                className="font-futuramaxicgbold leading-[75.00px] text-center text-yellow_A700 tracking-[2.14px]"
                as="h4"
                variant="h4"
              >
                <>
                  Feel Free to shop with almost any <br />
                  cryptocurrency
                </>
              </Text>
              <div className="bg-gradient  md:w-full mt-[85px] p-px rounded-lg sm:w-full w-[85%] ">
                <div className="bg-gray_900_99 border-solid flex font-montserrat items-start justify-start sm:px-5 px-8 py-6 rounded-lg self-stretch md:w-full">
                  <div className="flex md:flex-col flex-row gap-7 items-end justify-between w-full">
                    <div className="flex md:flex-1 items-center justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto md:w-full">
                        <div className="flex font-futuramaxicgbook items-center justify-start self-stretch w-auto">
                          <Text
                            className="text-left text-white_A700_ab w-auto"
                            variant="body16"
                          >
                            Search Products
                          </Text>
                        </div>
                        <Input
                          wrapClassName="bg-bluegray_900 flex max-w-[655px] pl-4 pr-[381px] py-3 rounded w-full"
                          className="font-dmsans font-normal italic md:pr-10 p-0 placeholder:text-gray_50 sm:pr-5 text-gray_50 text-left text-lg w-full"
                          type="number"
                          name="field"
                          placeholder="headphones"
                          suffix={
                            <Img
                              src="images/img_mail.svg"
                              className="mt-0.5 mb-[5px] ml-[35px]"
                              alt="mail"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <Button className="bg-yellow_A701 cursor-pointer font-bold min-w-[132px] md:mt-0 mt-[34px] px-10 sm:px-5 py-[15px] rounded-[5px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="font-futuramaxicglight font-normal leading-[32.00px] mt-16 text-center text-white_A700 w-4/5 sm:w-full"
                variant="body6"
              ></Text>
              <Button className="bg-gradient1  mt-[33px] p-px rounded-[5px]">
                <div className="bg-gray_900 border-solid cursor-pointer font-bold font-montserrat min-w-[126px] px-5 py-2.5 rounded-[5px] text-center text-sm text-yellow_A400 tracking-[0.20px]">
                  <div className="bg-gradient1  mt-[33px] p-px rounded-[5px]">
                    Get Started
                  </div>
                </div>
              </Button>
              <div className="bg-white_A700 flex md:flex-col flex-row gap-[30px] items-center justify-start mt-[52px] self-stretch shadow-bs5 w-auto md:w-full">
                <div className="flex items-start justify-start w-[328px]">
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
                <div className="flex items-start justify-start w-[329px]">
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
                <div className="flex items-start justify-start self-stretch w-auto">
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
            </div>
          </div>
          <div className="absolute bg-gray_800_bf flex h-full inset-[0] items-center justify-center m-auto pb-[70px] md:px-10 sm:px-5 px-[70px] w-full">
            <div className="flex items-center justify-start mb-[644px] w-full">
              <div className="bg-gray_900 flex items-center justify-start pt-0.5 w-full">
                <div className="flex items-center justify-end p-[7px] w-full">
                  <Frame48095563Openyes
                    className="flex flex-col items-start justify-start mt-[13px] w-auto md:w-full"
                    labelSeven="Savings"
                    labelEight="International"
                    labelNine="International"
                    labelTen="International"
                    labelEleven="Camera, Photo & Video"
                    labelTwelve="Deposits"
                    labelThirteen="Deposits"
                    labelFourteen="Deposits"
                    labelFifteen="Deposits"
                    labelSixteen="Deposits"
                    title="Binoculars & Scopes"
                    labelSeventeen="Deposits"
                    labelEighteen="Deposits"
                    labelNineteen="Deposits"
                    labelTwenty="Deposits"
                    titleOne="Fixed Deposits"
                    labelTwentyOne="Deposits"
                    labelTwentyTwo="Deposits"
                    title1="Main Accounts"
                    label="Deposits"
                    labelOne="Deposits"
                    labelTwo="Deposits"
                    labelThree="Deposits"
                    title2="Main Accounts"
                    label1="Deposits"
                    labelOne1="Deposits"
                    labelTwo1="Deposits"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame48095563Page;
