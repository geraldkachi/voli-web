import CardReceivable from "./Card"
const payroll = [
    {
        icon:  'recie-card1.svg',
        title: 'Give your Customers Flexibility to Choose Payment Method',
        subtitle: 'Empower your team with convenient spending and expense tracking through Corporate Cards with VolliePay',
    },
    {
        icon:'recie-card2.svg',
        title: 'Easily Import your Invoices In bulk to recieve payments',
        subtitle: "Facilitate seamless transactions and manage funds efficiently using Virtual Accounts on Vollie.",
    },
    {
        icon:'recie-card3.svg',
        title: 'We remind your customers so you don’t have to.',
        subtitle: "Effortlessly control and optimize your business expenses with our integrated Expense Management feature.",
    },
    {
        icon:'recie-card4.svg',
        title: ' Manage your Payment Request anywhere, anytime.',
        subtitle: "Seamlessly secure approvals at multiple levels with our fintech B2B product's Multi-Level Approval feature",
    },
]

const SecondSection = () => {
  return (
    <div className="bg-[#FAFAFA] md:p-20">
        
        <div className='bg-[#F8FCFA] md:bg-[#FAFAFA]'>
                <div className='max-w-6xl mx-auto bg-[#F8FCFA] md:bg-[#FAFAFA] py-20 px-3 md:px-0'>
                
                    <div className='grid md:grid-cols-2 justify-center gap-10 py-10'>
                        {payroll.map((item, key) =>
                            <CardReceivable key={item.title} keyidx={key} {...item} />
                        )}
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default SecondSection