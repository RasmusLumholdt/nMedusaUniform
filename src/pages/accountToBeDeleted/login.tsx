import LoginTemplate, { LoginTemplateProps } from "@modules/account/templates/login-template"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { registerUniformComponent } from "@uniformdev/canvas-react"
import { NextPageWithLayout } from "types/global"


const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Sign in" description="Sign in to your ACME account." />
      <LoginTemplate />
    </>
  )
}

Login.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Login
