import React, { SVGProps } from "react";
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const PayableIcon = ({ index, ...props }: Props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={27}
      fill="none"
      {...props}
    >
      <path
        stroke="url(#a)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.922 1.41 1.002 4.714c.136.64.204.959.38 1.177.155.191.367.329.605.392.27.073.59.005 1.229-.13l4.714-1.003m-3.045 6.61-9.13 1.941m10.1 2.625-9.129 1.94m.342-9.614-2.283.485m5.15-9.444L5.922 2.364c-1.917.408-2.876.612-3.529 1.14A3.5 3.5 0 0 0 1.215 5.32c-.217.811-.013 1.77.394 3.687l2.523 11.869c.407 1.917.611 2.876 1.14 3.529a3.5 3.5 0 0 0 1.814 1.178c.812.217 1.77.013 3.688-.394l7.303-1.552c1.918-.408 2.876-.612 3.53-1.14a3.5 3.5 0 0 0 1.177-1.815c.218-.811.014-1.77-.393-3.688L20.159 6.496l-8.302-5.392Z"
      />
      <defs>
        <radialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(2.86266 21.09919 -16.93207 2.29728 11.563 3.312)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={index ? "#2BEE91" : '#2B2B33' }/>
          <stop offset={1} stopColor={index ? "#01C467" : '#2B2B33'} />
        </radialGradient>
      </defs>
    </svg>
  )
  

export default PayableIcon