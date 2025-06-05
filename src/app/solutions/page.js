"use client"
import FooterCTA from '@/components/Common/FooterCTA'
import SectionBreak from '@/components/Common/SectionBreak'
import FAQs from '@/components/Common/FAQ'
import About from '@/components/Solutions/About'
import AboutVideo from '@/components/Solutions/AboutVideo'
// import AboutVideo from '@/components/Solutions/CardModel'
import Approach from '@/components/Solutions/Approach'
import Cards from '@/components/Solutions/Cards'
import Lanyard from '@/components/Solutions/CardsCopy'
import Solutions from '@/components/Solutions/Solutions'
import React from 'react'
import Layout from '@/components/Layout'
import { Hero } from '@/components/Solutions/Hero'
import Header from '@/components/Header'

const page = () => {
  return (
   <>
   <Layout>
   <Header/>
    <Hero/>
   <About/>
   <SectionBreak text={"We craft emotionally intelligent user experiences that are adored globally!"}/>
   <Solutions/>
   <Approach/>
   <FAQs content={faqContent}/>
   <FooterCTA/>
   </Layout>
  
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