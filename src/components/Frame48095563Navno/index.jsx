import React from "react";

import { Text, Img } from "components";

const Frame48095563Navno = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pr-[3px] pt-[3px] w-[68%] md:w-full">
          <div className="flex items-start justify-start md:mt-0 mt-[3px] self-stretch w-auto">
            <Text
              className="font-futuramaxicgdemi leading-[18.00px] text-center text-white_A700"
              variant="body16"
            >
              {props?.labelThree}
            </Text>
          </div>
          <Img
            src="images/img_arrowdown_yellow_a700.svg"
            className="h-2 md:ml-[0] ml-[11px] md:mt-0 mt-3 w-auto"
            alt="arrowdown_One"
          />
          <div className="flex items-start justify-start md:ml-[0] ml-[42px] self-stretch w-auto">
            <Text
              className="font-futuramaxicgdemi leading-[18.00px] text-center text-white_A700"
              variant="body16"
            >
              {props?.labelThree}
            </Text>
          </div>
          <div className="flex items-start justify-start ml-10 md:ml-[0] self-stretch w-auto">
            <Text
              className="font-futuramaxicgdemi leading-[18.00px] text-center text-white_A700"
              variant="body16"
            >
              {props?.labelThree}
            </Text>
          </div>
          <div className="flex items-start justify-start ml-10 md:ml-[0] self-stretch w-auto">
            <Text
              className="font-futuramaxicgdemi leading-[18.00px] text-center text-white_A700"
              variant="body16"
            >
              {props?.labelThree}
            </Text>
          </div>
          <Text
            className="font-futuramaxicgdemi ml-10 md:ml-[0] md:mt-0 mt-3 text-center text-white_A700 w-auto"
            variant="body16"
          >
            {props?.labelFour}
          </Text>
          <Text
            className="font-futuramaxicgdemi ml-10 md:ml-[0] md:mt-0 mt-[13px] text-center text-white_A700 w-auto"
            variant="body16"
          >
            {props?.labelFive}
          </Text>
          <Text
            className="font-futuramaxicgdemi md:ml-[0] ml-[26px] md:mt-0 mt-3 text-center text-white_A700 w-auto"
            variant="body16"
          >
            {props?.labelSix}
          </Text>
        </div>
      </div>
    </>
  );
};

Frame48095563Navno.defaultProps = {
  label: (
    <>
      Home <br />
      Appliances
    </>
  ),
  labelOne: (
    <>
      Home <br />
      Appliances
    </>
  ),
  labelTwo: (
    <>
      Home <br />
      Appliances
    </>
  ),
  labelThree: (
    <>
      Home <br />
      Appliances
    </>
  ),
  labelFour: "Smart Home",
  labelFive: "Smartphones",
  labelSix: "Tv & Video",
};

export default Frame48095563Navno;
