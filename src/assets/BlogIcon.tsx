import React, { SVGProps } from "react";
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const BlogIcon = ({ index, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke={index ? "#55555C" : '#2BEE91'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.667 7.333 1.333 23.667M20 15.5H9.5m-2.8 4.667h7.86c.286 0 .428 0 .563-.033.119-.028.232-.075.337-.14.118-.071.218-.172.42-.374l5.87-5.87c.279-.279.418-.418.53-.542a7 7 0 0 0 0-9.416 17.596 17.596 0 0 0-.53-.542 17.632 17.632 0 0 0-.541-.53 7 7 0 0 0-9.417 0c-.124.112-.263.251-.542.53L5.38 9.12c-.202.202-.302.303-.375.42a1.167 1.167 0 0 0-.14.338c-.032.134-.032.277-.032.562v7.86c0 .653 0 .98.128 1.23.112.22.29.398.51.51.25.127.576.127 1.23.127Z"
    />
  </svg>
)
export default BlogIcon

