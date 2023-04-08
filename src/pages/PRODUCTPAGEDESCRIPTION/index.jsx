import React from "react";

import ELEMENTSStackrectangleten from "components/ELEMENTSStackrectangleten";
import { Text, Line, List, Img, Button } from "components";
import Header from "components/Header";
import ELEMENTSCard from "components/ELEMENTSCard";
import PRODUCTPAGEDESCRIPTIONColumnbackground from "components/PRODUCTPAGEDESCRIPTIONColumnbackground";
import PRODUCTPAGEDESCRIPTIONFooter from "components/PRODUCTPAGEDESCRIPTIONFooter";

const PRODUCTPAGEDESCRIPTIONPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-futuramaxicgbold items-start justify-start mx-auto w-full">
        <div className="flex items-center w-full">
          <div className="md:h-[1620px] h-[1847px] md:px-5 relative w-full">
            <ELEMENTSStackrectangleten
              className="absolute h-[1620px] inset-[0] justify-center m-auto w-[1621px] md:w-full"
              rectangleten="images/img_rectangle10_281x1616.png"
              rectangleeleven="images/img_rectangle11.png"
              offerOne="Grab Upto 50% Off On Selected TV & Video"
              buyNow="Buy Now"
              imageone="images/img_image1_1.png"
            />
            <div className="absolute bottom-[0] flex flex-col font-hind gap-[50px] items-center justify-start right-[11%] w-[74%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center w-[55%] md:w-full">
                <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
                  <Text
                    className="font-semibold text-center text-gray_911 uppercase w-auto"
                    variant="body11"
                  >
                    Description
                  </Text>
                  <Line className="bg-indigo_900 h-[3px] mt-[3px] rounded-[1px] w-full" />
                </div>
                <Text
                  className="font-semibold md:ml-[0] ml-[90px] text-center text-gray_911 uppercase w-auto"
                  variant="body11"
                >
                  Reviews (4)
                </Text>
                <Text
                  className="font-semibold md:ml-[0] ml-[100px] text-center text-gray_911 uppercase w-auto"
                  variant="body11"
                >
                  Additional Information
                </Text>
              </div>
              <div className="flex flex-col font-roboto items-start justify-start w-full">
                <Text
                  className="font-light leading-[24.00px] text-gray_700 text-left w-full"
                  variant="body13"
                >
                  Praesent nec fermentum ipsum. Etiam turpis neque, laoreet quis
                  placerat vel, faucibus non tortor. Quisque ut augue et augue
                  consequat blandit nec vel leo. Donec aliquam mauris vel
                  ultrices viverra. Donec pulvinar et odio eget commodo.
                  Maecenas massa odio, tincidunt vitae erat sed, sodales
                  malesuada nisl. Sed consequat libero enim, sed porttitor
                  tortor lacinia et. Donec gravida luctus purus a semper. Fusce
                  id tincidunt eros. Vestibulum sit amet nunc id lorem
                  vestibulum euismod id vitae tortor. Pellentesque ac
                  consectetur dui. Aenean nec maximus neque. Nulla facilisi.
                  Vivamus non ex sodales, malesuada mi ac, pulvinar nibh.
                </Text>
                <div className="flex font-hind items-center justify-start mt-9 w-[24%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row gap-20 items-center justify-start w-4/5 md:w-full">
                      <Text
                        className="font-light text-gray_700 text-left uppercase w-auto"
                        variant="body15"
                      >
                        Material:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_911 text-left w-auto"
                        variant="body15"
                      >
                        100% Cotton
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[9px] w-full">
                      <Text
                        className="font-light text-gray_700 text-left uppercase w-auto"
                        variant="body15"
                      >
                        Color:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_911 text-left w-auto"
                        variant="body15"
                      >
                        Gree, Blue, Beige, Pink
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-2 w-[73%] md:w-full">
                      <Text
                        className="font-light text-gray_700 text-left uppercase w-auto"
                        variant="body15"
                      >
                        Sizes:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_911 text-left w-auto"
                        variant="body15"
                      >
                        S, M, L, Xl
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[93px] items-start justify-start mt-[9px] w-[65%] md:w-full">
                      <Text
                        className="font-light text-gray_700 text-left uppercase w-auto"
                        variant="body15"
                      >
                        Weight:
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_911 text-left w-auto"
                        variant="body15"
                      >
                        460 g
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-light leading-[24.00px] mt-9 text-gray_700 text-left w-full"
                  variant="body13"
                >
                  Ut eu ex est. Nam vitae feugiat massa, eu feugiat ligula. Ut
                  justo sem, convallis eget nisi eget, mollis euismod turpis.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Nullam commodo malesuada
                  placerat. Proin blandit, ipsum commodo laoreet finibus, orci
                  purus pharetra elit, sit amet dapibus mauris quam id odio.
                  Fusce ac lectus eros. Quisque turpis libero, interdum eu
                  dictum eu, fermentum sed orci. Mauris id elit tellus.
                </Text>
              </div>
            </div>
            <Header className="absolute bg-gray_900 flex flex-col font-futuramaxicgdemi inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
          </div>
        </div>
        <div className="flex font-hind items-end mt-[137px] md:px-10 sm:px-5 px-[517px] w-full">
          <div className="flex items-center justify-start w-auto md:w-full">
            <Text
              className="text-gray_911 text-left uppercase w-auto"
              as="h5"
              variant="h5"
            >
              Related products
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-montserrat md:gap-10 gap-[63px] items-center mt-14 w-full">
          <div className="flex items-center justify-start max-w-[1088px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[78px] items-center justify-start w-full">
              <List
                className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                {new Array(3).fill({}).map((props, index) => (
                  <React.Fragment key={`ELEMENTSCard${index}`}>
                    <ELEMENTSCard
                      className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <div className="font-hind h-[39px] relative w-[29%]">
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
          <div className="font-futuramaxicgbook h-[1170px] md:h-[534px] md:px-5 relative w-full">
            <PRODUCTPAGEDESCRIPTIONColumnbackground
              className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[33%] w-full"
              background="images/img_background.png"
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

export default PRODUCTPAGEDESCRIPTIONPage;
