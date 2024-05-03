"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

type CardType = {
    url: string;
    title: string;
    id: number;
  };
  
  const cards: CardType[] = [
    {
      url: "tailored1.svg",
      title: "Title 1",
      id: 1,
    },
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
      // <section ref={targetRef} className="relative h-[120vh] bg-">
      <section ref={targetRef} className="relative bg-">
        {/* <motion.div className={`sticky top-0 flex h-[50vh] items-center overflow-hidden ${x && 'mt-30'}`}> */}
        <motion.div className={`sticky top-0 flex h-max] items-center overflow-hidden ${x && 'mt-30'}`}>
          <motion.div className={`flex  overflow-x-hidden group gap-4`}>
          {/* <motion.div style={{ x }} className={`flex  overflow-x-hidden gap-4`}> */}
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </motion.div>
      </section>
    );
  };
  
  const Card = ({ card }: { card: CardType }) => {
    return (
      <div
        key={card.id}
        aria-hidden
        className="group animate-loop-scroll relative w-max overflow-hidden bg-neutral-200 group-hover:pause"
      >
        {/* <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div> */}
        <img src={card.url} alt="" />
        <div className="absolute inset-0 z-10 grid place-content-center bg-center bg-cover">
          {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p> */}
        </div>
      </div>
    );
  };

const Tailored = () => {
    return (
        <div className="bg-[#F8FCFA]">
            <div className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}>
                <div className="flex flex-col my-14">
                    <p className={`text-center mt-2 text-[#00000A] text-[28px] md:text-[48px] font-bold leading-[37.8px] md:leading-[72px]`}>Tailored to fit your <br /> business financial Needs </p>
                </div>
            </div>

            <HorizontalScrollCarousel />

            {/* {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })} */}
        </div>
    )
}

export default Tailored