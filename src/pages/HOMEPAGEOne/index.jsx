import React from "react";

import Frame48095563Nav from "components/Frame48095563Nav";
import { Img, Text, Input, Button, List, Line } from "components";
import HOMEPAGEColmd from "components/HOMEPAGEColmd";
import ELEMENTSCard from "components/ELEMENTSCard";
import HOMEPAGEColumnThirteen from "components/HOMEPAGEColumnThirteen";
import ELEMENTSRowproductcoverfiveOne from "components/ELEMENTSRowproductcoverfiveOne";
import PRODUCTPAGEDESCRIPTIONColumnbackground from "components/PRODUCTPAGEDESCRIPTIONColumnbackground";
import PRODUCTPAGEDESCRIPTIONFooter from "components/PRODUCTPAGEDESCRIPTIONFooter";

const HOMEPAGEOnePage = () => {
  const homepageColmdPropList = [
    {
      h2: (
        <>
          DSLR <br />
          CAMERAS
        </>
      ),
      imageone: "images/img_image1.png",
    },
    {
      h2: (
        <>
          SMART
          <br />
          WATCHS
        </>
      ),
      imageone: "images/img_image1_294x312.png",
    },
    {
      h2: (
        <>
          OLED........
          <br />
          TVS ........
        </>
      ),
      imageone: "images/img_image1_294x364.png",
    },
  ];
  const elementsRowproductcoverfiveOnePropList = [
    { productcoverfiveOne: "images/img_productcover5.png" },
    { productcoverfiveOne: "images/img_productcover5_2.png" },
    { productcoverfiveOne: "images/img_productcover5_1.png" },
    { productcoverfiveOne: "images/img_image1_294x312.png" },
  ];

  return (
    <>
      <div className="bg-white_A700 flex font-futuramaxicgdemi items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start md:px-5 w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[324px] w-[84%] md:w-full">
            <Frame48095563Nav className="flex flex-col items-center justify-center w-full" />
            <div className="flex flex-col relative w-full">
              <div className="bg-gray_900 md:h-[864px] h-[870px] mx-auto pt-[5px] w-full">
                <Img
                  src="images/img_bg_864x1621.png"
                  className="h-[864px] m-auto object-cover w-auto md:w-full"
                  alt="bg"
                />
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[59%]">
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
                  <div className="bg-gradient  md:w-full mt-[85px] p-px rounded-lg sm:w-full w-[93%] ">
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
                    className="font-futuramaxicglight font-normal leading-[32.00px] mt-16 text-center text-white_A700 w-[88%] sm:w-full"
                    variant="body6"
                  ></Text>
                  <Button className="bg-gradient1  mt-[33px] p-px rounded-[5px]">
                    <div className="bg-gray_900 border-solid cursor-pointer font-bold font-montserrat min-w-[126px] px-5 py-2.5 rounded-[5px] text-center text-sm text-yellow_A400 tracking-[0.20px]">
                      <div className="bg-gradient1  mt-[33px] p-px rounded-[5px]">
                        Get Started
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex md:flex-col flex-row gap-[30px] items-center justify-center mt-[-46px] mx-auto self-stretch shadow-bs5 w-auto z-[1]">
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
          <div className="font-futuramaxicgbold h-[480px] md:h-[520px] mt-[60px] overflow-auto relative w-full">
            <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-end mx-auto pr-0.5 py-20 self-stretch w-auto">
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1954px] w-full"
                orientation="horizontal"
              >
                {homepageColmdPropList.map((props, index) => (
                  <React.Fragment key={`HOMEPAGEColmd${index}`}>
                    <HOMEPAGEColmd
                      className="h-[317px] relative w-full"
                      h6="Featured"
                      h6One="Explore Items"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div className="absolute flex items-center justify-start right-[30%] top-[0] w-[459px] sm:w-full">
              <Text
                className="font-normal text-bluegray_901 text-center w-auto"
                variant="body5"
              >
                CATEGORIES
              </Text>
            </div>
          </div>
          <div className="flex font-futuramaxicgbook items-center justify-start md:ml-[0] ml-[381px] w-[78%] md:w-full">
            <div className="flex items-center justify-start w-full">
              <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex items-start justify-start w-[223px]">
                    <Text
                      className="font-normal text-center text-gray_900 uppercase w-auto"
                      variant="body15"
                    >
                      PC Game Hardware
                    </Text>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row gap-[23px] items-center justify-end w-[74%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start self-stretch w-auto md:w-full">
                      <div className="flex items-start justify-start self-stretch w-auto">
                        <div className="flex items-center justify-start px-5 py-2.5 rounded-[5px] self-stretch w-auto">
                          <Text
                            className="font-normal text-center text-yellow_A700 w-auto"
                            variant="body15"
                          >
                            Notebooks
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start self-stretch w-auto">
                        <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                          <Text
                            className="font-normal text-center text-gray_601 w-auto"
                            variant="body15"
                          >
                            Webcams
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start self-stretch w-auto">
                        <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                          <Text
                            className="font-normal text-center text-gray_601 w-auto"
                            variant="body15"
                          >
                            Cameras
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start self-stretch w-auto">
                        <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                          <Text
                            className="font-normal text-center text-gray_601 w-auto"
                            variant="body15"
                          >
                            Webcams
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start self-stretch w-auto">
                        <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                          <Text
                            className="font-normal text-center text-gray_601 w-auto"
                            variant="body15"
                          >
                            Cameras
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start self-stretch w-auto">
                        <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                          <Text
                            className="font-normal text-center text-gray_601 w-auto"
                            variant="body15"
                          >
                            Webcams
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[24%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex items-start justify-start self-stretch w-auto">
                          <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                            <Text
                              className="font-normal text-center text-gray_601 w-auto"
                              variant="body15"
                            >
                              Cameras
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-start justify-start self-stretch w-auto">
                          <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                            <Text
                              className="font-normal text-center text-gray_601 w-auto"
                              variant="body15"
                            >
                              Cameras
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start self-stretch w-auto">
                      <div className="flex items-start justify-start w-12">
                        <Button className="border border-gray_400 border-solid flex h-12 items-center justify-center px-5 py-3.5 rounded-[50%] w-12">
                          <Img
                            src="images/img_arrowleft.svg"
                            className=""
                            alt="arrowleft"
                          />
                        </Button>
                      </div>
                      <div className="flex h-[49px] md:h-auto items-start justify-start w-[49px]">
                        <Button className="border border-solid border-yellow_A700 flex h-[49px] items-center justify-center px-5 py-3.5 rounded-[24px] w-[49px]">
                          <Img
                            src="images/img_arrowright_yellow_a700_49x49.svg"
                            className=""
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray_200 h-0.5 w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-futuramaxicgbook items-center justify-start md:ml-[0] ml-[324px] mt-[38px] w-[84%] md:w-full">
            <div className="h-[1036px] md:h-[548px] relative w-full">
              <div className="absolute bg-white_A700 bottom-[2%] flex inset-x-[0] items-center justify-start mx-auto p-[115px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-px h-[249px] md:h-auto items-center justify-start max-w-[1050px] pb-20 w-full">
                  <div className="flex items-center justify-start max-w-[864px] w-full">
                    <div className="flex flex-col gap-[30px] items-center justify-start max-w-[864px] w-full">
                      <Text
                        className="font-futuramaxicgbold leading-[42.00px] max-w-[733px] md:max-w-full text-bluegray_901 text-center"
                        variant="body2"
                      >
                        Cryptocurrency-friendly Electronic Products Shop
                      </Text>
                      <Text
                        className="font-futuramaxicglight font-normal leading-[22.00px] max-w-[696px] md:max-w-full text-center text-gray_703"
                        variant="body15"
                      >
                        We pride ourselves on being the leading
                        cryptocurrency-friendly electronic products platform.
                        Pay for your purchases anywhere in the world seamlessly
                        using your favorite cryptocurrency.
                      </Text>
                    </div>
                  </div>
                  <div className="gap-[30px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 items-center justify-start pb-[22px] pt-[15px] self-stretch w-auto md:w-full">
                    <Img
                      src="images/img_bluetooth.svg"
                      className="h-16 w-16"
                      alt="bluetooth"
                    />
                    <Img
                      src="images/img_arrowdown_teal_300.svg"
                      className="h-16 w-16"
                      alt="arrowdown_One"
                    />
                    <Img
                      src="images/img_send.svg"
                      className="h-16 w-16"
                      alt="send"
                    />
                    <Img
                      src="images/img_clock.svg"
                      className="h-16 w-16"
                      alt="clock"
                    />
                    <Img
                      src="images/img_videocamera.svg"
                      className="h-16 w-16"
                      alt="videocamera"
                    />
                    <Img
                      src="images/img_info_lime_801_64x64.svg"
                      className="h-16 w-16"
                      alt="info"
                    />
                    <Img
                      src="images/img_arrowup.svg"
                      className="h-16 w-16"
                      alt="arrowup"
                    />
                    <Img
                      src="images/img_bag_yellow_700.svg"
                      className="h-16 w-16"
                      alt="bag_One"
                    />
                    <Img
                      src="images/img_solana.png"
                      className="h-16 md:h-auto rounded-[50%] w-16"
                      alt="solana"
                    />
                    <Img
                      src="images/img_sushiswap.png"
                      className="h-16 md:h-auto object-cover w-16"
                      alt="sushiswap"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-auto w-[93%]">
                <div className="flex items-center justify-start w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex items-start justify-start w-[223px]">
                        <Text
                          className="font-normal text-center text-gray_900 uppercase w-auto"
                          variant="body15"
                        >
                          PC Game Hardware
                        </Text>
                      </div>
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[23px] items-center justify-end w-[74%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start self-stretch w-auto md:w-full">
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[5px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-yellow_A700 w-auto"
                                variant="body15"
                              >
                                Notebooks
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-gray_601 w-auto"
                                variant="body15"
                              >
                                Webcams
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-gray_601 w-auto"
                                variant="body15"
                              >
                                Cameras
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-gray_601 w-auto"
                                variant="body15"
                              >
                                Webcams
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-gray_601 w-auto"
                                variant="body15"
                              >
                                Cameras
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-auto">
                            <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                              <Text
                                className="font-normal text-center text-gray_601 w-auto"
                                variant="body15"
                              >
                                Webcams
                              </Text>
                            </div>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-px grid grid-cols-2 w-[24%] md:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                <Text
                                  className="font-normal text-center text-gray_601 w-auto"
                                  variant="body15"
                                >
                                  Cameras
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-start justify-start self-stretch w-auto">
                              <div className="flex items-center justify-start px-5 py-2.5 rounded-[21px] self-stretch w-auto">
                                <Text
                                  className="font-normal text-center text-gray_601 w-auto"
                                  variant="body15"
                                >
                                  Cameras
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                        <div className="flex flex-row gap-[15px] items-start justify-start self-stretch w-auto">
                          <div className="flex items-start justify-start w-12">
                            <Button className="border border-gray_400 border-solid flex h-12 items-center justify-center px-5 py-3.5 rounded-[50%] w-12">
                              <Img
                                src="images/img_arrowleft.svg"
                                className=""
                                alt="arrowleft_One"
                              />
                            </Button>
                          </div>
                          <div className="flex h-[49px] md:h-auto items-start justify-start w-[49px]">
                            <Button className="border border-solid border-yellow_A700 flex h-[49px] items-center justify-center px-5 py-3.5 rounded-[24px] w-[49px]">
                              <Img
                                src="images/img_arrowright_yellow_a700_49x49.svg"
                                className=""
                                alt="arrowright_One"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_200 h-0.5 w-full" />
                  </div>
                </div>
              </div>
              <ELEMENTSCard className="absolute flex flex-col font-montserrat items-center justify-start left-[3%] top-[0] w-auto sm:w-full" />
              <ELEMENTSCard className="absolute flex flex-col font-montserrat items-center justify-start left-[27%] top-[0] w-auto sm:w-full" />
              <ELEMENTSCard className="absolute flex flex-col font-montserrat items-center justify-start right-[27%] top-[0] w-auto sm:w-full" />
              <ELEMENTSCard className="absolute flex flex-col font-montserrat items-center justify-start right-[3%] top-[0] w-auto sm:w-full" />
            </div>
            <List
              className="flex-col font-montserrat gap-[55px] grid items-center mt-[39px] w-full"
              orientation="vertical"
            >
              <div className="md:flex-1 gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start w-[94%] md:w-full">
                <ELEMENTSCard className="flex flex-col items-center justify-start w-full" />
                <ELEMENTSCard className="flex flex-col items-center justify-start w-full" />
                <ELEMENTSCard className="flex flex-col items-center justify-start w-full" />
                <ELEMENTSCard className="flex flex-col items-center justify-start w-full" />
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-3.5 w-full">
                <div className="flex md:flex-col flex-row gap-[21px] items-center justify-start mb-[70px] w-[96%] md:w-full">
                  <div className="flex h-[797px] md:h-auto items-start justify-start pb-[47px] self-stretch w-auto sm:w-full">
                    <div className="flex items-start justify-start self-stretch w-auto">
                      <div
                        className="bg-cover bg-no-repeat bg-white_A700 border border-blue_200 border-solid h-[796px] relative w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_carditem_gray_404.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[5px] h-full items-start justify-center mx-auto md:pl-10 pl-12 pr-6 sm:px-5 py-6 w-[389px] sm:w-full">
                          <Text
                            className="font-bold text-bluegray_901 text-left tracking-[0.20px] w-auto"
                            variant="body15"
                          >
                            GAMING
                          </Text>
                          <Text
                            className="font-bold text-gray_601 text-left tracking-[0.20px] w-auto"
                            variant="body15"
                          >
                            12 Items
                          </Text>
                        </div>
                        <div className="absolute bg-bluegray_901 flex h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="h-[796px] relative w-full">
                            <Img
                              src="images/img_unsplashryyrk3ysqg.png"
                              className="h-[796px] m-auto object-cover w-full"
                              alt="unsplashryyrk3y"
                            />
                            <div className="absolute bg-gradient6  flex h-full inset-[0] items-center justify-center m-auto w-full">
                              <div className="flex items-center justify-start py-28 self-stretch w-auto sm:w-full">
                                <div className="flex items-center justify-start w-[389px] sm:w-full">
                                  <div className="flex flex-col gap-[30px] items-center justify-start self-stretch w-auto">
                                    <div className="flex flex-col gap-[30px] items-center justify-start w-auto md:w-full">
                                      <Text
                                        className="font-bold leading-[50.00px] text-center text-white_A700 tracking-[0.20px]"
                                        variant="body3"
                                      >
                                        <>
                                          Designing <br />
                                          Better <br />
                                          Experience
                                        </>
                                      </Text>
                                      <Text
                                        className="font-normal leading-[20.00px] not-italic text-center text-white_A700 tracking-[0.20px]"
                                        variant="body15"
                                      >
                                        <>
                                          Problems trying to resolve the c<br />
                                          onflict between the two major
                                          <br /> realms of Classical physics:{" "}
                                          <br />
                                          Newtonian mechanics{" "}
                                        </>
                                      </Text>
                                    </div>
                                    <Img
                                      src="images/img_blouse1.png"
                                      className="h-[397px] sm:h-auto object-cover w-[316px] md:w-full"
                                      alt="blouseOne"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[74%] md:w-full">
                    <div className="flex flex-col items-center justify-start max-w-[1098px] w-full">
                      <Text
                        className="not-italic text-center text-gray_601 tracking-[0.20px] w-auto"
                        variant="body8"
                      >
                        Featured Products
                      </Text>
                      <Text
                        className="font-bold text-bluegray_901 text-center tracking-[0.20px] w-auto"
                        variant="body3"
                      >
                        Featured Products
                      </Text>
                      <Text
                        className="font-normal leading-[20.00px] not-italic text-center text-gray_601 tracking-[0.20px]"
                        variant="body15"
                      >
                        <>
                          Problems trying to resolve the conflict between <br />
                          the two major realms of Classical physics: <br />
                          Newtonian mechanics{" "}
                        </>
                      </Text>
                    </div>
                    <div className="gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[33px] w-full">
                      <ELEMENTSCard className="flex flex-1 flex-col items-center justify-start mb-1 w-full" />
                      <ELEMENTSCard className="flex flex-1 flex-col items-center justify-start mb-1 w-full" />
                      <ELEMENTSCard className="flex flex-1 flex-col items-center justify-start mt-1 w-full" />
                    </div>
                    <div className="font-hind h-[39px] md:h-[69px] mt-[30px] relative w-[28%]">
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
              </div>
            </List>
            <div className="flex md:flex-col flex-row font-futuramaxicgbold md:gap-10 gap-[71px] items-center justify-start mt-[22px] w-[87%] md:w-full">
              <HOMEPAGEColumnThirteen
                className="flex flex-col items-center justify-start w-auto md:w-full"
                mediumlengthdis="See how work gets done with Source"
                collectionofcom="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisOne="Easy to Use"
                collectionofcomOne="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisTwo="You’re in good company"
                collectionofcomTwo="A website wireframe, also known as a page schematic or screen blueprint"
                mediumlengthdisThree="We make sure that everyone is able to use a Source"
                collectionofcomThree="A website wireframe, also known as a page schematic or screen blueprint"
              />
              <div className="flex flex-col font-montserrat gap-[29px] items-center justify-start w-[35%] md:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start w-[459px] sm:w-full">
                  <Text
                    className="not-italic text-center text-gray_601 tracking-[0.20px] w-auto"
                    variant="body8"
                  >
                    Featured Products
                  </Text>
                  <Text
                    className="font-bold text-bluegray_901 text-center tracking-[0.20px] w-auto"
                    variant="body3"
                  >
                    Featured Products
                  </Text>
                </div>
                <List
                  className="flex-col gap-[39px] grid items-center w-full"
                  orientation="vertical"
                >
                  {elementsRowproductcoverfiveOnePropList.map(
                    (props, index) => (
                      <React.Fragment
                        key={`ELEMENTSRowproductcoverfiveOne${index}`}
                      >
                        <ELEMENTSRowproductcoverfiveOne
                          className="bg-white_A700 flex sm:flex-1 flex-row items-start justify-start self-stretch shadow-bs1 w-auto sm:w-full"
                          tagThree="NEW"
                          languageThree="Digital Cameras "
                          p49One="4.9"
                          h4posttitle="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
                          h6One="Learn More"
                          arrowright="images/img_arrowright_yellow_a700.svg"
                          {...props}
                        />
                      </React.Fragment>
                    )
                  )}
                </List>
              </div>
            </div>
            <div className="font-futuramaxicgbook h-[610px] mt-[49px] relative w-full">
              <div className="flex font-montserrat items-center justify-start mb-[-69px] mx-auto py-20 self-stretch w-auto z-[1]">
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
              <PRODUCTPAGEDESCRIPTIONColumnbackground
                className="flex flex-col items-center justify-start mt-auto mx-auto w-full"
                teamsaroundthe="Shop safely with the best crypto payment processors"
              />
            </div>
            <div className="bg-gray_51 font-futuramaxicgbook md:h-[540px] h-[560px] mt-1.5 sm:pl-5 pl-[26px] pt-[26px] relative w-full">
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[534px] items-start justify-end p-[66px] md:px-10 sm:px-5 right-[0] w-[91%]"
                style={{ backgroundImage: "url('images/img_group78.png')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[53px] mr-auto mt-56 w-[81%] md:w-full">
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
            <PRODUCTPAGEDESCRIPTIONFooter className="bg-gray_900 flex items-center justify-center w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HOMEPAGEOnePage;
