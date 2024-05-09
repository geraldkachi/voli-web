import React, { SVGProps } from "react";
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const CustomerStories = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={index ? "#55555C" : '#2BEE91'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.797 1.5c4.109 0 6.87 3.911 6.87 7.56 0 7.39-11.46 13.44-11.667 13.44-.207 0-11.666-6.05-11.666-13.44 0-3.649 2.76-7.56 6.87-7.56 2.36 0 3.902 1.194 4.796 2.244.895-1.05 2.437-2.244 4.797-2.244Z"
    />
  </svg>
)
export default CustomerStories
