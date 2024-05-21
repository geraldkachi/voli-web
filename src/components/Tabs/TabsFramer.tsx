import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const tabs = [{title:"Home", content: <></>},{title: "Search"}, {title:"About"}, {title:"FAQ"}];
interface ChipProps {
    text?: string 
    selected?: boolean
    setSelected?:  Dispatch<SetStateAction<string>>
    tabs?: {
      title: string,
      content: JSX.Element
    }[]
}
const ChipTabs = ({tabs}: ChipProps) => {
  const [selected, setSelected] = useState(tabs && tabs[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const Render = () => tabs && tabs[activeTabIndex].content;

  return (
    <div  className="flex flex-col items-center">

    <div className="px-0 py-5  flex items-center gap-2 !overflow-x-hidden">
      {tabs?.map((tab: {title: string}, idx: number) => (
        <Chip
        text={tab.title}
        selected={activeTabIndex === idx}
        setSelected={() => {setSelected(selected); setActiveTabIndex(idx)}}
        key={idx}
        />
      ))}
    </div>
    <div className="overflow-x-scroll">
      <Render />
    </div>
      </div>
  );
};

const Chip = ({ text, selected, setSelected}: ChipProps) => {
  return (
    <button
      onClick={() => setSelected && setSelected(text || '')} 
      className={`${
        selected
          ? "text-[#01C467] bg-[#E7FDF3] rounded-t-lg"
          : "text-[#808084] hover: hover:"
      } text-sm transition-colors px-2. py-2 relative px-4 md:px-5 !overflow-x-scroll whitespace-nowrap`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          // className="absolute inset-0 z-0 bg-gradient-to- border-b border-[]  from-[#01C467] to-[#01C467] rounded-md"
          className="absolute inset-0 z-0 bg-gradient-to- border-b-2 border-[#01C467]"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;