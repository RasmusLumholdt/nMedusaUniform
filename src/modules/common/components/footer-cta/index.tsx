import UnderlineLink from "@modules/common/components/underline-link"
import { registerUniformComponent } from "@uniformdev/canvas-react"
import Image from "next/image"

type FooterCtaPropType = {
    title?: string,
    underlink?: {
        path: string,
        type: string
    }
    underlinkText?: string
    image?: string
}

const FooterCTA = ({ title, underlink, underlinkText, image }: FooterCtaPropType) => {
  return (
    <div className="bg-[#ebf8fb] w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">{title}</h3>
          <div className="mt-6">
            {underlink &&
            <UnderlineLink href={underlink.path}>{underlinkText}</UnderlineLink>}
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
          {image && <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />}
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
registerUniformComponent({ type: "FooterCTA", component: FooterCTA });
