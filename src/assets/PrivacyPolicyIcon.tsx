import React, { SVGProps } from "react";
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const PrivacyPolicyIcon = ({ index, ...props }: Props)  => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke={index ? "#55555C" : '#2BEE91'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.333 10.667V6.933c0-1.96 0-2.94-.381-3.689a3.5 3.5 0 0 0-1.53-1.53c-.749-.38-1.729-.38-3.689-.38H7.266c-1.96 0-2.94 0-3.688.38a3.5 3.5 0 0 0-1.53 1.53c-.381.75-.381 1.73-.381 3.69v12.133c0 1.96 0 2.94.381 3.689a3.5 3.5 0 0 0 1.53 1.53c.748.38 1.728.38 3.688.38H11m5.83-8.364c-.933-1.06-2.489-1.345-3.658-.374-1.169.97-1.334 2.594-.415 3.743.918 1.149 4.073 3.829 4.073 3.829s3.155-2.68 4.074-3.829c.918-1.149.773-2.782-.416-3.743-1.19-.961-2.725-.686-3.658.374Z"
    />
  </svg>
)
export default PrivacyPolicyIcon


