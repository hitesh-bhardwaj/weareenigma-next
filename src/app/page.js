import About from "@/components/homepage/About";
import Achievements from "@/components/homepage/Achievements";
import Clients from "@/components/homepage/Clients";
import FAQs from "@/components/homepage/FAQ";
import Footer from "@/components/homepage/Footer";
import HeroComp from "@/components/homepage/Hero/HeroComp";
import Industries from "@/components/homepage/Industries";
import SectionBreak from "@/components/homepage/SectionBreak";
import Solutions from "@/components/homepage/Solutions";
import Testimonials from "@/components/homepage/Testimonials";
import Work from "@/components/homepage/Work";
import React from "react";


const page = () => {
  return (
    <>
      <HeroComp/>
      <About/>
      <Work/>
      <SectionBreak/>
      <Testimonials/>
      <Solutions/>
      <Industries/>
      <Achievements/>
      <Clients/>
      <FAQs content={faqContent} />
      {/* <Footer/> */}
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
