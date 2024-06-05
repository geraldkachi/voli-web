"use client";
import { navVariants } from "@/app/utils/motion";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type CardType = {
    url: string;
    title: string;
    id: number;
  };
  
  const cards: CardType[] = [
    // {
    //   url: "tailored1.svg",
    //   title: "Title 1",
    //   id: 1,
    // },
    {
      url: "tailored2.svg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "tailored3.svg",
      title: "Title 3",
      id: 3,
    },
    {
      url: "tailored4.svg",
      title: "Title 4",
      id: 4,
    },
    {
      url: "tailored2.svg",
      title: "Title 4",
      id: 5,
    },
    {
      url: "tailored3.svg",
      title: "Title 4",
      id: 6,
    },
    // {
    //   url: "tailored5.svg",
    //   title: "Title 5",
    //   id: 5,
    // },
    // {
    //   url: "tailored6.svg",
    //   title: "Title 6",
    //   id: 6,
    // },
    // {
    //   url: "tailored7.svg",
    //   title: "Title 7",
    //   id: 7,
    // },
  ];

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    // const targetScale = 1 - ( (cards.length - i) * 0.05);
    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-45%"]);
  
    return (
      <section ref={targetRef} className="relative bg-">
          {/* <motion.div className={`flex relative  overflow-x-hidden`}>
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
            {cards.map((card) => {
              return <CardOne card={card} key={card.id} />;
            })}
          </motion.div> */}
      </section>
    );
  };
  
  const Card = ({ card }: { card: CardType }) => {
    return (
      <div
        key={card.id}
        className="py-12 animate-marquee whitespace-nowrap flex items-center group group-hover:pause">
            <span className="mx-4 text-4xl h-[400px] w-[300px]">
                <Image src={card.url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
            </span>
      </div>
    );
  };
  const CardOne = ({ card }: { card: CardType }) => {
    return (
      <div
        key={card.id}
        aria-hidden
        className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center group group-hover:pause">
        <span className="mx-4 text-4xl h-[400px] w-[300px]">
            <Image src={card.url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
        </span>
        </div>
    );
  };

const Tailored = () => {
    return (
        <div className="bg-[#F8FCFA]">
            <div className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}>
                <div className="flex flex-col my-14">
                    <motion.p variants={navVariants} className={`text-center mt-2 text-[#00000A] text-[28px] md:text-[48px] font-bold leading-[37.8px] md:leading-[72px]`}>Tailored to fit <br className="sm:hidden block" /> your <br className="hidden sm:block" /> business financial Needs </motion.p>
                </div>
            </div>

            <HorizontalScrollCarousel />

            <div className="relative flex overflow-x-hidden group group-hover:pause">
                <div className="py-12 animate-marquee whitespace-nowrap flex items-center group group-hover:pause">
                    <span className="mx-4 text-4xl h-[400px] w-[300px]">
                        <Image src={cards[0].url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
                    </span>
                    <span className="mx-4 text-4xl h-[400px] w-[300px]">
                        <Image src={cards[1].url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
                    </span>
                    <span className="mx-4 text-4xl h-[400px] w-[300px]">
                        <Image src={cards[2].url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
                    </span>
                    <span className="mx-4 text-4xl h-[400px] w-[300px]">
                        <Image src={cards[3].url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
                    </span>
                    <span className="mx-4 text-4xl h-[400px] w-[300px]">
                        <Image src={cards[4].url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
                    </span>
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center group group-hover:pause">
                    <span className="mx-4 text-4xl h-[400px] w-[300px]">
                        <Image src={cards[0].url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
                    </span>
                    <span className="mx-4 text-4xl h-[400px] w-[300px]">
                        <Image src={cards[1].url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
                    </span>
                    <span className="mx-4 text-4xl h-[400px] w-[300px]">
                        <Image src={cards[2].url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
                    </span>
                    <span className="mx-4 text-4xl h-[400px] w-[300px]">
                        <Image src={cards[3].url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
                    </span>
                    <span className="mx-4 text-4xl h-[400px] w-[300px]">
                        <Image src={cards[4].url} width={400} height={400} alt="scroll-image" className="h-full w-[400px] " />
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Tailored