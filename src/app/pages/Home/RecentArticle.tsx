const RecentArticle = () => {
    return (
        <div className="bg-[#F8FCFA]">
        <div className="max-w-5xl mx-auto">
            <div className='py-10 md:py-20 px-3'>
                <p className='text-center text-[#808084] font-semibold text-lg leading-[22.5px] mb-10 tracking-[18%]'>Recently Published Articles</p>

                <div className="grid sm:grid-cols-3 gap-5 items-center justify-center">
                    <div className="items-center justify-center flex">
                        <img src="recent-card1.svg" alt="recent-card" />
                    </div>
                    <div className="items-center justify-center flex">
                        <img src="recent-card2.svg" alt="recent-card" />
                    </div>
                    <div className="items-center justify-center flex">
                        <img src="recent-card1.svg" alt="recent-card" />
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default RecentArticle