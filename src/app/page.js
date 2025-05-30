import About from "@/components/homepage/About";
import Achievements from "@/components/homepage/Achievements";
import Clients from "@/components/homepage/Clients";
import FAQs from "@/components/homepage/FAQ";
import Footer from "@/components/homepage/Footer";
import Hero2 from "@/components/homepage/Hero/Hero2";
import HeroComp from "@/components/homepage/Hero/HeroComp";
import Industries from "@/components/homepage/Industries";
import SectionBreak from "@/components/homepage/SectionBreak";
import Solutions from "@/components/homepage/Solutions";
import Testimonials from "@/components/homepage/Testimonials";
import Work from "@/components/homepage/Work";
import React from "react";
import Header from "@/components/Header"
import Blogs from "@/components/homepage/Blogs";


const page = () => {
  return (
    <>
      <Header/>
      <HeroComp/>
      {/* <Hero2/> */}
      <About/>
      <Work/>
      <SectionBreak/>
      <Testimonials/>
      <Solutions/>
      <Industries/>
      <Achievements/>
      <Clients/>
      <Blogs/>
      <FAQs content={faqContent} />
      <Footer/>
      {/* <Hero2/> */}
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
