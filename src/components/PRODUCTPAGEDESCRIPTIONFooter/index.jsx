import React from "react";

import { Img, Text, Line } from "components";

const PRODUCTPAGEDESCRIPTIONFooter = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex items-center justify-center mb-[43px] mt-20 mx-auto w-[93%]">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mr-[103px] w-[94%] md:w-full">
              <Img
                src="images/img_group451_90x403.png"
                className="h-[90px] sm:h-auto object-cover w-auto md:w-full"
                alt="group451_One"
              />
              <div className="flex flex-col gap-[25px] items-start justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                  <Text
                    className="font-bold font-montserrat text-left text-white_A700 tracking-[0.20px] w-auto"
                    variant="body15"
                  >
                    Information
                  </Text>
                  <Text
                    className="font-bold font-montserrat md:ml-[0] ml-[149px] text-left text-white_A700 tracking-[0.20px] w-auto"
                    variant="body15"
                  >
                    Second column
                  </Text>
                  <Text
                    className="font-bold font-montserrat md:ml-[0] ml-[122px] text-left text-white_A700 tracking-[0.20px] w-auto"
                    variant="body15"
                  >
                    Third column
                  </Text>
                  <Text
                    className="font-bold font-montserrat md:ml-[0] ml-[172px] text-left text-white_A700 tracking-[0.20px] w-auto"
                    variant="body15"
                  >
                    Social Media
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Text
                    className="font-futuramaxicgbook font-normal text-left text-white_A700 w-auto"
                    variant="body15"
                  >
                    About Us
                  </Text>
                  <Text
                    className="font-futuramaxicgbook font-normal md:ml-[0] ml-[174px] text-left text-white_A700 w-auto"
                    variant="body15"
                  >
                    Fifth link
                  </Text>
                  <Text
                    className="font-futuramaxicgbook font-normal md:ml-[0] ml-[182px] text-left text-white_A700 w-auto"
                    variant="body15"
                  >
                    Ninth link
                  </Text>
                  <div className="flex h-5 items-center justify-start md:ml-[0] ml-[173px] w-5">
                    <Img
                      src="images/img_facebook.svg"
                      className="h-5 w-5"
                      alt="facebook"
                    />
                  </div>
                  <div className="flex h-5 items-center justify-start md:ml-[0] ml-[17px] w-5">
                    <Img
                      src="images/img_linkedin.svg"
                      className="h-5 w-5"
                      alt="linkedin"
                    />
                  </div>
                  <Img
                    src="images/img_user.svg"
                    className="h-5 md:ml-[0] ml-[17px] w-5"
                    alt="user"
                  />
                  <div className="flex h-5 items-center justify-start md:ml-[0] ml-[17px] w-5">
                    <Img
                      src="images/img_twitter.svg"
                      className="h-5 w-5"
                      alt="twitter"
                    />
                  </div>
                  <Img
                    src="images/img_camera.svg"
                    className="h-5 md:ml-[0] ml-[17px] w-5"
                    alt="camera"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[511px] mr-[445px] mt-1 w-[37%] md:w-full">
              <Text
                className="font-futuramaxicgbook font-normal text-left text-white_A700 w-auto"
                variant="body15"
              >
                Shop With Crypto
              </Text>
              <Text
                className="font-futuramaxicgbook font-normal md:ml-[0] ml-[114px] text-left text-white_A700 w-auto"
                variant="body15"
              >
                Sixth link
              </Text>
              <Text
                className="font-futuramaxicgbook font-normal md:ml-[0] ml-[178px] text-left text-white_A700 w-auto"
                variant="body15"
              >
                Tenth link
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[62px] mr-[422px] mt-[5px] w-[68%] md:w-full">
              <Text
                className="font-futuramaxicgbook font-normal leading-[22.00px] text-center text-white_A700 w-[30%] sm:w-full"
                variant="body15"
              >
                iKing.io is the best place to shop with cryptocurrency.
              </Text>
              <Text
                className="font-futuramaxicgbook font-normal md:ml-[0] ml-[145px] text-left text-white_A700 w-auto"
                variant="body15"
              >
                How it Works
              </Text>
              <Text
                className="font-futuramaxicgbook font-normal md:ml-[0] ml-[145px] text-left text-white_A700 w-auto"
                variant="body15"
              >
                Seventh link
              </Text>
              <Text
                className="font-futuramaxicgbook font-normal md:ml-[0] ml-[153px] text-left text-white_A700 w-auto"
                variant="body15"
              >
                Eleventh link
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-start justify-start md:ml-[0] ml-[511px] mr-[670px] mt-[13px] w-[22%] md:w-full">
              <Text
                className="font-lato not-italic text-left text-white_A700 w-auto"
                variant="body12"
              >
                Fourth link
              </Text>
              <Text
                className="font-lato not-italic text-left text-white_A700 w-auto"
                variant="body12"
              >
                Eighth link
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center md:ml-[0] ml-[566px] mr-[540px] mt-[135px] w-[27%] md:w-full">
              <Text
                className="font-bold font-montserrat text-gray_703 text-right tracking-[0.20px] w-auto"
                variant="body15"
              >
                Privacy policy
              </Text>
              <Text
                className="font-bold font-montserrat md:ml-[0] ml-[54px] text-gray_703 text-right tracking-[0.20px] w-auto"
                variant="body15"
              >
                Term of service
              </Text>
              <Text
                className="font-bold font-montserrat ml-11 md:ml-[0] text-gray_703 text-right tracking-[0.20px] w-auto"
                variant="body15"
              >
                Language
              </Text>
            </div>
            <Line className="bg-gray_600_7a h-0.5 mt-[18px] w-full" />
            <Text
              className="font-lato md:ml-[0] ml-[629px] mr-[626px] mt-[21px] not-italic text-center text-gray_600 w-auto"
              variant="body12"
            ></Text>
          </div>
        </div>
      </footer>
    </>
  );
};

PRODUCTPAGEDESCRIPTIONFooter.defaultProps = {};

export default PRODUCTPAGEDESCRIPTIONFooter;
