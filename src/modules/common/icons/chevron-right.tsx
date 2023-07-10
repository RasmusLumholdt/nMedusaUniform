import React from "react"
import { IconProps } from "types/icon"

const ChevronRight: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
    <g transform="translate(-3, 0)">
      <path
          d="M11.875 5L16.875 10L11.875 15"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default ChevronRight



