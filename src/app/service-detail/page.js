import FAQs from '@/components/Common/FAQ'
import FooterCTA from '@/components/Common/FooterCTA'
import SectionBreak from '@/components/Common/SectionBreak'
import Blogs from '@/components/homepage/Blogs'
import Clients from '@/components/ServiceDetail/Clients'
import DesignProcess from '@/components/ServiceDetail/DesignProcess'
import Details from '@/components/ServiceDetail/Details'
import Intro from '@/components/ServiceDetail/Intro'
import Services from '@/components/ServiceDetail/Services'
import Industries from '@/components/SolutionDetail/Industries'
import React from 'react'

const page = () => {
  return (
    <>
   <Intro/>
   {/* <SectionBreak text={"We craft emotionally intelligent user experiences that are adored globally!"}/> */}
   <Details/>
   <Services/>
   <DesignProcess/>
   <Clients/>
   <Industries/>
   <Blogs/>
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