import * as React from "react"
import { SVGProps } from "react"
type Props = {
    index: string;
} & SVGProps<SVGSVGElement>;

const BackgroundLine = ({ index = '#fff', ...props }: Props) => (
    <div className="object-cover h-full bg-contain bg-center mx-auto bg-inherit ">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={1440}
            height={950}
            fill="none"
            {...props}
        >
            <g clipPath="url(#a)">
                <path fill={index} d="M0 0h1440v950H0z" />
                <mask
                    id="b"
                    width={190}
                    height={1024}
                    x={-36}
                    y={0}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M-36 0h190v1024H-36z" />
                    <path d="M-36 0h189v1024H-36V0Z" />
                </mask>
                <path fill="#F2F2F3" d="M152 0v1024h2V0h-2Z" mask="url(#b)" />
                <mask
                    id="c"
                    width={190}
                    height={1024}
                    x={153}
                    y={0}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M153 0h190v1024H153z" />
                    <path d="M153 0h189v1024H153V0Z" />
                </mask>
                <path fill="#F2F2F3" d="M341 0v1024h2V0h-2Z" mask="url(#c)" />
                <mask
                    id="d"
                    width={190}
                    height={1024}
                    x={342}
                    y={0}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M342 0h190v1024H342z" />
                    <path d="M342 0h189v1024H342V0Z" />
                </mask>
                <path fill="#F2F2F3" d="M530 0v1024h2V0h-2Z" mask="url(#d)" />
                <mask
                    id="e"
                    width={190}
                    height={1024}
                    x={531}
                    y={0}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M531 0h190v1024H531z" />
                    <path d="M531 0h189v1024H531V0Z" />
                </mask>
                <path fill="#F2F2F3" d="M719 0v1024h2V0h-2Z" mask="url(#e)" />
                <mask
                    id="f"
                    width={190}
                    height={1024}
                    x={720}
                    y={0}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M720 0h190v1024H720z" />
                    <path d="M720 0h189v1024H720V0Z" />
                </mask>
                <path fill="#F2F2F3" d="M908 0v1024h2V0h-2Z" mask="url(#f)" />
                <mask
                    id="g"
                    width={190}
                    height={1024}
                    x={909}
                    y={0}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M909 0h190v1024H909z" />
                    <path d="M909 0h189v1024H909V0Z" />
                </mask>
                <path fill="#F2F2F3" d="M1097 0v1024h2V0h-2Z" mask="url(#g)" />
                <mask
                    id="h"
                    width={190}
                    height={1024}
                    x={1098}
                    y={0}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M1098 0h190v1024h-190z" />
                    <path d="M1098 0h189v1024h-189V0Z" />
                </mask>
                <path fill="#F2F2F3" d="M1286 0v1024h2V0h-2Z" mask="url(#h)" />
                <mask
                    id="i"
                    width={190}
                    height={1024}
                    x={1287}
                    y={0}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M1287 0h190v1024h-190z" />
                    <path d="M1287 0h189v1024h-189V0Z" />
                </mask>
                <path fill="#F2F2F3" d="M1475 0v1024h2V0h-2Z" mask="url(#i)" />
                <mask
                    id="j"
                    width={1533}
                    height={190}
                    x={-57}
                    y={889}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M-57 889h1533v190H-57z" />
                    <path d="M-57 1079V890h1533v189H-57Z" />
                </mask>
                <path fill="#F2F2F3" d="M-57 891h1533v-2H-57v2Z" mask="url(#j)" />
                <mask
                    id="k"
                    width={1533}
                    height={190}
                    x={-57}
                    y={700}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M-57 700h1533v190H-57z" />
                    <path d="M-57 890V701h1533v189H-57Z" />
                </mask>
                <path fill="#F2F2F3" d="M-57 702h1533v-2H-57v2Z" mask="url(#k)" />
                <mask
                    id="l"
                    width={1533}
                    height={190}
                    x={-57}
                    y={511}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M-57 511h1533v190H-57z" />
                    <path d="M-57 701V512h1533v189H-57Z" />
                </mask>
                <path fill="#F2F2F3" d="M-57 513h1533v-2H-57v2Z" mask="url(#l)" />
                <mask
                    id="m"
                    width={1533}
                    height={190}
                    x={-57}
                    y={322}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M-57 322h1533v190H-57z" />
                    <path d="M-57 512V323h1533v189H-57Z" />
                </mask>
                <path fill="#F2F2F3" d="M-57 324h1533v-2H-57v2Z" mask="url(#m)" />
                <mask
                    id="n"
                    width={1533}
                    height={190}
                    x={-57}
                    y={133}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M-57 133h1533v190H-57z" />
                    <path d="M-57 323V134h1533v189H-57Z" />
                </mask>
                <path fill="#F2F2F3" d="M-57 135h1533v-2H-57v2Z" mask="url(#n)" />
                <mask
                    id="o"
                    width={1533}
                    height={190}
                    x={-57}
                    y={-56}
                    fill="#000"
                    maskUnits="userSpaceOnUse"
                >
                    <path fill={index} d="M-57-56h1533v190H-57z" />
                    <path d="M-57 134V-55h1533v189H-57Z" />
                </mask>
                <path fill="#F2F2F3" d="M-57-54h1533v-2H-57v2Z" mask="url(#o)" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill={index} d="M0 0h1440v950H0z" />
                </clipPath>
            </defs>
        </svg>
    </div>
)
export default BackgroundLine
