import React from "react";

import {
  List,
  Text,
  Button,
  Img,
  Line,
  Input,
  Slider,
  PagerIndicator,
} from "components";
import HOMEPAGEColmd from "components/HOMEPAGEColmd";
import { CloseSVG } from "../../assets/images";
import ELEMENTSCard from "components/ELEMENTSCard";
import HOMEPAGEListarrowdown from "components/HOMEPAGEListarrowdown";
import HOMEPAGEColumnThirteen from "components/HOMEPAGEColumnThirteen";
import ELEMENTSRowproductcoverfiveOne from "components/ELEMENTSRowproductcoverfiveOne";

const HOMEPAGEPage = () => {
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
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const elementsRowproductcoverfiveOnePropList = [
    { productcoverfiveOne: "images/img_productcover5.png" },
    { productcoverfiveOne: "images/img_productcover5_2.png" },
    { productcoverfiveOne: "images/img_productcover5_1.png" },
    { productcoverfiveOne: "images/img_image1_294x312.png" },
  ];

  return (
    <>
      <div className="bg-white_A700 flex font-futuramaxicgbold items-start justify-start mx-auto pb-[1196px] w-full">
        <div className="flex flex-col gap-[59px] justify-start md:px-5 w-full">
          <div className="flex flex-col items-end justify-start w-full">
            <div className="flex flex-col items-end justify-start w-full">
              <div className="md:h-[2163px] h-[2801px] relative w-full">
                <div className="absolute h-[2163px] inset-x-[0] mx-auto overflow-auto top-[0] w-full">
                  <div className="absolute flex inset-x-[0] items-center justify-end mx-auto pr-0.5 py-20 self-stretch top-[33%] w-auto">
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
                  <div className="bg-gray_900 flex h-full items-center justify-end ml-auto mt-[177px] p-[111px] md:px-10 sm:px-5 w-auto md:w-full">
                    <Text
                      className="leading-[75.00px] text-center text-yellow_A700 tracking-[2.14px]"
                      as="h4"
                      variant="h4"
                    >
                      <>
                        Feel Free to shop with almost any <br />
                        cryptocurrency
                      </>
                    </Text>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex h-full inset-y-[0] items-center justify-end my-auto py-[98px] right-[0] w-[84%] md:w-full"
                    style={{ backgroundImage: "url('images/img_group25.png')" }}
                  >
                    <div className="flex flex-col md:gap-10 gap-[78px] items-center justify-start mt-[606px] w-full">
                      <div className="flex flex-col md:gap-10 gap-[518px] items-center justify-start w-full">
                        <div className="flex items-center justify-start w-[459px] sm:w-full">
                          <Text
                            className="font-normal text-bluegray_901 text-center w-auto"
                            variant="body5"
                          >
                            TOP CATEGORIES
                          </Text>
                        </div>
                        <div className="flex flex-col font-montserrat pb-[13px] relative w-full">
                          <div className="bg-gray_900 flex items-center justify-start max-w-[1621px] mx-auto py-[100px] w-full">
                            <div className="flex items-center justify-start max-w-[1175px] pb-10 w-full">
                              <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                                <div className="flex flex-col gap-4 items-start justify-start max-w-[1175px] w-full">
                                  <Text
                                    className="font-semibold font-urbanist text-center text-white_A700 w-auto"
                                    variant="body3"
                                  ></Text>
                                  <Text
                                    className="font-futuramaxicgbook font-normal leading-[29.00px] max-w-[1175px] md:max-w-full text-center text-white_A700"
                                    variant="body11"
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Eu est amet a ornare
                                    tempus, risus. Integer in nunc tempus nunc,
                                    risus, vel vitae ut. Ut sodales fusce purus
                                    risus, turpis faucibus. Ipsum adipiscing
                                    nunc.
                                  </Text>
                                </div>
                                <Button className="bg-yellow_A701 cursor-pointer font-bold leading-[normal] sm:px-5 px-8 py-4 rounded-lg text-center text-gray_900 text-sm uppercase w-[148px]">
                                  SHOP NOW
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center max-w-[1175px] mt-[-160px] mx-auto py-2.5 w-full z-[1]">
                            <div className="bg-white_A700 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[16px] shadow-bs6 w-full">
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
                            <div className="bg-white_A700 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-[16px] shadow-bs6 w-full">
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
                            <div className="bg-white_A700 border border-gray_600_59 border-solid flex flex-1 flex-col items-center justify-start p-[31px] sm:px-5 rounded-[16px] shadow-bs6 w-full">
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
                        </div>
                      </div>
                      <div className="flex items-center justify-start w-[459px] sm:w-full">
                        <Text
                          className="font-normal text-bluegray_901 text-center w-auto"
                          variant="body5"
                        >
                          BESTSELLER PRODUCTS
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="absolute bg-gray_900 h-[47px] right-[5%] top-[0] w-px" />
                <div className="absolute flex font-futuramaxicgdemi items-center justify-start right-[0] top-[0] w-[84%] md:w-full">
                  <div className="bg-gray_900 flex items-center justify-start pb-[15px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-12 md:h-[88px] relative w-full">
                        <div className="absolute bg-yellow_A701 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto px-3 top-[0] w-full">
                          <div className="flex md:flex-1 items-center justify-start w-[91%] md:w-full">
                            <div className="flex h-11 md:h-auto items-start justify-between max-w-[1438px] w-full">
                              <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-between max-w-[1438px] sm:px-5 px-6 w-full">
                                <div className="flex sm:flex-1 items-center justify-end p-[7px] w-auto sm:w-full">
                                  <Text
                                    className="mt-[9px] text-gray_900 text-left w-auto"
                                    variant="body16"
                                  >
                                    Follow Us and get a chance to win 80% off
                                  </Text>
                                </div>
                                <div className="flex sm:flex-1 flex-row gap-[9px] items-center justify-center pl-3.5 py-3.5 w-[17%] sm:w-full">
                                  <Text
                                    className="ml-[150px] text-gray_900 text-left w-auto"
                                    variant="body16"
                                  >
                                    SPAIN
                                  </Text>
                                  <Img
                                    src="images/img_ticket_amber_600.svg"
                                    className="h-3 w-auto"
                                    alt="ticket_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-6 md:ml-[0] ml-[5px] relative w-[5%] md:w-full">
                            <Text
                              className="absolute h-max inset-y-[0] left-[0] my-auto text-gray_900 text-left w-auto"
                              variant="body16"
                            >
                              ENGLISH
                            </Text>
                            <Img
                              src="images/img_arrowdown.svg"
                              className="absolute h-6 inset-y-[0] my-auto right-[0] w-6"
                              alt="arrowdown"
                            />
                          </div>
                        </div>
                        <Line className="absolute bg-gray_900 h-12 inset-y-[0] my-auto right-[12%] w-px" />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-3.5 w-[94%] md:w-full">
                        <Img
                          src="images/img_group451.png"
                          className="h-[51px] sm:h-auto object-cover w-[12%] md:w-full"
                          alt="group451"
                        />
                        <Input
                          value={inputvalue}
                          onChange={(e) => setInputvalue(e?.target?.value)}
                          wrapClassName="bg-white_A700 flex md:ml-[0] ml-[62px] md:mt-0 mt-1 pl-[22px] pr-3.5 py-3.5 rounded-[23px] w-[49%] md:w-full"
                          className="font-futuramaxicgbook font-normal p-0 placeholder:text-gray_703 sm:pl-5 text-gray_703 text-left text-xs w-full"
                          name="field"
                          placeholder="Search Products"
                          suffix={
                            <div className="h-[18px] ml-[35px] w-[18px] bg-gray_600">
                              {inputvalue?.length > 0 ? (
                                <CloseSVG
                                  className="cursor-pointer my-auto"
                                  onClick={() => setInputvalue("")}
                                  fillColor="#5e5d5d"
                                  height={18}
                                  width={18}
                                  viewBox="0 0 18 18"
                                />
                              ) : (
                                <Img
                                  src="images/img_search.svg"
                                  className="cursor-pointer my-auto"
                                  alt="search"
                                />
                              )}
                            </div>
                          }
                        ></Input>
                        <div className="flex font-montserrat items-center justify-start ml-14 md:ml-[0] w-[15%] md:w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Img
                              src="images/img_contrast_yellow_a701.svg"
                              className="h-[13px] mt-0.5 w-3"
                              alt="contrast_One"
                            />
                            <Text
                              className="font-bold text-center text-yellow_A701 tracking-[0.20px] w-auto"
                              variant="body15"
                            >
                              Login / Register
                            </Text>
                            <Img
                              src="images/img_cart_yellow_a701.svg"
                              className="h-4 w-[15px]"
                              alt="cart"
                            />
                            <Text
                              className="not-italic text-center text-yellow_A701 tracking-[0.20px] w-auto"
                              variant="body16"
                            >
                              1
                            </Text>
                            <Img
                              src="images/img_location.svg"
                              className="h-4 w-4"
                              alt="location"
                            />
                            <Text
                              className="not-italic text-center text-yellow_A701 tracking-[0.20px] w-auto"
                              variant="body16"
                            >
                              1
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="bg-yellow_A700 cursor-pointer flex items-center justify-center mb-3 min-w-[122px] md:ml-[0] ml-[26px] md:mt-0 mt-2 px-[13px] py-1.5 rounded-[15px] w-auto"
                          leftIcon={
                            <Img
                              src="images/img_menu.svg"
                              className="mt-1 mr-2"
                              alt="menu"
                            />
                          }
                        >
                          <div className="font-bold font-montserrat text-center text-gray_900 text-sm tracking-[0.20px]">
                            Feedback
                          </div>
                        </Button>
                        <div
                          className="bg-cover bg-no-repeat flex font-montserrat h-[31px] items-center justify-end ml-3 md:ml-[0] p-[5px] rounded-[15px] w-[8%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_group87.svg')",
                          }}
                        >
                          <div className="flex flex-row gap-2 items-start justify-center w-[83%] md:w-full">
                            <Img
                              src="images/img_supporticon13.png"
                              className="h-3.5 md:h-auto object-cover w-3.5"
                              alt="supporticonThirteen"
                            />
                            <Text
                              className="font-bold text-center text-gray_900 tracking-[0.20px] w-auto"
                              variant="body15"
                            >
                              Support
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[42px] items-center justify-center mt-[21px] p-[9px] w-[54%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[34px] text-center text-yellow_A701 w-auto"
                          variant="body16"
                        >
                          All Categories
                        </Text>
                        <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start mr-[18px] self-stretch w-auto md:w-full">
                          <Text
                            className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700"
                            variant="body16"
                          >
                            Camera & Photo
                          </Text>
                          <Text
                            className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700"
                            variant="body16"
                          >
                            Computers & Accesories
                          </Text>
                          <Text
                            className="leading-[18.00px] max-w-[95px] md:max-w-full text-center text-white_A700"
                            variant="body16"
                          >
                            Home Appliances
                          </Text>
                          <Text
                            className="text-center text-white_A700 w-auto"
                            variant="body16"
                          >
                            Smart Home
                          </Text>
                          <Text
                            className="text-center text-white_A700 w-auto"
                            variant="body16"
                          >
                            Smartphones
                          </Text>
                          <Text
                            className="text-center text-white_A700 w-auto"
                            variant="body16"
                          >
                            Tv & Video
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex font-futuramaxicgbook items-center justify-start right-[3%] w-[79%]">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                    <div className="flex items-center justify-start w-full">
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
                    <List
                      className="sm:flex-col flex-row font-montserrat gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                      orientation="horizontal"
                    >
                      {new Array(4).fill({}).map((props, index) => (
                        <React.Fragment key={`ELEMENTSCard${index}`}>
                          <ELEMENTSCard
                            className="flex flex-1 flex-col items-center justify-start w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                  </div>
                </div>
              </div>
              <Text
                className="font-normal mt-[120px] text-bluegray_901 text-center w-auto"
                variant="body5"
              >
                NEW ARRIVALS{" "}
              </Text>
              <div className="flex font-futuramaxicgbook items-center justify-start mt-[81px] w-[79%] md:w-full">
                <div className="flex flex-col gap-[39px] items-center justify-start w-full">
                  <div className="flex items-center justify-start w-full">
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
                                    className="font-normal text-center text-yellow_A701 w-auto"
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
                  <List
                    className="sm:flex-col flex-row font-montserrat gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                    orientation="horizontal"
                  >
                    {new Array(4).fill({}).map((props, index) => (
                      <React.Fragment key={`ELEMENTSCard${index}`}>
                        <ELEMENTSCard
                          className="flex flex-1 flex-col items-center justify-start w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </List>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col font-futuramaxicgbold gap-11 items-center justify-end mt-[107px] pt-8 sm:px-5 px-8 w-[84%] md:w-full">
                <Text
                  className="leading-[58.00px] text-bluegray_901 text-center tracking-[-0.79px] w-[47%] sm:w-full"
                  as="h6"
                  variant="h6"
                ></Text>
                <div className="font-futuramaxicgbook md:h-[274px] h-[309px] relative w-[69%] md:w-full">
                  <Text
                    className="absolute inset-x-[0] leading-[23.00px] mx-auto text-center text-gray_900 top-[0] tracking-[0.57px] w-[66%] sm:w-full"
                    variant="body10"
                  >
                    We pride ourselves on being the leading
                    cryptocurrency-friendly electronic products platform. Pay
                    for your purchases anywhere in the world seamlessly using
                    your favorite cryptocurrency.
                  </Text>
                  <HOMEPAGEListarrowdown className="absolute bottom-[0] sm:flex-col flex-row gap-[57px] grid grid-cols-1 inset-x-[0] justify-center mx-auto p-[11px] w-full" />
                </div>
              </div>
            </div>
            <div className="bg-gray_900 flex items-center justify-start mt-[429px] p-[59px] md:px-10 sm:px-5 w-[84%] md:w-full">
              <div className="flex flex-col gap-[49px] items-center justify-start w-[96%] md:w-full">
                <Text
                  className="font-normal text-center text-yellow_A701 w-auto"
                  variant="body5"
                >
                  CUSTOMER REVIEWS
                </Text>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 2 },
                    1050: { items: 3 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[0.64]"
                  magnifiedIndex={1}
                  centerMode
                  ref={sliderRef}
                  className="bg-white_A700 border border-gray_600_5b border-solid font-futuramaxicglight rounded-[20px] shadow-bs1 w-full"
                  items={[...Array(15)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex flex-col gap-8 items-center justify-start mx-2.5 md:pl-10 sm:pl-5 pl-[95px]">
                        <div className="flex items-end justify-start self-stretch w-auto sm:w-full">
                          <Text
                            className="leading-[34.00px] text-gray_900 text-left tracking-[-0.20px]"
                            variant="body8"
                          >
                            <>
                              &quot;I would also like to say thank you to all
                              your <br />
                              staff. It fits our needs perfectly. I don&#39;t
                              know <br />
                              what else to say. Keep up the excellent
                              work.&quot;
                            </>
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-yellow_A701 w-2.5" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray_302 w-2.5"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-end ml-auto mt-[62px] w-[74%] md:w-full">
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
              <div className="flex flex-col font-montserrat gap-[29px] items-center justify-start w-[34%] md:w-full">
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
                          arrowright="images/img_arrowright_yellow_a701.svg"
                          {...props}
                        />
                      </React.Fragment>
                    )
                  )}
                </List>
              </div>
            </div>
          </div>
          <div className="flex font-montserrat items-start justify-start md:ml-[0] ml-[327px] py-20 self-stretch w-auto md:w-full">
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
                      <div className="absolute bg-gray_900_b5 h-[300px] inset-[0] justify-center m-auto w-full"></div>
                    </div>
                  </div>
                  <div className="absolute flex h-full inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[49px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[60px] items-center justify-end ml-auto w-full">
                      <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                        <Text
                          className="font-bold font-montserrat text-left text-yellow_A701 tracking-[0.20px] w-auto"
                          variant="body15"
                        >
                          Ends Today
                        </Text>
                        <Text
                          className="font-bold font-montserrat leading-[32.00px] mt-5 text-left text-white_A700 tracking-[0.10px]"
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
                          className="font-futuramaxicgbook font-normal mt-[21px] text-left text-yellow_A701 tracking-[-0.27px] underline w-auto"
                          variant="body11"
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
                        <div className="absolute bg-gray_900_b5 h-[300px] inset-[0] justify-center m-auto w-full"></div>
                      </div>
                    </div>
                    <div className="absolute h-[460px] inset-[0] justify-center m-auto md:pl-10 sm:pl-5 pl-[49px] w-full">
                      <Text
                        className="font-bold mt-[142px] text-left text-yellow_A701 tracking-[0.20px] w-auto"
                        variant="body15"
                      >
                        Ends Today
                      </Text>
                      <div className="absolute h-[460px] inset-y-[0] my-auto right-[0] w-[92%] sm:w-full">
                        <div className="absolute bottom-[28%] flex items-center justify-start left-[0] w-[33%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="font-bold font-montserrat leading-[32.00px] text-left text-white_A700 tracking-[0.10px]"
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
                              className="font-futuramaxicgbook font-normal mt-[21px] text-left text-yellow_A701 tracking-[-0.27px] underline w-auto"
                              variant="body11"
                            >
                              Explore Items
                            </Text>
                          </div>
                        </div>
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
                        <div className="absolute bg-gray_900_b5 h-[300px] inset-[0] justify-center m-auto w-full"></div>
                      </div>
                    </div>
                    <div className="absolute flex h-full inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[49px] w-full">
                      <div className="flex sm:flex-col flex-row gap-[43px] items-center justify-end ml-auto w-full">
                        <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                          <Text
                            className="font-bold font-montserrat text-left text-yellow_A701 tracking-[0.20px] w-auto"
                            variant="body15"
                          >
                            Ends Today
                          </Text>
                          <Text
                            className="font-bold font-montserrat leading-[32.00px] mt-5 text-left text-white_A700 tracking-[0.10px]"
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
                            className="font-futuramaxicgbook font-normal mt-[21px] text-left text-yellow_A701 tracking-[-0.27px] underline w-auto"
                            variant="body11"
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
      </div>
    </>
  );
};

export default HOMEPAGEPage;
