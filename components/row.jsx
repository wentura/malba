import React from "react";

export default function Row({
  bgImgClass = "bg-mabla-50",
  title = "title neco",
  text = "neco",
  darkRow = "darkRow",
}) {
  return (
    <div
      // className={`${bgImgClass}  py-12 sm:py-20 lg:py-32 my-4 md:my-8 lg:my-0`}
      // className={`${bgImgClass}  py-12 sm:py-20 lg:py-32 mb-0 mt-4 md:mt-8 lg:mt-24 drop-shadow-lg`}
      className={`${bgImgClass}  py-8 mb-10 md:py-24 md:mb-16 ubrus drop-shadow-lg`}
    >
      {/* <div className={`${darkRow} mx-auto px-4 md:px-8`}> */}
      <h2 className="hadvojka">{title}</h2>
      {/* <p className="max-w-screen-md mx-auto text-xl text-center md:text-3xl">
          {text}
        </p> */}
      {/* </div> */}
    </div>
  );
}
