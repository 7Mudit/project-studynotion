import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ReviewSlider from "../components/core/HomePage/ReviewSlider";
import Footer from '../components/common/Footer'
import ExploreMore from "../components/core/HomePage/ExploreMore";


const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div className=" relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center  text-white justify-between ">
        <Link to="/signup">
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95">
            <div className="flex flex-row items-center gap-2 group-hover:bg-richblack-900 rounded-full px-10 py-[5px] ">
              <p>Become an Instructor</p> <FaArrowRight />
            </div>
          </div>
        </Link>
        <div className="text-center text-4xl font-semibold mt-4">
          Empower your Future with{" "}
          <HighlightText
            gradient={
              "linear-gradient(118.19deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%)"
            }
            text={"Coding Skills"}
          />
        </div>
        <div className="w-[90%] text-center text-lg font-bold text-richblack-300 mt-4">
          With our online coding courses , you can learn at your own pace, from
          anywhere in the world , and get access to a wealth of resources ,
          including hands-on projects, quizzes and personalised feedback from
          instructors.
        </div>
        <div className="flex flex-row gap-7 mt-8 ">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div
          className="mx- 3 my-7 shadow-blue-200 w-[1035px] h-[515px] "
          style={{ filter: "drop-shadow(20px 20px 0px #F5F5F5)" }}
        >
          <video autoPlay muted loop src={Banner}></video>
        </div>

        <div className="mt-32">
          <CodeBlocks
            gradient={
              "linear-gradient(123.77deg, #8A2BE2 -6.46%, #FFA500 59.04%, #F8F8FF 124.53%)"
            }
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your{" "}
                <HighlightText
                  gradient={
                    "linear-gradient(123.77deg, #8A2BE2 -6.46%, #FFA500 59.04%, #F8F8FF 124.53%)"
                  }
                  text={"Coding potential"}
                />{" "}
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
            <html>
            <head><title>Example</title>
            <link rel="stylesheet"href="styles.css">
            </head>
            <body>
            <h1><ahref="/">Header</a>
            </h1>
            <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
            </nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>
        <div>
          <CodeBlocks
            gradient={
              "linear-gradient(118.19deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%)"
            }
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start{" "}
                <HighlightText
                  text={"Coding in seconds"}
                  gradient={
                    "linear-gradient(118.19deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%)"
                  }
                />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
            <html>
            <head><title>Example</title>
            <link rel="stylesheet"href="styles.css">
            </head>
            <body>
            <h1><ahref="/">Header</a>
            </h1>
            <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
            </nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>
        <ExploreMore/>
      </div>

      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700 ">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent justify-between flex flex-col items-center gap-5 mx-auto">
            <div className="h-[110px]"></div>
            <div className="flex flex-row gap-7 mt-[50px] text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between">
          <div className="flex flex-row gap-5 mb-10 mt-[95px] ">
            <div className="text-4xl font-semibold w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText
                text="job that is in demand"
                gradient={
                  "linear-gradient(117.52deg, #5433FF -4%, #20BDFF 51.26%, #A5FECB 106.52%)"
                }
              />
            </div>
            <div className="flex flex-col gap-10 w-[40%] items-start text-richblack-700 ">
              <div className="text-[16px] font-inter font-normal leading-[24px] self-stretch">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>

              <CTAButton active={true} linkto={"/signup"}>
                Learn more
              </CTAButton>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>
      {/* section 3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between bg-richblack-900 text-white ">
            <InstructorSection/>
            <h2 className="text-center text-4xl font-semibold mt-10">Review from other learners</h2>
            <ReviewSlider/>

      </div>          

      {/* footer*/}
      <Footer/>
    </div>
  );
};

export default Home;
