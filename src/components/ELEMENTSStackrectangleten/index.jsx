import React from "react";

import { Img, Text, Button } from "components";

const ELEMENTSStackrectangleten = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.rectangleten ? (
          <Img
            src={props?.rectangleten}
            className="absolute h-[281px] inset-x-[0] mx-auto object-cover top-[3%] w-full"
            alt="rectangleTen"
          />
        ) : null}
        {!!props?.rectangleeleven ? (
          <Img
            src={props?.rectangleeleven}
            className="absolute h-[281px] inset-x-[0] mx-auto object-cover top-[3%] w-full"
            alt="rectangleEleven"
          />
        ) : null}
        <div
          className="absolute bg-cover bg-no-repeat flex h-full inset-[0] items-center justify-center m-auto p-[41px] md:px-10 sm:px-5 w-[1621px] md:w-full"
          style={{ backgroundImage: "url('images/img_group79.png')" }}
        >
          <div className="flex flex-col items-center justify-start mb-[352px] w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start md:mt-0 mt-[68px] w-auto md:w-full">
                <Text
                  className="font-futuramaxicgbold leading-[52.00px] text-left text-yellow_A700 w-full"
                  variant="body1"
                >
                  {props?.offerOne}
                </Text>
                <Button className="bg-yellow_A701 cursor-pointer font-bold font-montserrat sm:px-5 px-9 py-[15px] rounded-[26px] text-center text-gray_900 text-sm tracking-[0.20px] w-[163px]">
                  {props?.buyNow}
                </Button>
              </div>
              <Img
                src={props?.imageone}
                className="h-[294px] sm:h-auto object-cover w-auto md:w-full"
                alt="imageOne"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
              <div className="flex md:flex-1 items-center justify-start w-[49%] md:w-full">
                <div className="flex flex-col relative w-full">
                  <div className="h-[705px] mx-auto w-full">
                    {!!props?.bgThree ? (
                      <Img
                        src={props?.bgThree}
                        className="h-[705px] m-auto object-cover w-full"
                        alt="bg_Three"
                      />
                    ) : null}
                    <div className="absolute flex items-center justify-start left-[6%] top-[8%] w-3/5">
                      <div className="flex items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          {!!props?.home ? (
                            <Text
                              className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                              variant="body15"
                            >
                              {props?.home}
                            </Text>
                          ) : null}
                          {!!props?.nine ? (
                            <Text
                              className="font-medium font-roboto text-gray_700 text-left w-auto"
                              variant="body13"
                            >
                              {props?.nine}
                            </Text>
                          ) : null}
                          {!!props?.cameras ? (
                            <Text
                              className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                              variant="body15"
                            >
                              {props?.cameras}
                            </Text>
                          ) : null}
                          {!!props?.ten ? (
                            <Text
                              className="font-medium font-roboto text-gray_700 text-left w-auto"
                              variant="body13"
                            >
                              {props?.ten}
                            </Text>
                          ) : null}
                          {!!props?.digitalcameras ? (
                            <Text
                              className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                              variant="body15"
                            >
                              {props?.digitalcameras}
                            </Text>
                          ) : null}
                          {!!props?.eleven ? (
                            <Text
                              className="font-medium font-roboto text-gray_700 text-left w-auto"
                              variant="body13"
                            >
                              {props?.eleven}
                            </Text>
                          ) : null}
                          {!!props?.productpage ? (
                            <Text
                              className="font-futuramaxicgbook font-normal text-gray_700 text-left w-auto"
                              variant="body15"
                            >
                              {props?.productpage}
                            </Text>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  {!!props?.bgFour ? (
                    <Img
                      src={props?.bgFour}
                      className="h-[250px] mt-[-63px] object-cover w-[32%] z-[1]"
                      alt="bg_Four"
                    />
                  ) : null}
                  {!!props?.bgFive ? (
                    <Img
                      src={props?.bgFive}
                      className="h-[250px] mt-[-63px] mx-auto object-cover w-[32%] z-[1]"
                      alt="bg_Five"
                    />
                  ) : null}
                  {!!props?.bgSix ? (
                    <Img
                      src={props?.bgSix}
                      className="h-[250px] ml-auto mt-[-63px] object-cover w-[32%] z-[1]"
                      alt="bg_Six"
                    />
                  ) : null}
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:mt-0 mt-[186px] w-1/2 md:w-full">
                <div className="flex flex-col gap-[51px] justify-start w-full">
                  <div className="flex flex-col items-start justify-start ml-3 md:ml-[0] w-[99%] md:w-full">
                    {!!props?.vseries65class ? (
                      <Text
                        className="font-futuramaxicgbold leading-[42.00px] text-gray_911 text-left w-full"
                        variant="body4"
                      >
                        {props?.vseries65class}
                      </Text>
                    ) : null}
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <div className="flex flex-row gap-2.5 items-end justify-start mt-1 w-auto">
                        {!!props?.element ? (
                          <div className="bg-light_green_900 h-3 my-[5px] rounded-[50%] w-3"></div>
                        ) : null}
                        {!!props?.instock ? (
                          <Text
                            className="font-hind font-normal not-italic text-gray_911 text-left w-auto"
                            variant="body15"
                          >
                            {props?.instock}
                          </Text>
                        ) : null}
                      </div>
                      {!!props?.favorite ? (
                        <Button className="bg-white_A700 border border-gray_800 border-solid flex h-[34px] items-center justify-center p-2 rounded-[50%] w-[34px]">
                          <Img
                            src={props?.favorite}
                            className="h-[18px]"
                            alt="favorite"
                          />
                        </Button>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-start mt-[19px] w-[29%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-[7px] items-start justify-between w-full">
                          <div className="flex items-center justify-start w-auto">
                            {!!props?.price ? (
                              <Text
                                className="font-futuramaxicgbold font-normal text-left text-purple_900 w-auto"
                                variant="body5"
                              >
                                {props?.price}
                              </Text>
                            ) : null}
                          </div>
                          <div className="flex mt-[3px] relative w-[24%]">
                            <div className="flex items-center justify-start my-auto w-[21px]">
                              {!!props?.arrowdownOne ? (
                                <Img
                                  src={props?.arrowdownOne}
                                  className="h-5 rounded-[50%] w-[21px]"
                                  alt="arrowdown_One"
                                />
                              ) : null}
                            </div>
                            {!!props?.priceOne ? (
                              <Text
                                className="font-futuramaxicgdemi ml-[-0.03px] mt-[3px] text-gray_600_a0 text-left w-auto z-[1]"
                                variant="body17"
                              >
                                {props?.priceOne}
                              </Text>
                            ) : null}
                          </div>
                        </div>
                        {!!props?.paywith2000 ? (
                          <Text
                            className="font-futuramaxicgdemi text-gray_600_a0 text-left w-auto"
                            variant="body17"
                          >
                            {props?.paywith2000}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start mt-[22px] w-[31%] md:w-full">
                      {!!props?.p49 ? (
                        <Button
                          className="bg-purple_900 cursor-pointer flex items-center justify-center min-w-[50px] p-[5px] rounded-[13px] w-auto"
                          leftIcon={
                            <Img
                              src="images/img_star.svg"
                              className="mr-[5px]"
                              alt="star"
                            />
                          }
                        >
                          <div className="font-montserrat font-normal not-italic text-left text-white_A700 text-xs tracking-[0.20px]">
                            {props?.p49}
                          </div>
                        </Button>
                      ) : null}
                      <div className="flex flex-row items-start justify-between w-[71%]">
                        {!!props?.reviewcounter ? (
                          <Text
                            className="font-hind font-normal not-italic text-gray_911 text-left w-auto"
                            variant="body15"
                          >
                            {props?.reviewcounter}
                          </Text>
                        ) : null}
                        {!!props?.twelve ? (
                          <Text
                            className="font-hind font-normal not-italic text-gray_911 text-left w-auto"
                            variant="body15"
                          >
                            {props?.twelve}
                          </Text>
                        ) : null}
                        {!!props?.addreview ? (
                          <Text
                            className="font-hind font-normal not-italic text-gray_911 text-left w-auto"
                            variant="body15"
                          >
                            {props?.addreview}
                          </Text>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[64%] md:w-full">
                    <div className="bg-white_A700 border border-gray_800 border-solid flex flex-row items-center justify-center p-[15px] rounded-[26px] w-[22%] sm:w-full">
                      {!!props?.thirteen ? (
                        <Text
                          className="font-bold font-montserrat ml-[9px] mt-0.5 text-gray_700 text-left tracking-[0.20px] w-auto"
                          variant="body15"
                        >
                          {props?.thirteen}
                        </Text>
                      ) : null}
                      {!!props?.two ? (
                        <Text
                          className="font-bold font-montserrat ml-2.5 text-gray_700 text-left tracking-[0.20px] w-auto"
                          variant="body15"
                        >
                          {props?.two}
                        </Text>
                      ) : null}
                      {!!props?.fourteen ? (
                        <Text
                          className="font-bold font-montserrat mx-2.5 text-gray_700 text-left tracking-[0.20px] w-auto"
                          variant="body15"
                        >
                          {props?.fourteen}
                        </Text>
                      ) : null}
                    </div>
                    <div className="h-[52px] ml-6 sm:ml-[0] relative w-[39%] sm:w-full">
                      {!!props?.cartOne ? (
                        <Img
                          src={props?.cartOne}
                          className="h-4 ml-[30px] my-auto w-4"
                          alt="cart_One"
                        />
                      ) : null}
                      {!!props?.buttonmd ? (
                        <Text
                          className="absolute border border-gray_800 border-solid font-bold font-montserrat h-full inset-[0] m-auto sm:px-5 px-[30px] py-[15px] rounded-[26px] self-stretch text-gray_800 text-left tracking-[0.20px] w-max"
                          variant="body15"
                        >
                          {props?.buttonmd}
                        </Text>
                      ) : null}
                    </div>
                    {!!props?.buyNowOne ? (
                      <Button className="bg-yellow_A701 cursor-pointer font-bold font-montserrat min-w-[140px] ml-5 sm:ml-[0] sm:px-5 px-9 py-[15px] rounded-[26px] text-center text-gray_800 text-sm tracking-[0.20px] w-auto">
                        {props?.buyNowOne}
                      </Button>
                    ) : null}
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

ELEMENTSStackrectangleten.defaultProps = {
  offerOne: "Grab Upto 50% Off On Selected TV & Video",
  buyNow: "Buy Now",
  imageone: "images/img_image1_1.png",
};

export default ELEMENTSStackrectangleten;
