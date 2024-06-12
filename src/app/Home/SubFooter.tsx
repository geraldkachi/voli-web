import { Button } from "@/components"

const SubFooter = () => {
  return (
    <div className="max-w-5xl mx-auto w-full bg-white my-5 px-3 md:px-0">

    <div className="flex flex-col md:flex-row justify-between">
        <div className="my-4">
            <p className="text-[26px] font-bold md:font-extrabold leading-[36.4px] text-[#00000A]">Vollie</p>
            <p className="text-base font-normal leading-[28.8px] text-[#808084] tracking-[-2%]">Seamless financial experience with <br /> innovative features that empower you to <br /> take control of your money.</p>
        </div>
        <div>
            <Button title='Get Started' />
        </div>
    </div>
    </div>
  )
}

export default SubFooter