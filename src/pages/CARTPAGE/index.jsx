import React from "react";

import Header1 from "components/Header1";
import { Text, Img, Line, Button, SelectBox, Input, List } from "components";
import ELEMENTSCard from "components/ELEMENTSCard";
import PRODUCTPAGEDESCRIPTIONColumnbackground from "components/PRODUCTPAGEDESCRIPTIONColumnbackground";
import PRODUCTPAGEDESCRIPTIONFooter from "components/PRODUCTPAGEDESCRIPTIONFooter";

const CARTPAGEPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-futuramaxicgdemi items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="bg-gray_900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-row items-start justify-start mt-[61px] md:px-5 w-[14%] md:w-full">
            <div className="flex items-center justify-start w-[53%]">
              <div className="flex items-center justify-start w-full">
                <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                  <Text
                    className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                    variant="body15"
                  >
                    Home
                  </Text>
                  <Text
                    className="font-medium font-roboto text-gray_700 text-left w-auto"
                    variant="body13"
                  >
                    |
                  </Text>
                  <Text
                    className="font-futuramaxicgbook font-normal mt-[3px] text-gray_700 text-left w-auto"
                    variant="body15"
                  >
                    Shop
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="font-medium font-roboto ml-[18px] text-gray_700 text-left w-auto"
              variant="body13"
            >
              |
            </Text>
            <Text
              className="font-futuramaxicgbook font-normal ml-[15px] mt-0.5 text-gray_700 text-left w-auto"
              variant="body15"
            >
              Cart Page
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-futuramaxicgbold gap-[29px] items-start justify-end ml-auto mt-[51px] md:px-5 w-[89%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-24 items-start justify-start w-[67%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-gray_911 text-left w-auto"
                  variant="body4"
                >
                  Cart Page
                </Text>
                <div className="flex md:flex-col flex-row font-hind md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[68px] w-[84%] md:w-full">
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
                <div className="font-roboto sm:h-[283px] h-[285px] md:h-[386px] mt-9 relative w-full">
                  <div className="absolute flex inset-x-[0] items-center justify-start mx-auto top-[0] w-[99%]">
                    <div className="flex flex-col gap-[58px] justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <div className="flex md:flex-1 items-center justify-start w-[14%] md:w-full">
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
                        <div className="md:h-5 h-9 md:ml-[0] ml-[78px] md:mt-0 mt-[51px] relative w-[10%] md:w-full">
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
                                alt="arrowdown_One"
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
                        <div className="bg-white_A700 border border-gray_403 border-solid flex md:flex-1 flex-row items-center justify-center mb-[41px] md:ml-[0] ml-[78px] md:mt-0 mt-11 p-2.5 rounded-[21px] w-[11%] md:w-full">
                          <Text
                            className="font-light ml-3.5 text-gray_700 text-left w-auto"
                            variant="body13"
                          >
                            -
                          </Text>
                          <Text
                            className="font-medium ml-2.5 text-gray_700 text-left w-auto"
                            variant="body13"
                          >
                            1
                          </Text>
                          <Text
                            className="font-light mx-[13px] text-gray_700 text-left w-auto"
                            variant="body13"
                          >
                            +
                          </Text>
                        </div>
                        <div className="md:h-5 h-9 md:ml-[0] ml-[78px] md:mt-0 mt-[43px] relative w-[10%] md:w-full">
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
                                alt="arrowdown_Two"
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
                        <Img
                          src="images/img_close_gray_403.svg"
                          className="h-[19px] md:ml-[0] ml-[102px] md:mt-0 mt-[53px] w-5"
                          alt="close"
                        />
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
                  <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto w-full">
                    <div className="flex md:flex-1 items-center justify-start w-[13%] md:w-full">
                      <Img
                        src="images/img_bg_127x122.png"
                        className="h-[127px] md:h-auto object-cover w-full"
                        alt="bg_One"
                      />
                    </div>
                    <div className="md:h-5 h-9 md:ml-[0] ml-[271px] md:mt-0 mt-[53px] relative w-[9%] md:w-full">
                      <div className="flex flex-col font-futuramaxicgbold m-auto w-full">
                        <Text
                          className="font-normal mx-auto text-left text-purple_900 w-auto"
                          variant="body13"
                        >
                          $ 1,039.95
                        </Text>
                        <div className="flex items-center justify-start ml-[22px] mt-[-0.54px] w-[21px] z-[1]">
                          <Img
                            src="images/img_arrowdown_teal_300.svg"
                            className="h-5 rounded-[50%] w-[21px]"
                            alt="arrowdown_Three"
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
                    <div className="bg-white_A700 border border-gray_403 border-solid flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[79px] md:mt-0 my-[42px] p-2.5 rounded-[21px] w-[11%] md:w-full">
                      <Text
                        className="font-light ml-3.5 text-gray_700 text-left w-auto"
                        variant="body13"
                      >
                        -
                      </Text>
                      <Text
                        className="font-medium ml-2.5 text-gray_700 text-left w-auto"
                        variant="body13"
                      >
                        1
                      </Text>
                      <Text
                        className="font-light mx-[13px] text-gray_700 text-left w-auto"
                        variant="body13"
                      >
                        +
                      </Text>
                    </div>
                    <div className="md:h-5 h-9 md:ml-[0] ml-[78px] md:mt-0 mt-[43px] relative w-[9%] md:w-full">
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
                    <Img
                      src="images/img_close_gray_403.svg"
                      className="h-[19px] md:ml-[0] ml-[111px] md:mt-0 mt-[52px] w-5"
                      alt="close_One"
                    />
                  </div>
                  <Line className="absolute bg-bluegray_50 h-px inset-[0] justify-center m-auto w-full" />
                </div>
                <div className="flex flex-row font-hind gap-20 items-center justify-end ml-auto mt-[50px] w-2/5 md:w-full">
                  <Button className="bg-yellow_A700 cursor-pointer font-normal min-w-[136px] not-italic sm:px-5 px-[30px] py-2.5 rounded-[19px] text-center text-gray_911 text-lg w-auto">
                    Clear Cart
                  </Button>
                  <Button className="border border-gray_900 border-solid cursor-pointer font-normal min-w-[154px] not-italic sm:px-5 px-[30px] py-2.5 rounded-[19px] text-center text-gray_900 text-lg w-auto">
                    Update Cart
                  </Button>
                </div>
              </div>
              <div className="flex flex-col font-hind gap-3.5 items-start justify-start ml-0.5 md:ml-[0] w-[62%] md:w-full">
                <Text
                  className="font-semibold text-gray_911 text-left uppercase w-auto"
                  variant="body6"
                >
                  Coupon Discount
                </Text>
                <div className="h-[42px] relative w-full">
                  <div className="absolute bg-white_A700 border border-gray_403 border-solid flex font-roboto h-full inset-[0] items-start justify-center m-auto p-2.5 rounded-[21px] w-full">
                    <Text
                      className="font-light md:ml-[0] ml-[9px] text-gray_700 text-left w-auto"
                      variant="body13"
                    >
                      Enter your code here
                    </Text>
                  </div>
                  <Button className="absolute bg-yellow_A700 cursor-pointer font-hind font-normal h-full inset-y-[0] min-w-[116px] my-auto not-italic py-1.5 right-[0] rounded-[21px] text-center text-gray_900 text-lg w-auto">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-bluegray_50 flex flex-col font-hind items-center justify-start md:mt-0 mt-[99px] p-[50px] md:px-10 sm:px-5 w-[32%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                <Text
                  className="font-hind font-medium text-gray_911 text-left uppercase w-auto"
                  variant="body6"
                >
                  Shipping
                </Text>
                <SelectBox
                  className="bg-white_A700 border border-gray_403 border-solid font-light font-roboto mt-3.5 px-5 py-2.5 rounded-[21px] text-base text-gray_700 text-left w-full"
                  placeholderClassName="text-gray_700"
                  name="country"
                  placeholder="Vietnam"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_403.svg"
                      className="h-[19px] mr-[0] w-3.5"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Input
                  wrapClassName="bg-white_A700 border border-gray_403 border-solid mt-2.5 pl-5 pr-[35px] py-[11px] rounded-[21px] w-full"
                  className="font-light font-roboto p-0 placeholder:text-gray_700 sm:pr-5 text-base text-gray_700 text-left w-full"
                  name="city"
                  placeholder="State/City"
                ></Input>
                <Input
                  wrapClassName="bg-white_A700 border border-gray_403 border-solid mt-2.5 pl-5 pr-[35px] py-[11px] rounded-[21px] w-full"
                  className="font-light font-roboto p-0 placeholder:text-gray_700 sm:pr-5 text-base text-gray_700 text-left w-full"
                  name="zip"
                  placeholder="ZIP"
                ></Input>
                <Button className="bg-yellow_A700 cursor-pointer font-hind font-normal min-w-[116px] md:ml-[0] ml-[221px] mt-[15px] not-italic sm:px-5 px-[30px] py-2.5 rounded-[19px] text-center text-gray_900 text-lg w-auto">
                  Submit
                </Button>
              </div>
              <div className="flex items-center justify-start mt-24 w-[98%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="font-bold text-gray_911 text-left w-auto"
                      variant="body11"
                    >
                      Subtotal
                    </Text>
                    <Text
                      className="font-bold text-gray_911 text-right w-auto"
                      variant="body11"
                    >
                      $325
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-2.5 w-full">
                    <Text
                      className="font-normal not-italic text-gray_911 text-left w-auto"
                      variant="body11"
                    >
                      Shipping
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_911 text-right w-auto"
                      variant="body11"
                    >
                      Free
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[39px] w-full">
                    <Text
                      className="font-normal not-italic text-gray_911 text-left w-auto"
                      variant="body5"
                    >
                      Order Total
                    </Text>
                    <Text
                      className="font-semibold text-gray_911 text-right w-auto"
                      variant="body5"
                    >
                      $325
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-yellow_A700 cursor-pointer font-normal mb-2.5 min-w-[347px] mt-[77px] not-italic py-[9px] rounded-[24px] text-center text-gray_900 text-lg w-auto">
                Procesed to Checkout
              </Button>
            </div>
          </div>
          <div className="flex font-hind items-center justify-start mt-[145px] md:px-5 w-auto md:w-full">
            <Text
              className="text-gray_911 text-left uppercase w-auto"
              as="h5"
              variant="h5"
            >
              Related products
            </Text>
          </div>
          <div className="flex font-montserrat items-center justify-start max-w-[1458px] mt-[59px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[71px] items-center justify-start w-full">
              <List
                className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                {new Array(4).fill({}).map((props, index) => (
                  <React.Fragment key={`ELEMENTSCard${index}`}>
                    <ELEMENTSCard
                      className="flex flex-1 flex-col items-center justify-start mb-[3px] sm:ml-[0] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <div className="font-hind h-[39px] relative w-[21%]">
                <div className="absolute flex h-full inset-[0] items-center justify-center m-auto w-[58%]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="h-[39px] relative w-[18%]">
                      <div className="absolute bg-yellow_A700 h-[30px] inset-[0] justify-center m-auto rounded-[50%] w-[30px]"></div>
                      <Text
                        className="absolute font-medium h-full inset-[0] justify-center m-auto text-gray_900 text-left w-max"
                        variant="body6"
                      >
                        1
                      </Text>
                    </div>
                    <Text
                      className="font-medium text-gray_600 text-left w-auto"
                      variant="body6"
                    >
                      2
                    </Text>
                    <Text
                      className="font-medium text-gray_600 text-left w-auto"
                      variant="body6"
                    >
                      3
                    </Text>
                    <Text
                      className="font-medium text-gray_600 text-left w-auto"
                      variant="body6"
                    >
                      4
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_arrows.svg"
                  className="absolute bottom-[15%] h-6 inset-x-[0] mx-auto w-auto"
                  alt="arrows"
                />
              </div>
            </div>
          </div>
          <div className="font-futuramaxicgbook h-[1170px] md:h-[690px] mt-[156px] md:px-5 relative w-full">
            <PRODUCTPAGEDESCRIPTIONColumnbackground
              className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[33%] w-full"
              background="images/img_background_2.png"
              teamsaroundthe="Shop safely with the best crypto payment processors"
            />
            <div className="absolute bg-gray_51 bottom-[0] md:h-[534px] h-[560px] inset-x-[0] mx-auto sm:pl-5 pl-[26px] pt-[26px] w-full">
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[534px] items-start justify-end p-[66px] md:px-10 sm:px-5 right-[0] w-[91%]"
                style={{ backgroundImage: "url('images/img_group78.png')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[53px] mr-auto mt-56 w-4/5 md:w-full">
                  <Text
                    className="font-normal leading-[22.00px] text-gray_701 text-left w-auto"
                    variant="body15"
                  >
                    Get weekly update about our product on your email, no spam
                    guaranteed we promise ✌️
                  </Text>
                  <div className="md:h-20 h-[115px] md:mt-0 mt-2.5 relative w-[61%] md:w-full">
                    <div className="absolute bg-white_A700 flex flex-row font-futuramaxicgbook gap-[26px] inset-x-[0] items-center justify-start mx-auto p-[13px] shadow-bs top-[0] w-full">
                      <Button className="bg-purple_900 flex h-[54px] items-center justify-center ml-0.5 p-[7px] w-[54px]">
                        <Img
                          src="images/img_emailicon.png"
                          className=""
                          alt="emailicon"
                        />
                      </Button>
                      <Text
                        className="text-gray_702 text-left w-auto"
                        variant="body8"
                      >
                        youremail123@gmail.com
                      </Text>
                    </div>
                    <Button className="absolute bg-yellow_A700 bottom-[0] cursor-pointer font-poppins font-semibold leading-[normal] min-w-[206px] py-[23px] right-[0] text-base text-center text-gray_900 tracking-[2.56px] w-auto">
                      SUBSCRIBE
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute flex font-codeprobold items-center justify-start left-[9%] top-[16%] w-2/5">
                <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start w-[83%] md:w-full">
                    <Text
                      className="text-gray_900 text-left tracking-[0.67px] w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Subscribe to
                    </Text>
                    <Img
                      src="images/img_minimize.svg"
                      className="h-[33px] w-auto"
                      alt="minimize"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
                    <div className="bg-gray_901 h-1.5 mb-6 sm:mt-0 mt-[50px] rotate-[-90deg] w-[7%]"></div>
                    <Text
                      className="text-gray_900 text-left tracking-[0.67px] w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Our Newsletter
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex font-montserrat inset-x-[0] items-center justify-start mx-auto py-20 self-stretch top-[0] w-auto">
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start self-stretch w-auto md:w-full">
                <div className="flex items-center justify-start w-[33%] md:w-full">
                  <div className="h-[445px] relative w-full">
                    <div className="bg-white_A700 flex h-full items-center justify-start m-auto w-full">
                      <div className="h-[300px] relative w-full">
                        <Img
                          src="images/img_unsplashqyc13qbgam4.png"
                          className="h-[300px] m-auto object-cover w-full"
                          alt="unsplashqyc13qb"
                        />
                        <div className="absolute bg-gradient5  h-[300px] inset-[0] justify-center m-auto w-full"></div>
                      </div>
                    </div>
                    <div className="absolute flex h-full inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[49px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-center justify-end ml-auto w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                          <Text
                            className="font-bold font-montserrat text-gray_800 text-left tracking-[0.20px] w-auto"
                            variant="body15"
                          >
                            Ends Today
                          </Text>
                          <Text
                            className="font-bold font-montserrat leading-[32.00px] mt-5 text-gray_900 text-left tracking-[0.10px]"
                            variant="body6"
                          >
                            <>
                              Elements Of <br />
                              Style
                            </>
                          </Text>
                          <Text
                            className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-left text-white_A700"
                            variant="body16"
                          >
                            <>
                              Top Ten Products of the <br />
                              Week
                            </>
                          </Text>
                          <Text
                            className="font-futuramaxicgbook font-normal mt-[23px] text-left text-yellow_A400 tracking-[-0.21px] underline w-auto"
                            variant="body15"
                          >
                            Explore Items
                          </Text>
                        </div>
                        <Img
                          src="images/img_printedsummerdress.png"
                          className="sm:flex-1 h-[445px] md:h-auto object-cover w-[52%] sm:w-full"
                          alt="printedsummerdr"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex relative w-[67%] md:w-full">
                  <div className="flex items-center justify-start my-auto w-[54%]">
                    <div className="h-[460px] relative w-full">
                      <div className="bg-white_A700 flex h-full items-center justify-start my-auto w-[92%]">
                        <div className="h-[300px] relative w-full">
                          <Img
                            src="images/img_unsplashqyc13qbgam4_300x510.png"
                            className="h-[300px] m-auto object-cover w-full"
                            alt="unsplashqyc13qb_One"
                          />
                          <div className="absolute bg-gradient5  h-[300px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                      </div>
                      <div className="absolute h-[460px] inset-[0] justify-center m-auto md:pl-10 sm:pl-5 pl-[49px] w-full">
                        <Text
                          className="font-bold mt-[142px] text-gray_800 text-left tracking-[0.20px] w-auto"
                          variant="body15"
                        >
                          Ends Today
                        </Text>
                        <div className="absolute font-futuramaxicgbook h-[460px] inset-y-[0] my-auto right-[0] w-[92%] sm:w-full">
                          <div className="absolute flex h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[33%]">
                            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                              <Text
                                className="font-bold font-montserrat leading-[32.00px] text-gray_900 text-left tracking-[0.10px]"
                                variant="body6"
                              >
                                <>
                                  Elements Of <br />
                                  Style
                                </>
                              </Text>
                              <Text
                                className="font-futuramaxicgdemi leading-[18.00px] text-left text-white_A700"
                                variant="body16"
                              >
                                <>
                                  Top Ten Products of the <br />
                                  Week
                                </>
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="absolute bottom-[28%] font-normal left-[0] text-left text-yellow_A400 tracking-[-0.21px] underline w-auto"
                            variant="body15"
                          >
                            Explore Items
                          </Text>
                          <Img
                            src="images/img_image1_294x364.png"
                            className="absolute h-[460px] inset-y-[0] my-auto object-cover right-[0] w-[81%]"
                            alt="printedsummerdr_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start ml-[-18px] my-auto w-[49%] z-[1]">
                    <div className="h-[414px] relative w-full">
                      <div className="bg-white_A700 flex h-full items-center justify-start mt-12 mx-auto w-full">
                        <div className="h-[300px] relative w-full">
                          <Img
                            src="images/img_unsplashqyc13qbgam4_1.png"
                            className="h-[300px] m-auto object-cover w-full"
                            alt="unsplashqyc13qb_Two"
                          />
                          <div className="absolute bg-gradient5  h-[300px] inset-[0] justify-center m-auto w-full"></div>
                        </div>
                      </div>
                      <div className="absolute flex h-full inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[49px] w-full">
                        <div className="flex sm:flex-col flex-row gap-[43px] items-center justify-end ml-auto w-full">
                          <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                            <Text
                              className="font-bold font-montserrat text-gray_800 text-left tracking-[0.20px] w-auto"
                              variant="body15"
                            >
                              Ends Today
                            </Text>
                            <Text
                              className="font-bold font-montserrat leading-[32.00px] mt-5 text-gray_900 text-left tracking-[0.10px]"
                              variant="body6"
                            >
                              <>
                                Elements Of <br />
                                Style
                              </>
                            </Text>
                            <Text
                              className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-left text-white_A700"
                              variant="body16"
                            >
                              <>
                                Top Ten Products of the <br />
                                Week
                              </>
                            </Text>
                            <Text
                              className="font-futuramaxicgbook font-normal mt-[23px] text-left text-yellow_A400 tracking-[-0.21px] underline w-auto"
                              variant="body15"
                            >
                              Explore Items
                            </Text>
                          </div>
                          <Img
                            src="images/img_printedsummerdress_414x255.png"
                            className="sm:flex-1 h-[414px] md:h-auto object-cover w-[56%] sm:w-full"
                            alt="printedsummerdr_Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PRODUCTPAGEDESCRIPTIONFooter className="bg-gray_900 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CARTPAGEPage;
