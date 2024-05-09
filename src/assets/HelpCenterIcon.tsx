import React, { SVGProps } from "react";
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const HelpCenterIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
       stroke={index ? "#55555C" : '#2BEE91'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.5 19v-7c0-5.799-4.701-10.5-10.5-10.5S1.5 6.201 1.5 12v7m2.917 3.5A2.917 2.917 0 0 1 1.5 19.583V17.25a2.917 2.917 0 0 1 5.833 0v2.333A2.917 2.917 0 0 1 4.417 22.5Zm15.166 0a2.917 2.917 0 0 1-2.916-2.917V17.25a2.917 2.917 0 1 1 5.833 0v2.333a2.917 2.917 0 0 1-2.917 2.917Z"
    />
  </svg>
)
export default HelpCenterIcon

