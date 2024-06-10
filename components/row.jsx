import React from "react";

export default function Row({
  bgImgClass = "bg-mabla-50",
  title = "title neco",
  text = "neco",
  darkRow = "darkRow",
}) {
  return (
    <div
      className={`${bgImgClass}  py-12 sm:py-20 lg:py-32 bg-opacity-20 my-4 md:my-8 lg:my-12`}
    >
      <div className={`${darkRow} mx-auto px-4 md:px-8`}>
        <h2 className="mb-4 text-center text-4xl font-bold  md:mb-6 lg:text-5xl drop-shadow-md drop-shadow-stone-100">
          {title}
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-xl md:text-3xl">
          {text}
        </p>
      </div>
    </div>
  );
}
