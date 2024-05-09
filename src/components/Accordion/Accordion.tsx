import {MutableRefObject, ReactNode, useRef, useState} from "react";
import CollapseIcon from "/public/acc-minus.svg";
import PlusIcon from "/public/acc-plus.svg";
import Image from "next/image";

type AccordionProps = {
  heading: string | ReactNode;
  children: ReactNode;
  showHeader?: boolean;
  open?: boolean;
  activeClass?: string;
  otherClasses?: string;
};

function Accordion({
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
      className={`relative bg-transparent rounded-lg max-w-4xl mx-auto mb-4  ${
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
            className={`flex cursor-pointer items-center justify-between py-2 space-x-3 bg-transparent`}
          >
            <span style={{flexGrow: 2}} className={`font-semibold my-4 text-base text-[#808084] ${open || openAccordion && '!text-[#01C467]'}`}>
              {heading}{" "}
            </span>
            <button type="button" className="hidden sm:block">
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
        className={`relative transition-all border
        } overflow-hidden transition-all duration-[0.7rem] bg-[#FAFAFA]`}
      >
        <div className="px-5 bg-[#FAFAFA] hover:bg-[#E7FDF3] p-4">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;