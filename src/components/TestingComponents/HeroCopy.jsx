import Copy from "../Copy";

export function HeroCopy() {
    return (
        <div className="z-[5] absolute h-screen w-screen py-[10%] px-[4vw]">
            <div className="flex items-end justify-end h-full">
                <div className="w-full">
                    <Copy delay={1}>
                    <h1 className="capitalize font-medium flex flex-col !leading-[1.15]">
                        <span className="text-white">Digital</span>{" "}
                        <span>Experience</span>{" "}
                        <span className="white-stroke-text">Design agency</span>
                    </h1>
                    </Copy>
                </div>
            </div>
            <div className="flex items-end justify-end w-full">
                <Copy delay={1.5}>
                <p className="!text-white w-1/3">
                    Harnessing the power of Emotion, Design, Technology &
                    Neuromarketing, we create Digital Brand Experiences that propel your
                    success in the enigmatic realm of bits & bytes.
                </p>
                </Copy>
            </div>
        </div>
    );
}