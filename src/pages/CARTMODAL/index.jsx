import React from "react";

import Frame48095563Nav from "components/Frame48095563Nav";
import Frame48095563Navno from "components/Frame48095563Navno";
import { Text, Input, Img, Button, Line } from "components";

const CARTMODALPage = () => {
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
        <div className="bg-gray_900 font-roboto h-[1074px] md:px-5 relative shadow-bs1 w-full">
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
                    <div className="flex md:flex-1 items-center justify-start w-[81%] md:w-full">
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
                    <div className="bg-yellow_A701 flex items-center justify-start md:mt-0 mt-[34px] px-10 sm:px-5 py-[15px] rounded-[5px] self-stretch w-auto">
                      <Text
                        className="font-bold text-center text-gray_900 tracking-[0.20px] w-auto"
                        variant="body15"
                      >
                        Search
                      </Text>
                    </div>
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
          <div className="absolute bg-gray_800_bf flex h-full inset-[0] items-end justify-center m-auto pb-[397px] md:pl-10 sm:pl-5 pl-[397px] w-full">
            <div className="flex items-center justify-start w-[79%] md:w-full">
              <div className="overflow-x-auto w-full">
                <div className="h-[677px] overflow-auto relative w-full">
                  <div className="absolute h-[677px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bg-white_A700 flex h-full inset-[0] items-start justify-center m-auto p-[41px] md:px-10 sm:px-5 w-[98%]">
                      <div className="flex flex-col items-start justify-start mb-1.5 md:ml-[0] ml-[3px] w-[93%] md:w-full">
                        <Text
                          className="font-futuramaxicgbold text-gray_911 text-left w-auto"
                          variant="body4"
                        >
                          Cart
                        </Text>
                        <div className="flex md:flex-col flex-row font-hind md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[57px] w-[98%] md:w-full">
                          <Text
                            className="font-light md:mt-0 mt-1 text-gray_700 text-left uppercase w-auto"
                            variant="body15"
                          >
                            Item
                          </Text>
                          <Text
                            className="font-light mb-1 md:ml-[0] ml-[398px] text-gray_700 text-left uppercase w-auto"
                            variant="body15"
                          >
                            Price
                          </Text>
                          <Text
                            className="font-light mb-[3px] md:ml-[0] ml-[110px] text-gray_700 text-left uppercase w-auto"
                            variant="body15"
                          >
                            Quantity
                          </Text>
                          <Text
                            className="font-light mb-1 md:ml-[0] ml-[98px] text-gray_700 text-left uppercase w-auto"
                            variant="body15"
                          >
                            Subtotal
                          </Text>
                        </div>
                        <div className="flex flex-row font-futuramaxicgbook items-start justify-between ml-auto mt-[346px] w-[42%] md:w-full">
                          <Text
                            className="font-normal text-gray_911 text-left w-auto"
                            variant="body13"
                          >
                            Order Total
                          </Text>
                          <div className="md:h-[23px] h-[42px] relative w-[35%]">
                            <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                              <div className="flex items-center justify-start mx-auto w-full">
                                <Text
                                  className="text-left text-purple_900 w-auto"
                                  variant="body7"
                                >
                                  $ 1,039.95
                                </Text>
                              </div>
                              <div className="flex items-center justify-start ml-[33px] mt-[-0.66px] w-[21px] z-[1]">
                                <Img
                                  src="images/img_arrowdown_teal_300.svg"
                                  className="h-5 rounded-[50%] w-[21px]"
                                  alt="arrowdown_Two"
                                />
                              </div>
                            </div>
                            <Text
                              className="absolute bottom-[5%] font-futuramaxicgdemi right-[26%] text-gray_600_a0 text-left w-auto"
                              variant="body16"
                            >
                              USDT
                            </Text>
                          </div>
                        </div>
                        <Button className="bg-yellow_A700 cursor-pointer font-hind font-normal md:ml-[0] ml-[475px] mt-[41px] not-italic md:pl-10 pl-[85px] pr-[30px] sm:px-5 py-2.5 rounded-[19px] text-center text-gray_911 text-lg w-[342px]">
                          Procesed to Checkout
                        </Button>
                      </div>
                    </div>
                    <div className="absolute flex items-start justify-start right-[0] top-[29%] w-[96%]">
                      <div className="flex flex-col gap-[58px] justify-start w-[87%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex md:flex-1 items-center justify-start w-[16%] md:w-full">
                            <Img
                              src="images/img_bg_127x124.png"
                              className="h-[127px] md:h-auto object-cover w-full"
                              alt="bg"
                            />
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[11px] md:mt-0 mt-7 w-auto md:w-full">
                            <Text
                              className="font-hind font-light text-gray_403 text-left uppercase w-auto"
                              variant="body15"
                            >
                              AMAZON
                            </Text>
                            <Text
                              className="font-futuramaxicgdemi leading-[18.00px] text-gray_911 text-left tracking-[-0.07px]"
                              variant="body14"
                            >
                              <>
                                V-Series 65&quot; Class 4K <br />
                                HDR Smart TV V655-G9
                              </>
                            </Text>
                          </div>
                          <div className="md:h-5 h-9 md:ml-[0] ml-[78px] md:mt-0 mt-[51px] relative w-[11%] md:w-full">
                            <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                              <div className="flex items-center justify-start mx-auto w-full">
                                <Text
                                  className="font-normal text-left text-purple_900 w-auto"
                                  variant="body13"
                                >
                                  $ 1,039.95
                                </Text>
                              </div>
                              <div className="flex items-center justify-start ml-[21px] mt-[-0.54px] w-[21px] z-[1]">
                                <Img
                                  src="images/img_arrowdown_teal_300.svg"
                                  className="h-5 rounded-[50%] w-[21px]"
                                  alt="arrowdown_Three"
                                />
                              </div>
                            </div>
                            <Text
                              className="absolute bottom-[14%] font-futuramaxicgdemi right-[19%] text-gray_600_a0 text-left w-auto"
                              variant="body17"
                            >
                              USDT
                            </Text>
                          </div>
                          <div className="bg-white_A700 border border-gray_403 border-solid flex md:flex-1 flex-row items-center justify-end mb-[41px] md:ml-[0] ml-[78px] md:mt-0 mt-11 pl-[9px] py-[9px] rounded-[21px] w-[12%] md:w-full">
                            <Text
                              className="font-light my-0.5 text-gray_700 text-left w-auto"
                              variant="body13"
                            >
                              -
                            </Text>
                            <Text
                              className="font-medium ml-2.5 my-0.5 text-gray_700 text-left w-auto"
                              variant="body13"
                            >
                              1
                            </Text>
                            <Text
                              className="font-light ml-3 my-0.5 text-gray_700 text-left w-auto"
                              variant="body13"
                            >
                              +
                            </Text>
                            <Img
                              src="images/img_close_gray_403.svg"
                              className="h-[19px] mb-[5px] ml-[290px] w-5"
                              alt="close"
                            />
                          </div>
                          <div className="md:h-5 h-9 md:ml-[0] ml-[78px] md:mt-0 mt-[43px] relative w-[11%] md:w-full">
                            <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                              <div className="flex items-center justify-start mx-auto w-full">
                                <Text
                                  className="font-normal text-left text-purple_900 w-auto"
                                  variant="body13"
                                >
                                  $ 1,039.95
                                </Text>
                              </div>
                              <div className="flex items-center justify-start ml-[21px] mt-[-0.54px] w-[21px] z-[1]">
                                <Img
                                  src="images/img_arrowdown_teal_300.svg"
                                  className="h-5 rounded-[50%] w-[21px]"
                                  alt="arrowdown_Four"
                                />
                              </div>
                            </div>
                            <Text
                              className="absolute bottom-[14%] font-futuramaxicgdemi right-[19%] text-gray_600_a0 text-left w-auto"
                              variant="body17"
                            >
                              USDT
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[135px] w-auto md:w-full">
                          <Text
                            className="font-hind font-light text-gray_403 text-left uppercase w-auto"
                            variant="body15"
                          >
                            EBAY
                          </Text>
                          <Text
                            className="font-futuramaxicgdemi leading-[18.00px] text-gray_911 text-left tracking-[-0.07px]"
                            variant="body14"
                          >
                            <>
                              V-Series 65&quot; Class 4K <br />
                              HDR Smart TV V655-G9
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[29%] flex md:flex-col flex-row md:gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[131px] right-[0] w-[99%]">
                    <div className="flex items-center justify-start w-[15%] md:w-full">
                      <Img
                        src="images/img_bg_127x122.png"
                        className="h-[127px] md:h-auto object-cover w-full"
                        alt="bg_One"
                      />
                    </div>
                    <div className="md:h-5 h-9 md:ml-[0] ml-[271px] md:mt-0 mt-[53px] relative w-[11%] md:w-full">
                      <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                        <Text
                          className="font-normal mx-auto text-left text-purple_900 w-auto"
                          variant="body13"
                        >
                          $ 1,039.95
                        </Text>
                        <div className="flex items-center justify-start ml-[22px] mt-[-0.53px] w-[21px] z-[1]">
                          <Img
                            src="images/img_arrowdown_teal_300.svg"
                            className="h-5 rounded-[50%] w-[21px]"
                            alt="arrowdown_Five"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[14%] font-futuramaxicgdemi right-[18%] text-gray_600_a0 text-left w-auto"
                        variant="body17"
                      >
                        USDT
                      </Text>
                    </div>
                    <div className="bg-white_A700 border border-gray_403 border-solid flex flex-row items-center justify-end md:ml-[0] ml-[79px] md:mt-0 my-[42px] pl-[9px] py-[9px] rounded-[21px] w-[12%] md:w-full">
                      <Text
                        className="font-light my-0.5 text-gray_700 text-left w-auto"
                        variant="body13"
                      >
                        -
                      </Text>
                      <Text
                        className="font-medium ml-2.5 my-0.5 text-gray_700 text-left w-auto"
                        variant="body13"
                      >
                        1
                      </Text>
                      <Text
                        className="font-light ml-3 my-0.5 text-gray_700 text-left w-auto"
                        variant="body13"
                      >
                        +
                      </Text>
                      <Img
                        src="images/img_close_gray_403.svg"
                        className="h-[19px] mb-[5px] ml-[299px] w-5"
                        alt="close_One"
                      />
                    </div>
                    <div className="md:h-5 h-9 md:ml-[0] ml-[78px] md:mt-0 mt-[43px] relative w-[11%] md:w-full">
                      <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                        <div className="flex items-center justify-start mx-auto w-full">
                          <Text
                            className="font-normal text-left text-purple_900 w-auto"
                            variant="body13"
                          >
                            $ 1,039.95
                          </Text>
                        </div>
                        <div className="flex items-center justify-start ml-[21px] mt-[-0.53px] w-[21px] z-[1]">
                          <Img
                            src="images/img_arrowdown_teal_300.svg"
                            className="h-5 rounded-[50%] w-[21px]"
                            alt="arrowdown_Six"
                          />
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[14%] font-futuramaxicgdemi right-[19%] text-gray_600_a0 text-left w-auto"
                        variant="body17"
                      >
                        USDT
                      </Text>
                    </div>
                  </div>
                  <Line className="absolute bg-bluegray_50 h-px inset-y-[0] my-auto right-[0] w-[96%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CARTMODALPage;
