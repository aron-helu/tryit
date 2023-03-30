import React from "react";

import { Img, Text } from "components";

const PRODUCTPAGEDESCRIPTIONColumnbackground = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[219px] md:h-[229px] relative w-full">
          <div className="h-[219px] m-auto w-full">
            <div className="h-[219px] m-auto w-full">
              {!!props?.background ? (
                <Img
                  src={props?.background}
                  className="absolute h-[219px] inset-[0] justify-center m-auto object-cover w-full"
                  alt="background"
                />
              ) : null}
              <div className="absolute flex h-max inset-[0] items-start justify-center m-auto pr-1.5 pt-1.5 w-auto">
                <Text
                  className="font-futuramaxicgbook font-normal leading-[22.00px] text-gray_600 text-left w-[19%] sm:w-full"
                  variant="body15"
                >
                  {props?.teamsaroundthe}
                </Text>
              </div>
            </div>
            <Img
              src="images/img_image1_75x77.png"
              className="absolute h-[75px] inset-y-[0] my-auto object-cover right-[29%] w-[5%]"
              alt="imageOne_One"
            />
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-start justify-start my-auto right-[23%] w-[47%]">
            <Img
              src="images/img_image2_70x319.png"
              className="h-[70px] sm:h-auto object-cover w-[43%] md:w-full"
              alt="imageTwo"
            />
            <Img
              src="images/img_image3.png"
              className="h-11 sm:h-auto ml-6 md:ml-[0] md:mt-0 mt-[17px] object-cover w-[31%] md:w-full"
              alt="imageThree"
            />
            <Img
              src="images/img_image4.png"
              className="h-[75px] sm:h-auto md:ml-[0] ml-[91px] md:mt-0 mt-1 object-cover w-[12%] md:w-full"
              alt="imageFour"
            />
          </div>
        </div>
      </div>
    </>
  );
};

PRODUCTPAGEDESCRIPTIONColumnbackground.defaultProps = {
  teamsaroundthe: "Shop safely with the best crypto payment processors",
};

export default PRODUCTPAGEDESCRIPTIONColumnbackground;
