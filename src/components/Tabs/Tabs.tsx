import { useEffect, useRef, useState } from 'react';
// import { useAuth } from '../../hooks';

type Color = 'red-600' | 'orange-600' | 'yellow-600' | 'grey-600' | 'white'
interface Props {
  data: {
    label: string
    content: JSX.Element
    badge?: number
    badgeColor?: Color
    badgeTextColor?: Color
    render?: () => JSX.Element
  }[],
  activeTab?: number
  className?: string
}
const Tabs = ({ data, activeTab = 0, className }: Props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef<any[]>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTabIndex]);

  useEffect(() => {
    setActiveTabIndex(activeTab)
  }, [activeTab])

  const Render = () => data[activeTabIndex].content

  return (
    <div>
      <div className={`${className} relative !overflow-scroll no-scrollbar mr-4`}>
        <div className="flex space-x- border-b border-[#E5E5E6] px-4 md:px-5">
          {data.map((tab, idx) => {
            return (
              <button
                key={idx}
                // @ts-ignore
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`${activeTabIndex === idx && "!text-[#01C467] bg-[#E7FDF3] rounded-lg"} pt-2 pb-3 text-[#808084] px-3 md:px-4 text-xs md:text-sm leading-[19.6px] flex items-center whitespace-nowrap`}
                onClick={() => {
                  setActiveTabIndex(idx)
                //   useAuth.setState({ activeTab: idx })
                }}
              >
                {tab.label}

                {tab.badge && (<span className={`p-2 rounded-full w-3 h-3 bg-${tab.badgeColor} text-xs text-center flex items-center justify-center  border border-r text-${tab.badgeTextColor} ml-2`}>{tab.badge}</span>)}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-[#01C467] transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <Render />
      </div>
    </div>
  );
}
export default Tabs