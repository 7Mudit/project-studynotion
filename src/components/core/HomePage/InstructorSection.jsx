import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightedText from "../HomePage/HighlightText";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-row gap-20 items-center">
        <div className="w-[50%] ">
          <img
            src={Instructor}
            style={{ filter: "drop-shadow(-20px -20px 0px #FFFFFF)" }}
            alt=""
            className="shadow-white"
          />
        </div>
        <div className="w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semibold w-[50%]">
            Become an{" "}
            <HighlightedText
              text={"Instructor"}
              gradient={
                "linear-gradient(118.19deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%),linear-gradient(0deg, #F1F2FF, #F1F2FF)"
              }
            />
          </div>
          <p className="font-medium text-[16px] w-[80%] text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className="w-fit">
            <CTAButton active={true} linkto={"signup"}>
              <div className="flex flex-row gap-2 items-center">
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
