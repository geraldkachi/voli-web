import React, { SVGProps } from "react";
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const RecivableIcon = ({ index, ...props }: Props)=> (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke={index ? "#2B2B33" : '#2BEE91'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.106 10.577 10 16m5.954-5.743L12.587 2.36c-.264-.62-.396-.929-.584-1.025a.583.583 0 0 0-.521-.005c-.19.092-.328.399-.605 1.012l-8.779 19.48c-.27.6-.405.9-.35 1.101a.583.583 0 0 0 .342.387c.194.08.508-.018 1.137-.214l20.434-6.358c.643-.2.965-.3 1.08-.478a.583.583 0 0 0 .057-.518c-.072-.198-.364-.367-.947-.704L16.346 10.7c-.1-.058-.15-.086-.193-.124a.582.582 0 0 1-.099-.112 1.228 1.228 0 0 1-.1-.206Z"
    />
  </svg>
)
export default RecivableIcon
