import React from "react";

import { Img } from "components";

const ELEMENTSColumncoin = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[136px] relative w-[136px]">
          <Img
            src="images/img_coin.png"
            className="h-[136px] m-auto object-cover w-[136px]"
            alt="coin"
          />
          <div className="absolute h-[136px] inset-[0] justify-center m-auto w-[136px]">
            <Img
              src="images/img_coin.png"
              className="h-[136px] m-auto object-cover w-[136px]"
              alt="coinmask"
            />
            <div className="absolute h-[136px] inset-[0] justify-center m-auto w-[136px]">
              <Img
                src="images/img_icon.png"
                className="h-[136px] m-auto object-cover w-[136px]"
                alt="icon"
              />
              <Img
                src="images/img_icon.png"
                className="absolute h-[136px] inset-[0] justify-center m-auto object-cover w-[136px]"
                alt="iconmask"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ELEMENTSColumncoin.defaultProps = {};

export default ELEMENTSColumncoin;
