"use client";
import About from "@/components/homepage/About";
import Achievements from "@/components/homepage/Achievements";
import Clients from "@/components/homepage/Clients";
import FAQs from "@/components/Common/FAQ";
import Industries from "@/components/homepage/Industries";
import Solutions from "@/components/homepage/Solutions";
import Testimonials from "@/components/homepage/Testimonials";
import Work from "@/components/homepage/Work";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Blogs from "@/components/homepage/Blogs";
import { Hero } from "@/components/TestingComponents/Hero";
import Layout from "@/components/Layout";
import { fadeUpAnim, lineAnim } from "@/components/gsapAnimations";
import IndustriesCopy from "@/components/homepage/IndustriesCopy";
import { Footer } from "@/components/homepage/Footer";
import SectionBreak from "@/components/Common/SectionBreak";
import SolutionsCopy from "@/components/homepage/SolutionsCopy";
import Image from "next/image";
import IndustryCopy from "@/components/homepage/IndustryCopy";

const page = () => {
  fadeUpAnim();
  lineAnim();

  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <About />
        <Work />
        <SectionBreak />
        <Testimonials />
        {/* <SolutionsCopy/> */}
        <div className="relative">
          <Solutions />
        
          {/* <IndustriesCopy /> */}
          <IndustryCopy/>
        </div>
        <Achievements />
        <Clients />
        <Blogs />
        <div className="relative">
          <FAQs content={faqContent} />
          <div className="w-screen h-auto">
            <Image
              src={"/assets/images/gradient.webp"}
              alt="gradient"
              width={1920}
              height={1080}
              className="w-screen h-[50vw] absolute top-[34%] z-[0]"
            />
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  );
};

export default page;
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
