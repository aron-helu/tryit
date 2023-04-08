import React from "react";

import { Img } from "components";

const ELEMENTSColumncoinTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[147px] md:h-[213px] relative w-full">
          <Img
            src="images/img_coin_213x234.png"
            className="h-[213px] mx-auto object-cover w-full"
            alt="coin_Two"
          />
          <div className="absolute h-[213px] inset-x-[0] mx-auto top-[0] w-full">
            <Img
              src="images/img_coin_213x234.png"
              className="h-[213px] m-auto object-cover w-full"
              alt="coinmask_Two"
            />
            <div className="absolute h-[213px] inset-[0] justify-center m-auto w-full">
              <Img
                src="images/img_icon_213x234.png"
                className="h-[213px] m-auto object-cover w-full"
                alt="icon_Two"
              />
              <Img
                src="images/img_icon_213x234.png"
                className="absolute h-[213px] inset-[0] justify-center m-auto object-cover w-full"
                alt="iconmask_Two"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ELEMENTSColumncoinTwo.defaultProps = {};

export default ELEMENTSColumncoinTwo;
