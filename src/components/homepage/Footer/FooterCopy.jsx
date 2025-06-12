"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";;
import Link from 'next/link';
import Image from 'next/image';
import { initSplit } from "@/components/splitTextUtils";
gsap.registerPlugin(ScrollTrigger);

const FooterCopy = () => {
    useEffect(() => {
        initSplit();
    }, []);
    return (
        <>
            <footer className='w-screen h-full relative'>
                <div className='w-full h-full'>
                    <div className='z-[10] relative h-full pb-[4%] px-[4vw]'>
                        <div className='flex flex-col items-start justify-between h-screen'>
                            <div className='flex items-center justify-between w-full h-fit text-white font-semibold pt-[10%]'>
                                <Link href={"/"} data-split="letters" data-letters-delay className="buttonSplit">
                                    <div className="overflow-clip">
                                        <p className="buttonTextShadow ">
                                            ABOUT
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"/"} data-split="letters" data-letters-delay className="buttonSplit">
                                    <div className="overflow-clip">
                                        <p className="buttonTextShadow ">
                                           WORK
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"/"} data-split="letters" data-letters-delay className="buttonSplit">
                                    <div className="overflow-clip">
                                        <p className="buttonTextShadow ">
                                           EXPERTISE
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"/"} data-split="letters" data-letters-delay className="buttonSplit">
                                    <div className="overflow-clip">
                                        <p className="buttonTextShadow ">
                                            CAREER
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"/"} data-split="letters" data-letters-delay className="buttonSplit">
                                    <div className="overflow-clip">
                                        <p className="buttonTextShadow ">
                                           CONTACT
                                        </p>
                                    </div>
                                </Link>
                                <Link href={"/"} data-split="letters" data-letters-delay className="buttonSplit">
                                    <div className="overflow-clip">
                                        <p className="buttonTextShadow ">
                                           RESOURCES
                                        </p>
                                    </div>
                                </Link>

                            </div>
                            <div className='flex items-center justify-between w-full '>
                                <div className='flex flex-col items-w '>
                                    <p className='text-white text-[12vw] font-display font-medium leading-[1.05]'>ENIGMA</p>
                                    <p className='text-[#AEAEAE]'>© 2025 Enigma Digital Consulting LLP. All rights reserved all wrongs reversed.</p>
                                </div>
                                <div className='flex flex-col items-start justify-start h-full gap-[1vw] w-[20%] text-white'>
                                    <p className="link-line">hi@weareenigma.com</p>
                                    <p className="link-line">+91 8745044555</p>
                                    <p className="under-multi-parent">
                                        <span className="under-multi">Grandslam I-Thum, A-40, Sector- 62, Noida, Uttar Pradesh (201309) </span></p>
                                    <div className='flex items-center gap-[2vw] pt-[1.5vw]'>
                                        <div className="cursor-pointer hover:scale-[1.2] transition-all duration-500 ease">
                                            <Image src={"/assets/icons/twitter.svg"} height={20} width={20} alt='twitter' />
                                        </div>
                                        <div className="cursor-pointer hover:scale-[1.2] transition-all duration-500 ease">
                                            <Image src={"/assets/icons/instagram.svg"} height={20} width={20} alt='instagram' />
                                        </div>
                                        <div className="cursor-pointer hover:scale-[1.2] transition-all duration-500 ease">
                                            <Image src={"/assets/icons/linkedin-icon.svg"} height={20} width={20} alt='linkedin' />
                                        </div>
                                        <div className="cursor-pointer hover:scale-[1.2] transition-all duration-500 ease">
                                            <Image src={"/assets/icons/facebook.svg"} height={20} width={20} alt='facebook' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='flex items-center justify-between w-full absolute bottom-0 left-0 px-[4vw]'>
                                <div>
                                    <Image src={"/assets/icons/d.svg"} height={25} width={25} alt='d' />
                                </div>
                                <div>
                                    <Image src={"/assets/icons/s.svg"} height={25} width={25} alt='s' />
                                </div>
                                <div>
                                    <Image src={"/assets/icons/m.svg"} height={25} width={25} alt='m' />
                                </div>
                                <div>
                                    <Image src={"/assets/icons/d.svg"} height={25} width={25} alt='d' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </footer>
        </>
    )
}

export default FooterCopy