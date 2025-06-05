"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";;
import Link from 'next/link';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const FooterCopy = () => {
    return (
        <>
            <footer className='w-screen h-full relative'>
                <div className='w-full h-full'>
                    <div className='z-[10] relative h-full py-[4vw] px-[4vw]'>
                        <div className='flex flex-col items-start justify-bewteen gap-[28vw]'>
                            <div className='flex items-center justify-between w-full h-full text-white'>
                                <Link href={"/"}>
                                    <div>ABOUT</div>
                                </Link>
                                <Link href={"/"}>
                                    <div>WORK</div>
                                </Link>
                                <Link href={"/"}>
                                    <div>EXPERTISE</div>
                                </Link>
                                <Link href={"/"}>
                                    <div>CAREER</div>
                                </Link>
                                <Link href={"/"}>
                                    <div>CONTACT US</div>
                                </Link>
                                <Link href={"/"}>
                                    <div>RESOURCES</div>
                                </Link>
                            </div>
                            <div className='flex items-center justify-between w-full '>
                                <div className='flex flex-col items-start '>
                                    <p className='text-white text-[12vw] font-display font-medium leading-[1.05]'>ENIGMA</p>
                                    <p className='text-white'>© 2025 Enigma Digital Consulting LLP. All rights reserved all wrongs reversed.</p>
                                </div>
                                <div className='flex flex-col gap-[0.5vw] w-[20%] text-white'>
                                    <p>hi@weareenigma.com</p>
                                    <p>+91 8745044555</p>
                                    <p>Grandslam I-Thum, A-40, Sector- 62, Noida, Uttar Pradesh (201309)</p>
                                    <div className='flex items-center gap-[2vw]'>
                                        <div>
                                            <Image src={"/assets/icons/twitter.svg"} height={25} width={25} alt='twitter' />
                                        </div>
                                        <div>
                                            <Image src={"/assets/icons/instagram.svg"} height={25} width={25} alt='instagram' />
                                        </div>
                                        <div>
                                            <Image src={"/assets/icons/linkedin-icon.svg"} height={25} width={25} alt='linkedin' />
                                        </div>
                                        <div>
                                            <Image src={"/assets/icons/facebook.svg"} height={25} width={25} alt='facebook' />
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