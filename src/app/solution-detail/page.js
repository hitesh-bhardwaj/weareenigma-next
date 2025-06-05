import FAQs from '@/components/Common/FAQ'
import FooterCTA from '@/components/Common/FooterCTA'
import Approach from '@/components/SolutionDetail/Approach'
import Brands from '@/components/SolutionDetail/Brands'
import Hero from '@/components/SolutionDetail/Hero'
import Industries from '@/components/SolutionDetail/Industries'
import Intro from '@/components/SolutionDetail/Intro'
import Process from '@/components/SolutionDetail/Process'
import Services from '@/components/SolutionDetail/Services'
import Testimonials from '@/components/SolutionDetail/Testimonials'
import Toolstack from '@/components/SolutionDetail/Toolstack'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero/>
    <Intro/>
    <Process/>
    {/* <Toolstack/> */}
    <Approach/>
    <Services/>
    <Brands/>
    <Industries/>
    <Testimonials/>
    <FAQs content={faqContent}/>
    <FooterCTA/>
    </>
  )
}

export default page
const faqContent = [
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
];