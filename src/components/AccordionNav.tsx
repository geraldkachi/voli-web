import {MutableRefObject, ReactNode, useRef, useState} from "react";
import CollapseIcon from "/public/up-chev.svg";
import PlusIcon from "/public/down-chev.svg";
import Image from "next/image";

type AccordionProps = {
  heading: string | ReactNode;
  children: ReactNode;
  showHeader?: boolean;
  open?: boolean;
  activeClass?: string;
  otherClasses?: string;
};

function AccordionNav({
  heading,
  showHeader = true,
  open = false,
  children,
  activeClass = "",
  otherClasses,
}: AccordionProps) {
  const [openAccordion, setopenAccordion] = useState(false);

  const toggleAccordion = () => {
    setopenAccordion(prev => !prev);
  };
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <div
      className={`relative bg-transparent rounded-lg max-w-full mx-auto  ${
        openAccordion ? activeClass : ""
      } ${otherClasses || ""}`}
    >
      {showHeader && (
        <div
          className={`w-full rounded-lg px-5 ${
            open || openAccordion
              ? ""
              : ""
          }`}
        >
          <div
            onClick={toggleAccordion}
            className={`flex cursor-pointer items-center justify-between py-0 space-x-1 bg-transparent`}
          >
            <span style={{flexGrow: 2}} className={`font-semibold my-4 text-base text-[#ffffff] ${open || openAccordion && '!text-[#01C467]'}`}>
              {heading}{" "}
            </span>
            <button type="button">
              {open || openAccordion ? (
                <Image src={CollapseIcon} color="#FFEEC8" width={18.67} height={16.67} alt="minus" />
              ) : (
                <Image src={PlusIcon} color="#FFEEC8" width={18.67} height={16.67} alt="plus" />
              )}
            </button>
          </div>
        </div>
      )}
      <div
        ref={ref}
        style={{
          maxHeight: open || openAccordion ? ref.current.scrollHeight : 0,
        }}
        className={`relative transition-all
        } overflow-hidden transition-all duration-[0.7rem] bg-[#FAFAFA]`}
      >
        <div className="px-3 bg-[#2A2A33] p-4">{children}</div>
      </div>
    </div>
  );
}

export default AccordionNav;