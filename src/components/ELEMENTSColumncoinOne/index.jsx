import React from "react";

import { Img } from "components";

const ELEMENTSColumncoinOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[107px] relative w-full">
          <Img
            src="images/img_coin_107x112.png"
            className="h-[107px] m-auto object-cover w-full"
            alt="coin_One"
          />
          <div className="absolute h-[107px] inset-[0] justify-center m-auto w-full">
            <Img
              src="images/img_coin_107x112.png"
              className="h-[107px] m-auto object-cover w-full"
              alt="coinmask_One"
            />
            <div className="absolute h-[107px] inset-[0] justify-center m-auto w-full">
              <Img
                src="images/img_icon_107x112.png"
                className="h-[107px] m-auto object-cover w-full"
                alt="icon_One"
              />
              <Img
                src="images/img_icon_107x112.png"
                className="absolute h-[107px] inset-[0] justify-center m-auto object-cover w-full"
                alt="iconmask_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ELEMENTSColumncoinOne.defaultProps = {};

export default ELEMENTSColumncoinOne;
