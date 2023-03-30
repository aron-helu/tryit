import React from "react";

import { Text, Slider, Img } from "components";

const DesktopclientsThreePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray_900 flex flex-col gap-[50px] items-center justify-end mx-auto p-[69px] md:px-10 sm:px-5 w-full">
        <div className="flex items-center justify-start max-w-[864px] mt-[30px] w-full">
          <div className="flex flex-col gap-[30px] items-center justify-start max-w-[864px] w-full">
            <Text
              className="font-futuramaxicgbold leading-[45.00px] max-w-[733px] md:max-w-full text-bluegray_901 text-center tracking-[0.84px]"
              variant="body2"
            ></Text>
            <Text
              className="font-futuramaxicgdemi leading-[18.00px] max-w-[696px] md:max-w-full text-center text-white_A700"
              variant="body16"
            >
              We pride ourselves on being the leading cryptocurrency-friendly
              electronic products platform. Pay for your purchases anywhere in
              the world seamlessly using your favorite cryptocurrency.
            </Text>
          </div>
        </div>
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
          activeSlideCSS="scale-[1.00]"
          ref={sliderRef}
          className="max-w-[988px] mx-auto w-full"
          items={[...Array(9)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex items-center justify-start mx-2.5 self-stretch">
                <div className="gap-[30px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 items-center justify-between w-full">
                  <Img
                    src="images/img_bluetooth.svg"
                    className="h-16 w-16"
                    alt="bluetooth"
                  />
                  <Img
                    src="images/img_arrowdown_teal_300.svg"
                    className="h-16 w-16"
                    alt="arrowdown"
                  />
                  <Img
                    src="images/img_send.svg"
                    className="h-16 w-16"
                    alt="send"
                  />
                  <Img
                    src="images/img_clock.svg"
                    className="h-16 w-16"
                    alt="clock"
                  />
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-16 w-16"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_info_lime_801.svg"
                    className="h-16 w-16"
                    alt="info"
                  />
                  <Img
                    src="images/img_arrowup.svg"
                    className="h-16 w-16"
                    alt="arrowup"
                  />
                  <Img
                    src="images/img_bag_yellow_700.svg"
                    className="h-16 w-16"
                    alt="bag"
                  />
                  <Img
                    src="images/img_solana.png"
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    alt="solana"
                  />
                  <Img
                    src="images/img_sushiswap.png"
                    className="h-16 md:h-auto object-cover w-16"
                    alt="sushiswap"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
    </>
  );
};

export default DesktopclientsThreePage;
