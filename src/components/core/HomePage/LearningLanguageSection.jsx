import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.png'
import Compare_with_others from '../../../assets/Images/Compare_with_others.png'
import Plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from './CTAButton'
const LearningLanguageSection = () => {
  return (
    <div className='mt-[150px] mb-[150px]'>
        <div className='flex flex-col gap-5 items-center'>
            <div className='text-4xl font-semibold text-center '>
                Your swiss knife for <HighlightText text={'Learning any language'} gradient={'linear-gradient(117.52deg, #5433FF -4%, #20BDFF 51.26%, #A5FECB 106.52%)'}/>
            </div>
            <div className='text-center text-richblack-600 mx-auto text-base mt-3 font-medium 
            w-[70%]'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>
            <div className='flex flex-row items-center justify-center mt-5 ml-20'>
                <img src={know_your_progress} alt="" className='object-contain -mr-32' />
                <img src={Compare_with_others} alt="" className='object-contain' />
                <img src={Plan_your_lessons} alt="" className='object-contain -ml-36' />
            </div>
            <div className='w-fit'>
                <CTAButton active={true} linkto={'/signup'}>Learn more</CTAButton>
            </div>
        </div>
    </div>
  )
}

export default LearningLanguageSection