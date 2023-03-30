import React from "react";

import { Text, Button } from "components";

const CardssectionexampleFourPage = () => {
  return (
    <>
      <div className="flex font-montserrat items-center justify-start mx-auto pb-[287px] w-full">
        <div className="bg-gray_900 flex items-center justify-start max-w-[1512px] py-[100px] w-full">
          <div className="flex items-center justify-start max-w-[1175px] md:px-5 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="font-semibold font-urbanist text-left text-white_A700 w-auto"
                  variant="body3"
                ></Text>
                <Text
                  className="font-futuramaxicgbook font-normal leading-[29.00px] max-w-[1175px] md:max-w-full text-left text-white_A700"
                  variant="body11"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  est amet a ornare tempus, risus. Integer in nunc tempus nunc,
                  risus, vel vitae ut. Ut sodales fusce purus risus, turpis
                  faucibus. Ipsum adipiscing nunc.
                </Text>
              </div>
              <Button className="bg-yellow_A701 cursor-pointer font-bold leading-[normal] min-w-[150px] sm:px-5 px-8 py-4 rounded-lg text-center text-gray_900 text-sm uppercase w-auto">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardssectionexampleFourPage;
