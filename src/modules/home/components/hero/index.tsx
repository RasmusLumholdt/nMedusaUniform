import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { registerUniformComponent } from "@uniformdev/canvas-react";


type HeroPropType = {
  titleA?: string
  subTitle?: string
  underlink?: Link
  underlinkText?: string
  image?: string
}

type Link = {
  path: string,
  type: string
}

const Hero = ({
  titleA,
  subTitle,
  underlink,
  underlinkText,
  image,
} : HeroPropType) => {
  return (
    <div className="h-[70vh] w-full relative overflow-hidden">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-thin mb-4 drop-shadow-md shadow-black">
          {titleA}
        </h1>
        <p className="text-xl-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          {subTitle}
        </p>
        {underlink &&
        <UnderlineLink href={underlink.path}>{underlinkText}</UnderlineLink>}
      </div>
      {image && <Image
        src={image}
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      />}
    </div>
  )
}
export default Hero
registerUniformComponent({ type: "hero", component: Hero });
