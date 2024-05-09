import React, { SVGProps } from "react";
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const AboutIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke={index ? "#55555C" : '#2BEE91'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.667a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path
      stroke={index ? "#55555C" : '#2BEE91'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.5 11.326c0-.67 0-1.005.086-1.314.077-.273.203-.53.371-.758.19-.258.455-.464.984-.875l7.913-6.154c.41-.32.615-.479.841-.54.2-.054.41-.054.61 0 .226.061.431.22.841.54l7.913 6.154c.529.411.793.617.984.875.168.228.294.485.37.758.087.309.087.644.087 1.314v8.44c0 1.307 0 1.96-.254 2.46-.224.439-.581.796-1.02 1.02-.5.254-1.152.254-2.46.254H5.234c-1.306 0-1.96 0-2.459-.254a2.334 2.334 0 0 1-1.02-1.02c-.254-.5-.254-1.153-.254-2.46v-8.44Z"
    />
  </svg>
)
export default AboutIcon

