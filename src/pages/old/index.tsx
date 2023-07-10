import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
// import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import { UniformComposition, UniformSlot } from '@uniformdev/canvas-react'
import { RootComponentInstance } from '@uniformdev/canvas'
import '@modules/home/components/hero/index.tsx'
import { withUniformGetServerSideProps } from "@uniformdev/canvas-next/slug"

export const getServerSideProps = withUniformGetServerSideProps()
const Home = (props: { data: RootComponentInstance }) => {
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <UniformComposition data={props.data}>
          <UniformSlot name="content" />
      </UniformComposition>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
