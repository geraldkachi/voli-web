import React, { Dispatch, SetStateAction, useState } from 'react';
// import './index.css'; // Assuming custom CSS is in index.css
interface CardProps {
    onHover: Dispatch<SetStateAction<null | number>>,
    index: number
    isHovered: boolean; 
    item: { title: string; subtitle: string; sectitle1: string; sectitle2: string; }; 
    key: number; 
}

const cardsItems = [
    {
        title: 'Emily Roberts',
        subtitle: 'CTO | InnovateNow Corp',
        sectitle1: 'Our company&apos;s financial management transformed with Vollie Pay.',
        sectitle2: 'Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. '
    },
    {
        title: 'Emily Roberts',
        subtitle: 'CTO | InnovateNow Corp',
        sectitle1: 'Our company&apos;s financial management transformed with Vollie Pay.',
        sectitle2: 'Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. '
    },
    {
        title: 'John Brandson',
        subtitle: 'HR Manage |  GlobalTech Solutions',
        sectitle1: "Our company's financial management transformed with Vollie Pay.",
        sectitle2: 'Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. '
    },
    {
        title: 'John Brandson',
        subtitle: 'CEO | Upworks',
        sectitle1: 'Our company&apos;s financial management transformed with Vollie Pay.',
        sectitle2: 'Streamlining payroll, tracking expenses, and ensuring smooth transactions has never been easier. '
    },
]

const Card = ({ index, onHover, isHovered, item }:CardProps ) => (
<div className="hidden md:flex  flex-col justify-center relative py-20 pr-28 h-full !z-50">
  <div
    // className={`card relative p-4 m-2 bg-white border rounded-md shadow-lg transition-transform duration-500 ${isHovered ? 'hovered' : ''}`}
    className={` w-72 pb-3 bg-white shadow-md absolute md:-left-0 hover:-lef-60 rounded-lg ${index == 0 || 1 || 2 && 'drop-shadow-[0_122.96px_307.39px_rgba(233,233,233,0.1)]'} card transition-transform duration-500 ${isHovered ? 'hovered transform transition-all duration-75 hover:-right-60' : ''}`}
    onMouseEnter={() => onHover(index)}
    onMouseLeave={() => onHover(null)}
    style={{ zIndex: 10 - index }} // Ensures the hover effect does not hide cards
  >
    {/* Card {index + 1} */}
    <div className="block max-w-sm p-6 mt-40">
    <div>
        <div className='text-[#00000A] text-[20px] font-bold leading-[28px] tracking-[-1%]'>{item.title}</div>
        <div className='text-[#AAAAAD] font-medium text-sm leading-[19.6px] tracking-[-1%]'> {item.subtitle}</div>
    </div>

    <div className="mt-4 text-[#808080] font-normal text-sm leading-[25.2px] tracking-[-1%]">
        <p className="">{item.sectitle1} </p>
        <p className="mt-4">{item.sectitle2}</p>
    </div>
    </div>

    </div>
  </div>
);

const CardStack = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex relative">
      {cardsItems.map((item,index) => (
        <Card key={index} {...{item}} index={index} onHover={setHoveredIndex} isHovered={hoveredIndex !== null && index > hoveredIndex} />
      ))}
    </div>
  );
};

export default CardStack;
