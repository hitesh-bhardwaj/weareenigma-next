import Image from "next/image";
import Link from "next/link";

export const LinkButton = ({ text, href, className = "", ...props }) => {
  // const { navigateTo } = useAnimatedNavigation();

  return (
    <Link
      className={`group w-fit hover:text-primary block duration-300  ${className}`}
      href={href}
      // onClick={(e) => {
      //   e.preventDefault();
      //   navigateTo(href);
      // }}
    >
      <div className="flex items-center justify-start gap-2">
        <span className="link-line">{text}</span>
        <div className="w-[1.2vw] h-[1.2vw] flex justify-center items-center">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            className=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1437 11.3079L10.7469 11.2593L10.9959 4.10001L11.0189 3.41746L1.9889 11.8405L1.03569 10.8186L10.0657 2.39556L9.38385 2.37185L2.22392 2.12216L2.27249 0.725365L12.4986 1.08099L12.1437 11.3079Z"
              fill="#0E0E0E"
              stroke="white"
              className=" group-hover:fill-primary duration-300"
              strokeWidth="0.565587"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export const PrimaryButton = ({text,href,...props}) => {
  return (
    <>
      <Link href={href} className="w-fit flex group hover:scale-[0.97] duration-500 ease-out">
        <div className="w-fit relative h-full px-[3.5vw] overflow-hidden py-[0.7vw] rounded-full border border-white font-medium font-display">
          <span className="z-[1] relative">{text}</span>
          <span className="w-full h-full absolute bottom-0 left-0 bg-primary origin-bottom scale-y-0 group-hover:scale-y-100 duration-300 ease-out"/>
        </div>
        <div className="w-[3.5vw] h-[3.5vw] p-[1.1vw] relative rounded-full border border-white overflow-hidden">
        <span className="w-full h-full absolute bottom-0 left-0 bg-primary origin-bottom scale-y-0 group-hover:scale-y-100 duration-300 ease-out"/>
          <Image
            src={"/assets/icons/arrow-diagonal.svg"}
            alt="arrow-diagonal"
            width={50}
            height={50}
            className="w-full h-full object-contain group-hover:rotate-45 duration-300"
          />
        </div>
      </Link>
    </>
  );
};
