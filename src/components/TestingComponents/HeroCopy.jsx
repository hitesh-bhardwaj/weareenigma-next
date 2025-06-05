export function HeroCopy() {
    return (
        <div className="z-[5] absolute h-screen w-screen py-[10%] px-[4vw]">
            <div className="flex items-end justify-end h-full">
                <div className="w-full">
                    <h1 className="capitalize font-medium flex flex-col">
                        <span className="text-white">Digital</span>{" "}
                        <span>Experience</span>{" "}
                        <span className="white-stroke-text">Design agency</span>
                    </h1>
                </div>
            </div>
            <div className="flex items-end justify-end w-full">
                <p className="!text-white w-1/3">
                    Harnessing the power of Emotion, Design, Technology &
                    Neuromarketing, we create Digital Brand Experiences that propel your
                    success in the enigmatic realm of bits & bytes.
                </p>
            </div>
        </div>
    );
}