import React from "react";

import { Text, Img, List } from "components";
import ELEMENTSCard from "components/ELEMENTSCard";

const DesktopproductcardsTwentyFivePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-montserrat items-center justify-start mx-auto p-3.5 w-full">
        <div className="flex md:flex-col flex-row gap-[21px] items-center justify-start max-w-[1520px] mb-[70px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-1 h-[797px] md:h-auto items-start justify-start pb-[47px] self-stretch w-auto sm:w-full">
            <div className="flex items-start justify-start self-stretch w-auto">
              <div
                className="bg-cover bg-no-repeat bg-white_A700 border border-blue_200 border-solid h-[796px] relative w-full"
                style={{
                  backgroundImage: "url('images/img_carditem_gray_404.svg')",
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
                                  <br /> realms of Classical physics: <br />
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
          <div className="flex md:flex-1 flex-col items-center justify-start w-[74%] md:w-full">
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
            <List
              className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[33px] w-full"
              orientation="horizontal"
            >
              {new Array(3).fill({}).map((props, index) => (
                <React.Fragment key={`ELEMENTSCard${index}`}>
                  <ELEMENTSCard
                    className="flex flex-1 flex-col items-center justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
            <div className="font-hind h-[39px] md:h-[69px] mt-[30px] relative w-[28%]">
              <div className="absolute flex h-full inset-[0] items-center justify-center m-auto w-[58%]">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="h-[39px] relative w-[18%]">
                    <div className="absolute bg-yellow_A701 h-[30px] inset-[0] justify-center m-auto rounded-[50%] w-[30px]"></div>
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
    </>
  );
};

export default DesktopproductcardsTwentyFivePage;
