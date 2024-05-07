import { NavBar } from "../components"

const AccountRecievable = () => {
    return (
        <div>
            <NavBar />
            <div className={`max-w-7xl mx-auto flex flex-row items-center justify-center gap-5`}>
                <div className="flex flex-col items-center my-7 md:my-14">
                    <div className="bg-[#01C467] text-white text-sm font-bold leading-5 rounded-3xl px-4 py-2 mb-5 w-max">PRICING</div>

                    <p className={`text-center mt-2 text-[#00000A] text-[32px] font-extrabold md:text-7xl lg:leading-[86.4px]`}>
                        Just the right price to <br /> suit any Business
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AccountRecievable