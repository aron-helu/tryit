import React from "react";

import { Text, Button, Img, RadioGroup, Radio, CheckBox } from "components";

const ELEMENTSColumnh5Sixteen = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 flex flex-col gap-[25px] items-start justify-start p-[25px] sm:px-5 w-[333px] md:w-full">
          <Text
            className="font-bold font-montserrat text-gray_800 text-left tracking-[0.10px] w-auto"
            variant="body13"
          >
            {props?.h5Sixteen}
          </Text>
          <div className="flex items-center justify-start w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
              <div className="flex flex-row gap-[13px] items-center justify-between w-full">
                <Button
                  className="border border-gray_900 border-solid cursor-pointer flex items-center justify-center min-w-[119px] px-[15px] py-2.5 rounded-[5px] w-auto"
                  rightIcon={
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="mt-0.5 mb-[5px] ml-2.5"
                      alt="close"
                    />
                  }
                >
                  <div className="font-bold font-montserrat text-gray_900 text-left text-sm tracking-[0.20px]">
                    {props?.agata9Two}
                  </div>
                </Button>
                <Button
                  className="border border-gray_900 border-solid cursor-pointer flex items-center justify-center min-w-[149px] px-[15px] py-2.5 rounded-[5px] w-auto"
                  rightIcon={
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="mt-[3px] mb-1 ml-2.5"
                      alt="close"
                    />
                  }
                >
                  <div className="font-bold font-montserrat text-gray_900 text-left text-sm tracking-[0.20px]">
                    {props?.forniture15Two}
                  </div>
                </Button>
              </div>
              <div className="flex flex-row gap-[13px] items-center justify-start w-[61%] md:w-full">
                <Button
                  className="border border-gray_900 border-solid cursor-pointer flex items-center justify-center min-w-[78px] px-[15px] py-2.5 rounded-[5px] w-auto"
                  rightIcon={
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="mt-0.5 mb-[5px] ml-2.5"
                      alt="close"
                    />
                  }
                >
                  <div className="font-bold font-montserrat text-gray_900 text-left text-sm tracking-[0.20px]">
                    {props?.tagSix}
                  </div>
                </Button>
                <Button
                  className="border border-gray_900 border-solid cursor-pointer flex items-center justify-center min-w-[78px] px-[15px] py-2.5 rounded-[5px] w-auto"
                  rightIcon={
                    <Img
                      src="images/img_close_gray_900.svg"
                      className="mt-0.5 mb-[5px] ml-2.5"
                      alt="close"
                    />
                  }
                >
                  <div className="font-bold font-montserrat text-gray_900 text-left text-sm tracking-[0.20px]">
                    {props?.tagSeven}
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative w-full">
          <div className="bg-white_A700 flex flex-col gap-[25px] items-start justify-end mt-[-NaNpx] mx-auto p-[25px] sm:px-5 w-[333px] md:w-full z-[1]">
            <Text
              className="font-bold font-montserrat text-gray_800 text-left tracking-[0.10px] w-auto"
              variant="body13"
            >
              {props?.h5Seventeen}
            </Text>
            <RadioGroup
              selectedValue="CameraPhotoVideo"
              className="flex flex-col gap-[15px] items-start justify-start w-full"
              name="contentcard"
            >
              <Radio
                value="CameraPhotoVideo"
                className="font-bold font-montserrat sm:pr-5 text-gray_800 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-yellow_A700 h-[25px] mr-[5px] rounded-[12px] w-[25px]"
                checked={true}
                name="contentcard"
                label="Camera Photo  Video"
                id="CameraPhotoVideo"
              ></Radio>
              <Radio
                value="TVVideo"
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[12px] w-[25px]"
                checked={false}
                name="contentcard"
                label="TV  Video"
                id="TVVideo"
              ></Radio>
              <Radio
                value="SmartHome"
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[12px] w-[25px]"
                checked={false}
                name="contentcard"
                label="Smart Home"
                id="SmartHome"
              ></Radio>
              <Radio
                value="ComputersAccessories"
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[12px] w-[25px]"
                checked={false}
                name="contentcard"
                label="Computers  Accessories"
                id="ComputersAccessories"
              ></Radio>
              <Radio
                value="Smartphones"
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[12px] w-[25px]"
                checked={false}
                name="contentcard"
                label="Smartphones"
                id="Smartphones"
              ></Radio>
              <Radio
                value="HomeAppliances"
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[12px] w-[25px]"
                checked={false}
                name="contentcard"
                label="Home Appliances"
                id="HomeAppliances"
              ></Radio>
              <Radio
                value="BeautyPersonalCare"
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[12px] w-[25px]"
                checked={false}
                name="contentcard"
                label="Beauty  Personal Care"
                id="BeautyPersonalCare"
              ></Radio>
            </RadioGroup>
          </div>
          <div className="bg-white_A700 flex flex-col gap-[25px] items-start justify-end mt-[-25px] mx-auto p-[25px] sm:px-5 w-[333px] md:w-full z-[1]">
            <Text
              className="font-bold font-montserrat text-gray_800 text-left tracking-[0.10px] w-auto"
              variant="body13"
            >
              {props?.h5Eighteen}
            </Text>
            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
              <div className="h-7 md:h-[25px] pb-0.5 pr-0.5 relative w-full">
                {!!props?.formchecklabelSeventy ? (
                  <CheckBox
                    className="font-bold font-montserrat my-auto text-gray_800 text-left text-sm tracking-[0.20px]"
                    inputClassName="absolute bg-white_A700 border border-solid border-white_A700 h-[25px] mr-[5px] rounded-[5px] w-[25px]"
                    name="formchecklabel_Seventy"
                    id="formchecklabel_Seventy"
                    label="Binoculars & Scopes"
                    checked={props?.formchecklabelSeventy}
                  ></CheckBox>
                ) : null}
                {!!props?.formchecklabelSeventyOne ? (
                  <CheckBox
                    className="font-bold font-montserrat text-gray_800 text-left text-sm tracking-[0.20px]"
                    inputClassName="absolute bg-yellow_A700 border-2 border-solid border-yellow_A700 h-[25px] mr-[5px] rounded-[5px] w-[25px]"
                    name="formchecklabel_SeventyOne"
                    id="formchecklabel_SeventyOne"
                    label="Binoculars & Scopes"
                    checked={props?.formchecklabelSeventyOne}
                  ></CheckBox>
                ) : null}
              </div>
              <CheckBox
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
                name="formchecklabel_SeventyTwo"
                id="formchecklabel_SeventyTwo"
                label="Digital Cameras"
              ></CheckBox>
              <CheckBox
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
                name="formchecklabel_SeventyThree"
                id="formchecklabel_SeventyThree"
                label="Flashes"
              ></CheckBox>
              <CheckBox
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
                name="formchecklabel_SeventyFour"
                id="formchecklabel_SeventyFour"
                label="Lenses"
              ></CheckBox>
              <CheckBox
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
                name="formchecklabel_SeventyFive"
                id="formchecklabel_SeventyFive"
                label="Lighting & Studio"
              ></CheckBox>
              <CheckBox
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
                name="formchecklabel_SeventySix"
                id="formchecklabel_SeventySix"
                label="Tripods & Monopods"
              ></CheckBox>
              <CheckBox
                className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
                inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
                name="formchecklabel_SeventySeven"
                id="formchecklabel_SeventySeven"
                label="Video Surveillance"
              ></CheckBox>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col gap-[25px] items-start justify-start p-[25px] sm:px-5 w-[333px] md:w-full">
          <Text
            className="font-bold font-montserrat text-gray_800 text-left tracking-[0.10px] w-auto"
            variant="body13"
          >
            {props?.h5Nineteen}
          </Text>
          <div className="flex flex-col gap-[15px] items-start justify-start w-full">
            <div className="h-7 md:h-[25px] pb-0.5 pr-0.5 relative w-full">
              {!!props?.formchecklabelSeventyEight ? (
                <CheckBox
                  className="font-bold font-montserrat my-auto text-gray_800 text-left text-sm tracking-[0.20px]"
                  inputClassName="absolute bg-white_A700 border border-solid border-white_A700 h-[25px] mr-[5px] rounded-[5px] w-[25px]"
                  name="formchecklabel_SeventyEight"
                  id="formchecklabel_SeventyEight"
                  label="Microscopes"
                  checked={props?.formchecklabelSeventyEight}
                ></CheckBox>
              ) : null}
              {!!props?.formchecklabelSeventyNine ? (
                <CheckBox
                  className="font-bold font-montserrat text-gray_800 text-left text-sm tracking-[0.20px]"
                  inputClassName="absolute bg-yellow_A700 border-2 border-solid border-yellow_A700 h-[25px] mr-[5px] rounded-[5px] w-[25px]"
                  name="formchecklabel_SeventyNine"
                  id="formchecklabel_SeventyNine"
                  label="Microscopes"
                  checked={props?.formchecklabelSeventyNine}
                ></CheckBox>
              ) : null}
            </div>
            <CheckBox
              className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
              inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
              name="formchecklabel_Eighty"
              id="formchecklabel_Eighty"
              label="Binoculars"
            ></CheckBox>
            <CheckBox
              className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
              inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
              name="formchecklabel_EightyOne"
              id="formchecklabel_EightyOne"
              label="Monoculars"
            ></CheckBox>
            <CheckBox
              className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
              inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
              name="formchecklabel_EightyTwo"
              id="formchecklabel_EightyTwo"
              label="Gun Scopes"
            ></CheckBox>
            <CheckBox
              className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
              inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
              name="formchecklabel_EightyThree"
              id="formchecklabel_EightyThree"
              label="Rifle Scopes"
            ></CheckBox>
            <CheckBox
              className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
              inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
              name="formchecklabel_EightyFour"
              id="formchecklabel_EightyFour"
              label="Spotting & Monopods"
            ></CheckBox>
            <CheckBox
              className="font-bold font-montserrat sm:pr-5 text-gray_600 text-left text-sm tracking-[0.20px]"
              inputClassName="bg-white_A700 border border-gray_300 border-solid h-[25px] mr-[5px] rounded-[5px] w-[25px]"
              name="formchecklabel_EightyFive"
              id="formchecklabel_EightyFive"
              label="Catadioptric Telescopes"
            ></CheckBox>
          </div>
        </div>
        <div className="bg-white_A700 flex flex-col gap-[15px] items-start justify-start p-[25px] sm:px-5 w-[333px] md:w-full">
          <Text
            className="font-bold font-montserrat text-gray_800 text-left tracking-[0.10px] w-auto"
            variant="body13"
          >
            {props?.h5Twenty}
          </Text>
          <div className="flex flex-col gap-[13px] items-start justify-start pb-0.5 w-full">
            <Img
              src="images/img_formcontrolrange.svg"
              className="h-[13px] w-auto"
              alt="formcontrolrang_Three"
            />
            <div className="flex flex-row gap-[23px] items-start justify-start w-[283px]">
              <div className="bg-white_A700 border border-solid border-white_A700 h-[50px] relative rounded-[5px] w-[46%]">
                {!!props?.zeroTwo ? (
                  <Text
                    className="absolute font-futuramaxicgbook font-normal h-max inset-y-[0] left-[19%] my-auto text-gray_600 text-left w-auto"
                    variant="body13"
                  >
                    {props?.zeroTwo}
                  </Text>
                ) : null}
                <div className="absolute bg-gray_52 border border-gray_301 border-solid flex h-full inset-[0] items-start justify-center m-auto p-[15px] rounded-[5px] w-full">
                  {!!props?.zeroThree ? (
                    <Text
                      className="font-montserrat font-normal md:ml-[0] ml-[5px] not-italic text-gray_601 text-left tracking-[0.20px] w-auto"
                      variant="body15"
                    >
                      {props?.zeroThree}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center justify-start w-[46%]">
                <div className="bg-white_A700 border border-solid border-white_A700 h-[50px] relative rounded-[5px] w-full">
                  {!!props?.zipcodeThree ? (
                    <Text
                      className="absolute font-futuramaxicgbook font-normal h-max inset-y-[0] left-[18%] my-auto text-gray_600 text-left w-auto"
                      variant="body13"
                    >
                      {props?.zipcodeThree}
                    </Text>
                  ) : null}
                  <div className="absolute bg-gray_52 border border-gray_301 border-solid flex h-full inset-[0] items-start justify-center m-auto p-[15px] rounded-[5px] w-full">
                    {!!props?.zipcodeFour ? (
                      <Text
                        className="font-montserrat font-normal md:ml-[0] ml-[5px] not-italic text-gray_601 text-left tracking-[0.20px] w-auto"
                        variant="body15"
                      >
                        {props?.zipcodeFour}
                      </Text>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!!props?.filterOne ? (
            <Button className="bg-yellow_A700 cursor-pointer font-bold font-montserrat px-5 py-2.5 rounded-[5px] text-center text-sm text-white_A700 tracking-[0.20px] w-[283px]">
              {props?.filterOne}
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

ELEMENTSColumnh5Sixteen.defaultProps = {
  h5Sixteen: "Active Filters",
  agata9Two: "Agata (9)",
  forniture15Two: "Forniture (15)",
  tagSix: "Tag",
  tagSeven: "Tag",
  h5Seventeen: "Filter By Category",
  h5Eighteen: "Filter By Type",
  h5Nineteen: "Filter By Products",
  h5Twenty: "Filter By Price",
};

export default ELEMENTSColumnh5Sixteen;
