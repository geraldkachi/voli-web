import { Button } from "@/app/components"

const SubFooter = () => {
  return (
    <div className="max-w-5xl mx-auto w-full bg-white">

    <div className="flex flex-col md:flex-row justify-between">
        <div>
            <p className="text-[25px] font-extrabold leading-[36.4px] text-[#00000A]">Vollie</p>
            <p className="text-base leading-[28.8px] text-[#808084]">Seamless financial experience with <br /> innovative features that empower you to <br /> take control of your money.</p>
        </div>
        <div>
            <Button title='Get Started' />
        </div>
    </div>
    </div>
  )
}

export default SubFooter