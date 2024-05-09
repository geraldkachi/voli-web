import React, { SVGProps } from "react";
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const FinancialAccountIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke={index ? "#55555C" : '#2BEE91'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.333 11.833h-7M8.666 16.5H6.333m9.334-9.333H6.332m14 4.083V6.933c0-1.96 0-2.94-.381-3.689a3.5 3.5 0 0 0-1.53-1.53c-.749-.38-1.729-.38-3.689-.38H7.266c-1.96 0-2.94 0-3.688.38a3.5 3.5 0 0 0-1.53 1.53c-.381.749-.381 1.73-.381 3.69v12.133c0 1.96 0 2.94.381 3.689a3.5 3.5 0 0 0 1.53 1.53c.748.38 1.728.38 3.688.38h3.15m12.25 0-1.75-1.75M22.084 20a4.083 4.083 0 1 1-8.167 0 4.083 4.083 0 0 1 8.167 0Z"
    />
  </svg>
)
export default FinancialAccountIcon
