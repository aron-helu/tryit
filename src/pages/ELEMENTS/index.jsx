import React from "react";

import { Text, Img, Button, Input } from "components";
import ELEMENTSColumncoin from "components/ELEMENTSColumncoin";
import ELEMENTSColumncoinOne from "components/ELEMENTSColumncoinOne";
import ELEMENTSColumncoinTwo from "components/ELEMENTSColumncoinTwo";
import ELEMENTSColumnh5Sixteen from "components/ELEMENTSColumnh5Sixteen";
import ELEMENTSStackrectangleten from "components/ELEMENTSStackrectangleten";
import ELEMENTSDesktopemail from "components/ELEMENTSDesktopemail";
import ELEMENTSCard from "components/ELEMENTSCard";
import ELEMENTSRowproductcoverfiveOne from "components/ELEMENTSRowproductcoverfiveOne";
import ELEMENTSColumnEleven from "components/ELEMENTSColumnEleven";

const ELEMENTSPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-futuramaxicgbold gap-[34px] items-start mx-auto pt-[66px] md:px-10 sm:px-5 px-[66px] w-full">
        <div className="flex md:ml-[0] ml-[33px] relative w-[83%] md:w-full">
          <div className="flex items-center justify-start ml-[undefinedpx] w-[33%] z-[1]">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end ml-4 md:ml-[0] w-full">
                <Text
                  className="font-normal sm:mt-0 mt-[18px] text-black_900 text-center w-auto"
                  variant="body5"
                >
                  Nav
                </Text>
                <Text
                  className="font-normal sm:ml-[0] ml-[1651px] sm:mt-0 mt-0.5 text-black_900 text-center w-auto"
                  variant="body5"
                >
                  CARD
                </Text>
                <Text
                  className="font-normal mb-[5px] sm:ml-[0] ml-[425px] text-black_900 text-center w-auto"
                  variant="body5"
                >
                  SLIDE (HERO SECTION)
                </Text>
              </div>
              <Text
                className="font-normal mt-[302px] text-black_900 text-center w-auto"
                variant="body5"
              >
                Footer
              </Text>
              <Text
                className="font-normal ml-3.5 md:ml-[0] mt-[825px] text-black_900 text-center w-auto"
                variant="body5"
              >
                SUSBCRIBE
              </Text>
            </div>
          </div>
          <div className="flex items-center justify-start ml-[-336.43px] mt-[77px] w-[19%] z-[1]">
            <div className="h-[716px] relative w-full">
              <Img
                src="images/img_shophero1productslide1.png"
                className="h-[716px] m-auto object-cover w-full"
                alt="shophero1produc"
              />
              <div className="absolute bg-black_900_7f flex h-full inset-[0] items-start justify-center m-auto pb-[95px] md:pr-10 sm:pr-5 pr-[95px] w-full">
                <div className="flex items-start justify-center py-28 self-stretch w-auto md:w-full">
                  <div className="flex items-center justify-start py-12 self-stretch w-auto md:w-full">
                    <div className="flex flex-col gap-[35px] items-start justify-start max-w-[763px] w-full">
                      <Text
                        className="font-futuramaxicgbook text-left text-white_A700 w-auto"
                        variant="body16"
                      >
                        FAST SHIPPING
                      </Text>
                      <Text
                        className="font-futuramaxicgbold leading-[42.00px] text-left text-white_A700"
                        variant="body4"
                      ></Text>
                      <Text
                        className="font-bold font-montserrat text-left text-white_A700 tracking-[0.10px] w-auto"
                        variant="body6"
                      >
                        With + 2000 Cryptocurrencies
                      </Text>
                      <Button className="bg-yellow_A701 cursor-pointer font-bold font-montserrat min-w-[210px] px-10 sm:px-5 py-[15px] rounded-[5px] text-2xl md:text-[22px] text-center text-gray_900 sm:text-xl tracking-[0.10px] w-auto">
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[1825px] h-[2966px] ml-[undefinedpx] my-auto w-[72%] md:w-full z-[1]">
            <div className="absolute flex flex-col font-montserrat inset-x-[0] mx-auto top-[0] w-full">
              <div className="flex items-center justify-start mx-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[85px] justify-start w-[58%] md:w-full">
                    <div className="bg-gray_900 md:h-[687px] h-[870px] md:ml-[0] ml-[1611px] mr-[75px] relative w-1/2 md:w-full">
                      <div className="absolute flex flex-col gap-[27px] items-start justify-start left-[6%] top-[24%] w-auto">
                        <Text
                          className="font-futuramaxicgbold leading-[59.00px] text-left text-yellow_A700 tracking-[2.14px]"
                          as="h4"
                          variant="h4"
                        >
                          <>
                            Shop whit +2000
                            <br />
                            Cryptocurrencies{" "}
                          </>
                        </Text>
                        <Text
                          className="font-futuramaxicglight font-normal leading-[32.00px] text-left text-white_A700 w-4/5 sm:w-full"
                          variant="body6"
                        ></Text>
                      </div>
                      <ELEMENTSColumncoin className="flex flex-col h-full items-center justify-start ml-auto mr-[423px] mt-[26px] rotate-[23deg] w-[136px] sm:w-full" />
                      <div
                        className="absolute bg-cover bg-no-repeat md:h-[687px] h-[870px] inset-[0] justify-center m-auto pb-[89px] md:pl-10 sm:pl-5 pl-[89px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group73.png')",
                        }}
                      >
                        <div className="absolute h-[687px] inset-y-[0] my-auto right-[0] w-1/2 md:w-full">
                          <ELEMENTSColumncoinOne className="flex flex-col h-full items-center justify-start ml-[194px] mt-[54px] rotate-[-21deg] w-auto sm:w-full" />
                          <div className="absolute h-[687px] inset-[0] justify-center m-auto w-full">
                            <div className="h-[687px] m-auto w-full">
                              <div className="h-[687px] m-auto w-full">
                                <Img
                                  src="images/img_openedblackmacbook.png"
                                  className="h-[687px] m-auto object-cover w-full"
                                  alt="openedblackmacb"
                                />
                                <Img
                                  src="images/img_blackmagicmouse.png"
                                  className="absolute h-[177px] object-cover right-[0] top-[35%] w-[30%]"
                                  alt="blackmagicmouse"
                                />
                              </div>
                              <Img
                                src="images/img_blackapplewatch.png"
                                className="absolute h-[100px] object-cover right-[22%] top-[33%] w-[17%]"
                                alt="blackapplewatch"
                              />
                            </div>
                            <Img
                              src="images/img_blackairpods.png"
                              className="absolute h-[117px] object-cover right-[5%] top-[31%] w-1/5"
                              alt="blackairpods"
                            />
                          </div>
                        </div>
                        <Button className="absolute bg-yellow_A700 bottom-[43%] cursor-pointer font-bold left-[6%] min-w-[126px] px-5 py-2.5 rounded-[5px] sm:text-[1px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto">
                          Get Started
                        </Button>
                        <ELEMENTSColumncoinTwo className="absolute flex flex-col items-center justify-start right-[32%] rotate-[-13deg] top-[0] w-auto sm:w-full" />
                        <div className="absolute bg-gradient  bottom-[20%] left-[6%] mb-[86px] ml-[3px] p-px rounded-lg w-[52%] ">
                          <div className="absolute bg-gray_900_99 border-solid bottom-[10%] flex items-center justify-start left-[10%] sm:pl-5 pl-6 py-6 rounded-lg">
                            <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start pr-10 sm:pr-5 w-full">
                              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[51px] items-center justify-between md:pr-10 sm:pr-5 pr-[50px] w-[83%] md:w-full">
                                <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
                                  <div className="flex font-futuramaxicgbook items-center justify-start self-stretch w-auto">
                                    <Text
                                      className="text-left text-white_A700_ab w-auto"
                                      variant="body16"
                                    >
                                      Search Products
                                    </Text>
                                  </div>
                                  <Input
                                    wrapClassName="bg-bluegray_900 flex px-4 py-3 rounded w-[263px]"
                                    className="font-dmsans font-normal italic p-0 placeholder:text-gray_50 text-gray_50 text-left text-lg w-full"
                                    type="number"
                                    name="field"
                                    placeholder="headphones"
                                    suffix={
                                      <div className="mt-2.5 mb-2 ml-[35px] sm:w-full sm:mx-0 w-[4%] bg-gray_50">
                                        <Img
                                          src="images/img_vector.svg"
                                          className="my-auto"
                                          alt="Vector"
                                        />
                                      </div>
                                    }
                                  ></Input>
                                </div>
                                <div className="flex flex-col gap-4 items-start justify-start w-[46%] sm:w-full">
                                  <div className="flex font-futuramaxicgbook items-center justify-start self-stretch w-auto">
                                    <Text
                                      className="text-left text-white_A700_ab w-auto"
                                      variant="body16"
                                    >
                                      Price Range
                                    </Text>
                                  </div>
                                  <Input
                                    wrapClassName="bg-bluegray_900 flex px-4 py-3 rounded w-[263px]"
                                    className="font-dmsans font-normal italic p-0 placeholder:text-gray_50 text-gray_50 text-left text-lg w-full"
                                    name="price_One"
                                    placeholder="$200 - $300"
                                    suffix={
                                      <Img
                                        src="images/img_mail.svg"
                                        className="mt-1 mb-[3px] ml-[35px]"
                                        alt="mail"
                                      />
                                    }
                                  ></Input>
                                </div>
                              </div>
                              <Button className="bg-yellow_A701 cursor-pointer font-bold min-w-[132px] md:mt-0 mt-[34px] px-10 sm:px-5 py-[15px] rounded-[5px] sm:text-[1px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto">
                                Search
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-center justify-between w-full">
                      <div className="bg-gray_900 md:h-[864px] h-[870px] pt-[5px] relative w-1/2 md:w-full">
                        <Img
                          src="images/img_bg.png"
                          className="h-[864px] m-auto object-cover w-auto"
                          alt="bg"
                        />
                        <div className="absolute bottom-[9%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[59%]">
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
                                      name="field_One"
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
                                <Button className="bg-yellow_A701 cursor-pointer font-bold min-w-[132px] md:mt-0 mt-[34px] px-10 sm:px-5 py-[15px] rounded-[5px] sm:text-[1px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto">
                                  Search
                                </Button>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="font-futuramaxicglight font-normal leading-[32.00px] mt-[85px] text-center text-white_A700 w-[88%] sm:w-full"
                            variant="body6"
                          ></Text>
                          <Button className="bg-gradient1  mt-[33px] p-px rounded-[5px]">
                            <div className="bg-gray_900 border-solid cursor-pointer font-bold font-montserrat min-w-[126px] px-5 py-2.5 rounded-[5px] sm:text-[1px] text-center text-sm text-yellow_A400 tracking-[0.20px]">
                              <div className="bg-gradient1  mt-[33px] p-px rounded-[5px]">
                                Get Started
                              </div>
                            </div>
                          </Button>
                        </div>
                      </div>
                      <div className="bg-gradient2  flex md:flex-1 items-center justify-end pt-[99px] md:px-10 sm:px-5 px-[99px] w-1/2 md:w-full">
                        <div className="flex md:flex-col flex-row gap-7 items-start justify-start mt-[11px] w-full">
                          <div className="flex md:flex-1 flex-col items-start justify-start w-[65%] md:w-full">
                            <div className="flex md:flex-col flex-row font-futuramaxicgbold md:gap-10 items-start justify-between w-full">
                              <Text
                                className="leading-[73.00px] md:mt-0 mt-[9px] text-left text-yellow_A700 tracking-[2.45px]"
                                as="h2"
                                variant="h2"
                              >
                                <>
                                  Shop whit +2000
                                  <br />
                                  Cryptocurrencies{" "}
                                </>
                              </Text>
                              <div className="bg-gradient3  h-[50px] rounded-[50%] w-[50px]"></div>
                            </div>
                            <Text
                              className="font-futuramaxicgbold font-normal leading-[40.00px] mt-4 text-left text-white_A700 w-3/4 sm:w-full"
                              variant="body5"
                            ></Text>
                            <Button className="bg-yellow_A700 cursor-pointer font-bold font-montserrat min-w-[126px] mt-11 px-5 py-2.5 rounded-[5px] sm:text-[1px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto">
                              Get Started
                            </Button>
                            <div className="font-montserrat md:h-[161px] h-[164px] mt-[27px] relative w-[96%] md:w-full">
                              <div className="absolute bg-gradient1  h-[60px] right-[20%] rotate-[27deg] rounded-[50%] top-[0] w-[60px]"></div>
                              <div className="absolute bg-gradient  p-px rounded-lg w-full ">
                                <div className="absolute bg-gray_900_99 border-solid bottom-[0] flex inset-x-[0] items-center justify-start mx-auto sm:px-5 px-8 py-6 rounded-lg self-stretch">
                                  <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[815px] w-full">
                                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-[53px] items-start justify-between max-w-[627px] w-full">
                                      <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
                                        <div className="flex font-futuramaxicgbook items-center justify-start self-stretch w-auto">
                                          <Text
                                            className="text-left text-white_A700_ab w-auto"
                                            variant="body16"
                                          >
                                            Search Products
                                          </Text>
                                        </div>
                                        <Input
                                          wrapClassName="bg-bluegray_900 flex px-4 py-3 rounded w-auto"
                                          className="font-dmsans font-normal italic p-0 placeholder:text-gray_50 self-stretch text-gray_50 text-left text-lg w-full"
                                          type="number"
                                          name="field_Two"
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
                                      <div className="flex flex-col gap-4 items-start justify-start self-stretch w-auto">
                                        <div className="flex font-futuramaxicgbook items-center justify-start self-stretch w-auto">
                                          <Text
                                            className="text-left text-white_A700_ab w-auto"
                                            variant="body16"
                                          >
                                            Price Range
                                          </Text>
                                        </div>
                                        <Input
                                          wrapClassName="bg-bluegray_900 flex px-4 py-3 rounded w-auto"
                                          className="font-dmsans font-normal italic p-0 placeholder:text-gray_50 self-stretch text-gray_50 text-left text-lg w-full"
                                          name="price_Two"
                                          placeholder="$200 - $300"
                                          suffix={
                                            <Img
                                              src="images/img_mail.svg"
                                              className="mt-1 mb-[3px] ml-[35px]"
                                              alt="mail"
                                            />
                                          }
                                        ></Input>
                                      </div>
                                    </div>
                                    <Button className="bg-yellow_A701 cursor-pointer font-bold min-w-[132px] px-10 sm:px-5 py-[15px] rounded-[5px] sm:text-[1px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto">
                                      Search
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col md:gap-10 gap-[151px] justify-start md:mt-0 mt-[54px] w-[34%] md:w-full">
                            <Img
                              src="images/img_group.svg"
                              className="h-[470px] w-auto"
                              alt="group"
                            />
                            <div className="bg-gradient1  h-[84px] md:ml-[0] ml-[310px] rounded-[66px] w-[28%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col font-futuramaxicgbold md:gap-10 gap-[157px] items-start justify-start md:ml-[0] ml-[245px] md:mt-0 mt-[183px] w-[29%] md:w-full">
                    <div className="md:h-[294px] h-[299px] relative w-full">
                      <div className="absolute bg-gradient4  flex flex-col gap-[9px] inset-x-[0] items-center justify-start mx-auto p-[98px] md:px-10 sm:px-5 top-[0] w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          variant="body4"
                        >
                          CAMERAS
                        </Text>
                        <div className="flex flex-row items-start justify-end mb-5 ml-auto w-[16%] md:w-full">
                          <Text
                            className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                            variant="body15"
                          >
                            Home
                          </Text>
                          <Text
                            className="font-medium font-roboto ml-3.5 text-gray_700 text-left w-auto"
                            variant="body13"
                          >
                            |
                          </Text>
                          <Text
                            className="font-futuramaxicgbook font-normal ml-4 text-gray_700 text-left w-auto"
                            variant="body15"
                          >
                            Shop
                          </Text>
                          <Text
                            className="font-medium font-roboto ml-3.5 text-gray_700 text-left w-auto"
                            variant="body13"
                          >
                            |
                          </Text>
                          <Text
                            className="font-futuramaxicgbook font-normal ml-4 text-gray_700 text-left w-auto"
                            variant="body15"
                          >
                            Cameras
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_image1.png"
                        className="absolute h-[294px] inset-y-[0] left-[10%] my-auto object-cover w-1/5"
                        alt="imageOne"
                      />
                    </div>
                    <div className="h-[294px] relative w-[86%] md:w-full">
                      <div className="absolute bg-gradient4  flex flex-col gap-[27px] h-max inset-[0] items-start justify-center m-auto p-[47px] md:px-10 sm:px-5 w-full">
                        <Text
                          className="font-futuramaxicgbold leading-[42.00px] ml-20 md:ml-[0] mt-6 text-gray_900 text-left w-[46%] sm:w-full"
                          variant="body1"
                        >
                          Grab Upto 50% Off On Selected Cameras
                        </Text>
                        <Button className="bg-yellow_A701 cursor-pointer font-bold font-montserrat min-w-[140px] ml-20 md:ml-[0] sm:px-5 px-9 py-[15px] rounded-[26px] sm:text-[1px] text-center text-gray_900 text-sm tracking-[0.20px] w-auto">
                          Buy Now
                        </Button>
                      </div>
                      <Img
                        src="images/img_image1.png"
                        className="absolute h-[294px] inset-y-[0] my-auto object-cover right-[5%] w-[23%]"
                        alt="imageOne_One"
                      />
                    </div>
                  </div>
                  <ELEMENTSColumnh5Sixteen
                    className="flex md:flex-1 flex-col font-montserrat items-center justify-start md:ml-[0] ml-[221px] md:mt-0 mt-[183px] w-auto md:w-full"
                    h5Sixteen="Active Filters"
                    agata9Two="Agata (9)"
                    forniture15Two="Forniture (15)"
                    tagSix="Tag"
                    tagSeven="Tag"
                    h5Seventeen="Filter By Category"
                    h5Eighteen="Filter By Type"
                    h5Nineteen="Filter By Products"
                    h5Twenty="Filter By Price"
                    zeroTwo="0"
                  />
                </div>
              </div>
              <ELEMENTSStackrectangleten
                className="h-[1620px] ml-auto mr-[156px] mt-[-808px] w-[46%] md:w-full z-[1]"
                offerOne="Grab Upto 50% Off On Selected Cameras"
                buyNow="Buy Now"
                imageone="images/img_image1.png"
              />
            </div>
            <ELEMENTSStackrectangleten
              className="absolute bottom-[0] h-[1620px] right-[3%] w-[46%] md:w-full"
              offerOne="Grab Upto 50% Off On Selected TV & Video"
              buyNow="Buy Now"
              imageone="images/img_image1_294x364.png"
            />
            <Text
              className="absolute font-futuramaxicgbold font-normal right-[28%] text-black_900 text-center top-[1%] w-auto"
              variant="body5"
            >
              BANNER PRODUCTS GRID/CATEGORIES
            </Text>
          </div>
          <ELEMENTSDesktopemail
            className="bg-gray_51 font-futuramaxicgbook h-[560px] ml-[undefinedpx] my-auto sm:pl-5 pl-[26px] pt-[26px] w-[21%] md:w-full z-[1]"
            getweeklyupdateOne="Get weekly update about our product on your email, no spam guaranteed we promise ✌️"
            email="youremail123@gmail.com"
            subscribe="SUBSCRIBE"
            subscribeto="Subscribe to"
            ournewsletter="Our Newsletter"
          />
          <div className="flex flex-col font-montserrat md:gap-10 gap-[71px] justify-start ml-[undefinedpx] mt-[132px] w-[7%] z-[1]">
            <ELEMENTSCard className="flex flex-col items-center justify-start md:ml-[0] ml-[43px] w-auto md:w-full" />
            <ELEMENTSRowproductcoverfiveOne
              className="bg-white_A700 flex flex-row items-start justify-start self-stretch shadow-bs1 w-auto sm:w-full"
              productcoverfiveOne="images/img_productcover5.png"
              tagThree="NEW"
              languageThree="Digital Cameras "
              p49One="4.9"
              h4posttitle="Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)"
              h6One="Learn More"
              arrowright="images/img_arrowright_yellow_a700.svg"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-montserrat md:gap-5 items-center justify-start mr-[518px] md:mt-0 mt-[183px] w-[12%] md:w-full">
          <ELEMENTSColumnh5Sixteen
            className="flex flex-col items-center justify-start w-auto md:w-full"
            h5Sixteen="Active Filters"
            agata9Two="Agata (9)"
            forniture15Two="Forniture (15)"
            tagSix="Tag"
            tagSeven="Tag"
            h5Seventeen="Filter By Category"
            h5Eighteen="Filter By Type"
            h5Nineteen="Filter By Products"
            h5Twenty="Filter By Price"
            filterOne="Filter"
          />
          <ELEMENTSColumnEleven
            className="flex flex-col items-center justify-start md:ml-[0] ml-[52px] w-auto md:w-full"
            h5Eleven="Active Filters"
            tag="Agata (9)"
            tagOne="Forniture (15)"
            tag1="Tag"
            tagOne1="Tag"
            h5Twelve="Filter By Category"
            formchecklabelFortyTwo="Camera, Photo & Video"
            formchecklabelFortyThree="TV & Video"
            formchecklabelFortyFour="Smart Home"
            formchecklabelFortyFive="Computers & Accessories"
            formchecklabelFortySix="Smartphones"
            formchecklabelFortySeven="Home Appliances"
            formchecklabelFortyEight="Beauty & Personal Care"
            h5Thirteen="Filter By Price"
            zeroOne="0"
            zipcodeTwo="1000"
            h6Two="Filter"
            h5Fourteen="Filter By Type"
            formchecklabelFifty="Digital Cameras"
            formchecklabelFiftyOne="Flashes"
            formchecklabelFiftyTwo="Lenses"
            formchecklabelFiftyThree="Lighting & Studio"
            formchecklabelFiftyFour="Tripods & Monopods"
            formchecklabelFiftyFive="Video Surveillance"
            h5Fifteen="Filter By Products"
            formchecklabelFiftySeven="Binoculars"
            formchecklabelFiftyEight="Monoculars"
            formchecklabelFiftyNine="Gun Scopes"
            formchecklabelSixty="Rifle Scopes"
            formchecklabelSixtyOne="Spotting & Monopods"
            formchecklabelSixtyTwo="Catadioptric Telescopes"
            h5Sixteen="Active Filters"
            h5Seventeen="Filter By Category"
            h5Eighteen="Filter By Type"
            h5Nineteen="Filter By Products"
            h5Twenty="Filter By Price"
            zeroTwo="0"
            zipcodeThree="1000"
          />
          <ELEMENTSColumnEleven
            className="flex flex-col items-center justify-start md:ml-[0] ml-[30px] w-auto md:w-full"
            h5Eleven="Active Filters"
            tag="Agata (9)"
            tagOne="Forniture (15)"
            tag1="Tag"
            tagOne1="Tag"
            h5Twelve="Filter By Category"
            formchecklabelFortyTwo="Camera, Photo & Video"
            formchecklabelFortyThree="TV & Video"
            formchecklabelFortyFour="Smart Home"
            formchecklabelFortyFive="Computers & Accessories"
            formchecklabelFortySix="Smartphones"
            formchecklabelFortySeven="Home Appliances"
            formchecklabelFortyEight="Beauty & Personal Care"
            h5Thirteen="Filter By Price"
            zeroOne="0"
            zipcodeTwo="1000"
            h6Two="Filter"
            h5Fourteen="Filter By Type"
            formchecklabelFifty="Digital Cameras"
            formchecklabelFiftyOne="Flashes"
            formchecklabelFiftyTwo="Lenses"
            formchecklabelFiftyThree="Lighting & Studio"
            formchecklabelFiftyFour="Tripods & Monopods"
            formchecklabelFiftyFive="Video Surveillance"
            h5Fifteen="Filter By Products"
            formchecklabelFiftySeven="Binoculars"
            formchecklabelFiftyEight="Monoculars"
            formchecklabelFiftyNine="Gun Scopes"
            formchecklabelSixty="Rifle Scopes"
            formchecklabelSixtyOne="Spotting & Monopods"
            formchecklabelSixtyTwo="Catadioptric Telescopes"
            h5Sixteen="Active Filters"
            h5Seventeen="Filter By Category"
            h5Eighteen="Filter By Type"
            h5Nineteen="Filter By Products"
            h5Twenty="Filter By Price"
            zeroTwo="0"
            zipcodeThree="1000"
          />
        </div>
      </div>
    </>
  );
};

export default ELEMENTSPage;
