import React from "react";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  codeColor,
  gradient
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10 relative`}>
      <div className="w-[50%] flex flex-col gap-8">
        {heading}
        <div className="text-richblack-300 font-bold">{subheading}</div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center">
              {" "}
              {ctabtn1.btnText} <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>
      <div className="h-fit relative flex flex-row text-[15px] w-[100%] py-4 lg:w-[500px]">
        <div
          style={{

            position: "absolute",
            width: "372.95px",
            height: "257.05px",
            left: "calc(50% - 372.95px/2 - 76.53px)",
            top: "calc(50% - 257.05px/2 - 47.47px)",

            /* Gradient/02 */

            // background:
            //   " linear-gradient(123.77deg, #8A2BE2 -6.46%, #FFA500 59.04%, #F8F8FF 124.53%)",
            // background: "linear-gradient(118.19deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%)",
            background : gradient,
            opacity: 0.2,
            filter: "blur(34px)",
            transform: "matrix(1, 0, -0.03, 1, 0, 0)",

            /* Inside auto layout */

            flex: "none",
            order: "0",
            flexGrow: "0",
            zIndex: "0",
            borderRadius:"50%"
          }}
        ></div>
        <div className="text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div
          className={`flex w-[90%] flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
