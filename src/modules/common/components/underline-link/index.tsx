import ChevronRight from "@modules/common/icons/chevron-right"
import Link from "next/link"

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start">
      <Link href={href}>
        <a className="flex items-center text-link-button gap-x-4 py-2 transition-all duration-300 group">         
          <div className="p-[1px] border-2 rounded-full m-l-[-2px]">
          <ChevronRight
            size={22}
            className="transition-all duration-300 "
          />
          </div>
          <span>{children}</span>
        </a>
      </Link>
    </div>
  )
}

export default UnderlineLink
