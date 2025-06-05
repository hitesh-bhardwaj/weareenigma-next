import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Copy from '../Copy';

const Achievements = () => {
    const awardsRef = useRef(null);
    const awardsContainerRef = useRef(null);
    const projectsRef = useRef(null);
    const projectsContainerRef = useRef(null);
    const clientsRef = useRef(null);
    const clientsContainerRef = useRef(null);
    const yearsRef = useRef(null);
    const yearsContainerRef = useRef(null);
    const createMouseTracker = (containerRef, imageRef, lerpFactor = 0.05) => {
        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;
        let animationId = null;

        const lerp = (start, end, factor) => start + (end - start) * factor;

        const animate = () => {
            currentX = lerp(currentX, targetX, lerpFactor);
            currentY = lerp(currentY, targetY, lerpFactor);
            
            gsap.set(imageRef.current, {
                x: currentX,
                y: currentY
            });
            
            if (Math.abs(currentX - targetX) > 0.1 || Math.abs(currentY - targetY) > 0.1) {
                animationId = requestAnimationFrame(animate);
            }
        };

        const mouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const imageWidth = 199;
            const imageHeight = 297;
            
            const calculatedTargetX = x - imageWidth/2;
            const calculatedTargetY = y - imageHeight/2;
            
            targetX = Math.max(-imageWidth/4, Math.min(calculatedTargetX, rect.width - imageWidth + imageWidth/4));
            targetY = Math.max(-imageHeight/4, Math.min(calculatedTargetY, rect.height - imageHeight + imageHeight/4));
            
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            animationId = requestAnimationFrame(animate);
        };

        const mouseEnter = () => {
            gsap.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const mouseLeave = () => {
            gsap.to(imageRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                ease: "power2.out"
            });
            
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        }
        return {
            mouseMove,
            mouseEnter,
            mouseLeave,
            cleanup: () => {
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            }
        };
    };

    useEffect(() => {
       
        const awardsTracker = createMouseTracker(awardsContainerRef, awardsRef);
        const projectsTracker = createMouseTracker(projectsContainerRef, projectsRef);
        const clientsTracker = createMouseTracker(clientsContainerRef, clientsRef);
        const yearsTracker = createMouseTracker(yearsContainerRef, yearsRef, 0.05); 

       
        const addEventListeners = (containerRef, tracker) => {
            if (containerRef.current) {
                containerRef.current.addEventListener('mousemove', tracker.mouseMove);
                containerRef.current.addEventListener('mouseenter', tracker.mouseEnter);
                containerRef.current.addEventListener('mouseleave', tracker.mouseLeave);
            }
        };

      
        const removeEventListeners = (containerRef, tracker) => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('mousemove', tracker.mouseMove);
                containerRef.current.removeEventListener('mouseenter', tracker.mouseEnter);
                containerRef.current.removeEventListener('mouseleave', tracker.mouseLeave);
            }
        };

        addEventListeners(awardsContainerRef, awardsTracker);
        addEventListeners(projectsContainerRef, projectsTracker);
        addEventListeners(clientsContainerRef, clientsTracker);
        addEventListeners(yearsContainerRef, yearsTracker);

      
        return () => {
            
            awardsTracker.cleanup();
            projectsTracker.cleanup();
            clientsTracker.cleanup();
            yearsTracker.cleanup();

            removeEventListeners(awardsContainerRef, awardsTracker);
            removeEventListeners(projectsContainerRef, projectsTracker);
            removeEventListeners(clientsContainerRef, clientsTracker);
            removeEventListeners(yearsContainerRef, yearsTracker);
        };
    }, []);

    return (
        <section className='h-full w-screen bg-gradient-to-r from-[#FF5600] to-[#FF8800]'>
            <div className='w-full h-full pl-[4vw] py-[5vw] grid grid-cols-6 gap-y-[2vw]'>
                <div ref={awardsContainerRef} className='col-start-1 col-span-4 transition-all duration-500 ease relative cursor-none min-h-[12vw]'>
                    <Copy>
                    <p className='text-white text-[10vw] font-display leading-[1.05] font-medium pointer-events-none'>10+ Awards</p>
                    </Copy>
                    <div ref={awardsRef} className='opacity-0 scale-80 absolute top-0 left-0 pointer-events-none z-10'>
                        <Image src="/assets/images/homepage/award.png" height={297} width={199} alt='award'/>
                    </div>
                </div>
                
                <div ref={projectsContainerRef} className='col-start-3 row-start-2 col-span-4 transition-all duration-500 ease relative cursor-none min-h-[12vw]'>
                    <Copy>
                    <p className='text-[#0E0E0E] text-[10vw] font-display leading-[1.05] font-medium pointer-events-none'>25+ Projects</p>
                    </Copy>
                    <div ref={projectsRef} className='opacity-0 scale-80 absolute top-0 left-0 pointer-events-none z-10'>
                        <Image src="/assets/images/homepage/project.png" height={297} width={199} alt='project'/>
                    </div>
                </div>
                
                <div ref={clientsContainerRef} className='col-start-1 row-start-3 col-span-4 transition-all duration-500 ease relative cursor-none min-h-[12vw]'>
                    <Copy>
                    <p className='text-white text-[10vw] font-display leading-[1.05] font-medium pointer-events-none'>45+ Clients</p>
                    </Copy>
                    <div ref={clientsRef} className='opacity-0 scale-80 absolute top-0 left-0 pointer-events-none z-10'>
                        <Image src="/assets/images/homepage/project.png" height={297} width={199} alt='clients'/>
                    </div>
                </div>
                
                <div ref={yearsContainerRef} className='col-start-3 row-start-4 col-span-4 transition-all duration-500 ease relative cursor-none min-h-[12vw] w-fit'>
                    <Copy>
                    <p className='text-[#0E0E0E] text-[10vw] font-display leading-[1.05] font-medium pointer-events-none'>2+ Years</p>
                    </Copy>
                    <div ref={yearsRef} className='opacity-0 scale-80 absolute top-0 left-0 pointer-events-none z-10'>
                        <Image src="/assets/images/homepage/project.png" height={297} width={199} alt='years'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements