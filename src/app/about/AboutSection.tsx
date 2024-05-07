import Image from 'next/image'

const AboutSection = () => {
  return (
    <div>
           <div
                className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5 px-3`}
            >
                <div className="flex flex-col items-center my-7 md:my-14">
                <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">ABOUT US</div>

                    <p className={`text-center mt-2 text-[#00000A] text-[28px] font-extrabold md:text-[64px] xl:leading-[80px`}>
                    Empowering <span className="text-[#01C467]">businesses</span> with <br /> cutting-edge fintech solutions <br /> and expertise
                    </p>
                </div>
            </div>
            <div className="">
                <Image src="about-bg-play.svg" className='cursor-pointer' width={1440} height={360} objectFit='cover'alt=""/>
            </div>
    </div>
  )
}

export default AboutSection