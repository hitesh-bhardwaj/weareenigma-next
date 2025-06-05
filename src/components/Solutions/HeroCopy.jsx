import Copy from "../Copy";

export function HeroCopy() {
    return (
        <div className="z-[5] absolute h-screen w-screen py-[10%] px-[4vw] space-y-[2vw]">
            <div className="flex items-end justify-end h-full">
                <div className="w-full">
                    <Copy delay={1}>
                    <h1 className="capitalize font-medium flex flex-col !leading-[1.15]">
                        <span className="text-white">Creating</span>{" "}
                       
                        <span className="white-stroke-text">Ambitious Brands</span>
                    </h1>
                    </Copy>
                </div>
            </div>
            <div className="flex items-start justify-start w-full">
                <Copy delay={1.5}>
                <p className="!text-white w-1/2">
                We are a globally recognised, award-winning UI UX design studio. Our comprehensive range of services leverages our full expertise to boost your digital presence to celestial heights.
                </p>
                </Copy>
            </div>
        </div>
    );
}