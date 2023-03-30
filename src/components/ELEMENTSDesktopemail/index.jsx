import React from "react";

import { Text, Button, Img } from "components";

const ELEMENTSDesktopemail = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[534px] items-start justify-end p-[66px] md:px-10 sm:px-5 right-[0] w-[91%]"
          style={{ backgroundImage: "url('images/img_group78.png')" }}
        >
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[53px] mr-auto mt-56 w-4/5 md:w-full">
            <Text
              className="font-futuramaxicgbook font-normal leading-[22.00px] text-gray_701 text-left w-auto"
              variant="body15"
            >
              {props?.getweeklyupdateOne}
            </Text>
            <div className="md:h-20 h-[115px] md:mt-0 mt-2.5 relative w-[61%] md:w-full">
              <div className="absolute bg-white_A700 flex flex-row gap-[26px] inset-x-[0] items-center justify-start mx-auto p-[13px] shadow-bs top-[0] w-full">
                <Button className="bg-purple_900 flex h-[54px] items-center justify-center ml-0.5 p-[7px] w-[54px]">
                  <Img
                    src="images/img_emailicon.png"
                    className=""
                    alt="emailicon"
                  />
                </Button>
                <Text
                  className="font-futuramaxicgbook text-gray_702 text-left w-auto"
                  variant="body8"
                >
                  {props?.email}
                </Text>
              </div>
              <Button className="absolute bg-yellow_A700 bottom-[0] cursor-pointer font-poppins font-semibold leading-[normal] min-w-[206px] py-[23px] right-[0] text-base text-center text-gray_900 tracking-[2.56px] w-auto">
                {props?.subscribe}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-start left-[9%] top-[16%] w-2/5">
          <div className="flex flex-col gap-[9px] items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start w-[83%] md:w-full">
              <Text
                className="font-codeprobold text-gray_900 text-left tracking-[0.67px] w-auto"
                as="h3"
                variant="h3"
              >
                {props?.subscribeto}
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
                className="font-codeprobold text-gray_900 text-left tracking-[0.67px] w-auto"
                as="h3"
                variant="h3"
              >
                {props?.ournewsletter}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ELEMENTSDesktopemail.defaultProps = {
  getweeklyupdateOne:
    "Get weekly update about our product on your email, no spam guaranteed we promise ✌️",
  email: "youremail123@gmail.com",
  subscribe: "SUBSCRIBE",
  subscribeto: "Subscribe to",
  ournewsletter: "Our Newsletter",
};

export default ELEMENTSDesktopemail;
