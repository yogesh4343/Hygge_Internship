import React from 'react'
import Heading from '../Assests/Heading'
import Quiz from '../Assests/Quiz'
import CreateFlashCard from './CreateFlashCard'
import FAQ from './FAQ'
import QuestionBox from './QuestionBox'

const HomeContainer = ({heading}) => {
  return (
    <div className="max-w-[98%] lg:max-w-[80%]  w-full m-auto">
        <Heading heading={heading}  weight="bold" text="32px" topMargin="7" />
        <Quiz />
        <QuestionBox />
        <CreateFlashCard />
        <FAQ />
    </div>
  )
}

export default HomeContainer
