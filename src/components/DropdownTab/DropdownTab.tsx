import React, { ReactNode, useEffect, useState } from "react";

import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PayableIcon from "@/assets/PayableIcon";
import RecivableIcon from "@/assets/RecivableIcon";
import FinancialAccountIcon from "@/assets/FinancialAccountIcon";
import AboutIcon from "@/assets/AboutIcon";
import PrivacyPolicyIcon from "@/assets/PrivacyPolicyIcon";
import BlogIcon from "@/assets/BlogIcon";
import CustomerStories from "@/assets/CustomerStories";
import HelpCenterIcon from "@/assets/HelpCenterIcon";

export const ShiftingDropDown = () => {
  return (
    <div className="flex w-full justify-start text-[#55555C] md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: ReactNode;
  tab: number; handleSetSelected: (val: number | null) => void, selected: number | null}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm transition-colors leading-[17.64px] tracking-[-2%] ${
        selected === tab
          ? " bg-transparent text-[#55555C]"
          : "text-[#55555C]"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown  color="#2BEE91"
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }: { selected: number | null, dir: null | "l" | "r" }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
    //   className="absolute left-0 top-[calc(100%_+_24px)] w-[450px] rounded-lg border border-neutral- bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
      className="absolute left-0 top-[calc(100%_+_24px)] w-max rounded-lg border border-neutral- bg-gradient-to-b from-white via-white to-neutral-50 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    //   className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-200 bg-white"
    />
  );
};

const Products = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className="flex items-start">
      <div className="flex flex-col flex-1 gap-2">
        {tiles.slice(0,3).map((tile, index) => <Link href={tile.link} key={tile.title} onMouseEnter={()=> setSelectedOption(index)} onMouseLeave={() => setSelectedOption(-index)} className="flex gap-2 border border-[#F2F2F3] rounded-xl p-2 hover:border-[#2BEE91] hover:bg-[#E7FDF3]">
          <div className={`p-3 rounded-[10px] bg-[#FAFAFA] hover:bg-[#CCFBE5] flex items-center justify-center ${selectedOption == index && '!bg-[#CCFBE5]'}`}>
            {tile.icon(selectedOption == index ? false : true)}
          </div>
          <div className="flex flex-col flex-1 justify-center whitespace-nowrap">
            <span className="text-[#022623] font-bold text-sm">{tile.title}</span>
            <span className="text-[#808084] font-bold text-xs">{tile.subtitle}</span>
          </div>
        </Link>)}
      </div>

      <div className="flex flex-col flex-1 h-{300px]">
         <Image src='payable-dropdown-img.svg' width={250} height={200} alt='payable-dropdown-img' />
      </div>
    </div>
  );
};

const Category = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className="flex items-start">
      <div className="flex flex-col flex-1 gap-2">
        {tiles.slice(3,6).map((tile, index) => <Link href={tile.link} key={tile.link} onMouseEnter={()=> setSelectedOption(index)} onMouseLeave={() => setSelectedOption(-index)}  className="flex gap-2 border border-[#F2F2F3] rounded-xl p-2 hover:border-[#2BEE91] hover:bg-[#E7FDF3]">
          <div className={`p-3 rounded-[10px] bg-[#FAFAFA] hover:bg-[#CCFBE5] flex items-center justify-center ${selectedOption == index && '!bg-[#CCFBE5]'}`}>
            {tile.icon(selectedOption == index ? false : true)}
          </div>
          <div className="flex flex-col flex-1 justify-center whitespace-nowrap">
            <span className="text-[#022623] font-bold text-sm">{tile.title}</span>
            <span className="text-[#808084] font-bold text-xs">{tile.subtitle}</span>
          </div>
        </Link>)}
      </div>
    </div>
  );
};

const Resources = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className="flex items-start">
      <div className="flex flex-col flex-1 gap-2">
        {tiles.slice(6,9).map((tile, index) => <Link href={tile.link} key={tile.link} onMouseEnter={()=> setSelectedOption(index)} onMouseLeave={() => setSelectedOption(-index)}  className="flex gap-2 border border-[#F2F2F3] rounded-xl p-2 hover:border-[#2BEE91] hover:bg-[#E7FDF3]">
          <div className={`p-3 rounded-[10px] bg-[#FAFAFA] hover:bg-[#CCFBE5] flex items-center justify-center ${selectedOption == index && '!bg-[#CCFBE5]'}`}>
            {tile.icon(selectedOption == index ? false : true)}
          </div>
          <div className="flex flex-col flex-1 whitespace-nowrap">
            <span className="text-[#022623] font-bold text-sm">{tile.title}</span>
            <span className="text-[#808084] font-bold text-sm">{tile.subtitle}</span>
          </div>
        </Link>)}
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Blog</h4>
          <p className="text-xs text-neutral-400">
            Blog Content
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const TABS = [
  {
    title: "Products",
    Component: Products,
  },
  {
    title: "Company",
    Component: Category,
  },
  {
    title: "Resources",
    Component: Resources,
  },

].map((n, idx) => ({ ...n, id: idx + 1 }));

const tiles = [
  {
    icon: (index: boolean) => <PayableIcon index={index} />,
    link: '/account-payable',
    title: 'Account Payable',
    subtitle: 'Setup Approvals on different levels.',
  },
  {
    icon: (index: boolean) => <RecivableIcon index={index} />,
    link: '/account-receivable',
    title: 'Account Recievable',
    subtitle: 'Sync Bank Accounts seamlessy.',
  },
  {
    icon: (index: boolean) => <FinancialAccountIcon index={index} />,
    link: '/financial-accounting',
    title: 'Financial Accounting',
    subtitle: 'Manage your expenses in a smart way',
  },
  {
    icon: (index: boolean) => <AboutIcon index={index} />,
    link: '/about',
    title: 'About Us',
    subtitle: 'The team, Core values, Our Vision.',
  },
  {
    icon: (index: boolean) => <PrivacyPolicyIcon index={index} />,
    link: '/privacy-policy',
    title: 'Privacy Policy',
    subtitle: 'Come Join us and make Magic!',
  },
  {
    icon: (index: boolean) => <FinancialAccountIcon index={index} />,
    link: '/terms-of-use',
    title: 'Terms of Use',
    subtitle: 'Come Join us and make Magic!',
  },
  {
    icon: (index?: boolean) => <BlogIcon index={index} />,
    link: '/blog',
    title: 'Blog',
    subtitle: 'The team, Core values, Our Vision.',
  },
  {
    icon: (index: boolean) => <CustomerStories index={index} />,
    link: '/customer-stories',
    title: 'Customer Stories',
    subtitle: 'Come Join us and make Magic!',
  },
  {
    icon: (index: boolean) => <HelpCenterIcon index={index} />,
    link: '/help-center',
    title: 'Help Center',
    subtitle: 'The team, Core values, Our Vision..',
  },
]

