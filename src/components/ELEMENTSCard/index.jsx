import React from "react";

import { Img, Text, Button } from "components";

const ELEMENTSCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[548px] relative w-full">
          <div className="absolute h-[546px] inset-[0] justify-center m-auto shadow-bs1 w-full"></div>
          <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-center justify-start m-auto w-[348px] md:w-full">
            <div className="h-[300px] relative w-full">
              <Img
                src={props?.productcoverfive}
                className="absolute h-[300px] inset-[0] justify-center m-auto object-cover w-full"
                alt="productcoverFive"
              />
              <Img
                src="images/img_eye.svg"
                className="absolute bottom-[8%] h-10 inset-x-[0] mx-auto w-[90px]"
                alt="eye"
              />
              {!!props?.tagTwo ? (
                <Text
                  className="absolute bg-red_600 font-bold font-montserrat justify-center left-[6%] px-2.5 rounded-[3px] self-stretch text-center text-shadow-ts text-white_A700 top-[7%] tracking-[0.20px] w-auto"
                  variant="body15"
                >
                  {props?.tagTwo}
                </Text>
              ) : null}
            </div>
            <div className="flex items-start justify-start pb-[35px] pt-[25px] sm:px-5 px-[25px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                  <div className="flex items-center justify-start self-stretch w-auto">
                    <Text
                      className="font-futuramaxicgdemi text-gray_600 text-left w-auto"
                      variant="body16"
                    >
                      {props?.linkproductcate}
                    </Text>
                  </div>
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
                </div>
                <Text
                  className="font-futuramaxicgdemi leading-[18.00px] mt-2.5 text-gray_900 text-left w-[94%] sm:w-full"
                  variant="body16"
                >
                  {props?.paragraphproduc}
                </Text>
                <div className="flex items-start justify-start mt-2.5 px-[3px] py-[5px] self-stretch w-auto">
                  <Text
                    className="font-bold font-montserrat text-center text-purple_900 tracking-[0.20px] w-auto"
                    variant="body15"
                  >
                    {props?.priceThree}
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[13px] w-full">
                  <Button
                    className="border border-gray_900 border-solid cursor-pointer flex items-center justify-center min-w-[143px] px-5 py-2.5 rounded-[21px] w-auto"
                    leftIcon={
                      <Img
                        src="images/img_cart.svg"
                        className="mb-0.5 mr-1"
                        alt="cart"
                      />
                    }
                  >
                    <div className="font-bold font-montserrat text-gray_900 text-left text-sm tracking-[0.20px]">
                      {props?.addToCart}
                    </div>
                  </Button>
                  <Button className="bg-yellow_A700 cursor-pointer font-bold font-montserrat min-w-[108px] px-5 py-2.5 rounded-[21px] text-center text-gray_902 text-sm tracking-[0.20px] w-auto">
                    {props?.buyNowThree}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ELEMENTSCard.defaultProps = {
  productcoverfive: "images/img_image1_294x364.png",
  linkproductcate: "Digital Cameras",
  p49: "4.9",
  paragraphproduc:
    "Nikon D7200 24.2 MP DX-Format Digital SLR Body with Wi-Fi and NFC (Black)(Renewed)",
  priceThree: "$6.48",
  addToCart: "Add to cart",
  buyNowThree: "Buy Now",
};

export default ELEMENTSCard;
