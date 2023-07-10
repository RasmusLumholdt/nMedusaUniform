import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full flex items-center justify-center min-h-[47px] tracking-[1px] text-button transition-colors duration-350 ",
        {
          "text-white overlay azur skew-percent py-[14px] px-[24px] disabled:bg-gray-200":
            variant === "primary",
          "text-n-blue  border-2 bg-white border-gray-200 py-[10px] px-[20px] hover:text-white hover:bg-n-lake hover:border-n-lake":
            variant === "secondary",
        },
        className
      )}
    >
      <span>{isLoading ? <Spinner /> : children}</span>
    </button>
  )
}

export default Button
