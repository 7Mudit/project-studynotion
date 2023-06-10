import React, { useState } from "react";
import { HomePageExplore } from "../../..//data/homepage-explore";
import HighlightText from "../HomePage/HighlightText";
const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl font-semibold">
        Unlock the{" "}
        <HighlightText
          text={"Power of Code"}
          gradient={
            "linear-gradient(118.19deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%),linear-gradient(0deg, #F1F2FF, #F1F2FF)"
          }
        />
      </div>
      <p className="text-center text-richblack-300 text-[16px] font-semibold mt-3">
        Learn to build anything you can imagine
      </p>

      <div className="flex flex-row rounded-full bg-richblack-800 my-5 border-richblack-100 px-1 py-1">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-[16px] flex flex-row gap-2 items-center 
                        ${
                          currentTab === element
                            ? "bg-richblack-900 text-richblack-5 font-medium"
                            : "text-richblack-200"
                        } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2
                    `}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

      <div className="lg:h-[300px] "></div>

      {/* course card */}
      <div className="flex flex-row gap-5 absolute mt-[350px] ">
        {courses.map((element , index) => (
            <div key={index}
             className="flex flex-col items-start h-[300px] w-[340px]
              bg-richblack-800 self-stretch  "
            >
                <div>{element.heading}</div>
                <div>{element.description}</div>
                <div className="flex flex-row">
                    <div>{element.level}</div>
                    <div>{element.lessionNumber}</div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
