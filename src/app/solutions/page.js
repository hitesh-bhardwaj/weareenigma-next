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
import { Footer } from '@/components/Common/Footer'
import Image from 'next/image'

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
   <div className="relative">
             <FAQs content={faqContent} />
             <div className="w-screen h-auto">
               <Image
                 src={"/assets/images/gradient.png"}
                 alt="gradient"
                 width={1920}
                 height={1080}
                 className="w-screen h-[50vw] absolute top-[73%] z-[2]"
               />
             </div>
             </div>
   <Footer/>
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