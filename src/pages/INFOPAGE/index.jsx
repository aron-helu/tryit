import React from "react";

import Header1 from "components/Header1";
import { Text, Button, Img } from "components";
import PRODUCTPAGEDESCRIPTIONColumnbackground from "components/PRODUCTPAGEDESCRIPTIONColumnbackground";
import PRODUCTPAGEDESCRIPTIONFooter from "components/PRODUCTPAGEDESCRIPTIONFooter";

const INFOPAGEPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col items-start justify-start mx-auto w-full">
        <div className="flex font-futuramaxicgdemi items-center w-full">
          <Header1 className="bg-gray_900 flex flex-col items-center justify-center md:px-5 w-full" />
        </div>
        <div className="flex items-center justify-start md:ml-[0] ml-[126px] mt-[63px] md:px-5 w-[11%] md:w-full">
          <div className="flex items-center justify-start w-full">
            <div className="flex flex-row items-start justify-between w-full">
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
                className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                variant="body15"
              >
                How it Work
              </Text>
            </div>
          </div>
        </div>
        <Text
          className="font-futuramaxicgbold md:ml-[0] ml-[336px] mt-11 text-gray_911 text-left w-auto"
          variant="body4"
        >
          How it Work
        </Text>
        <div className="flex flex-col font-futuramaxicgbook items-center mt-[1919px] w-full">
          <div className="h-[1170px] md:h-[534px] md:px-5 relative w-full">
            <PRODUCTPAGEDESCRIPTIONColumnbackground
              className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[33%] w-full"
              background="images/img_background_1.png"
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

export default INFOPAGEPage;
