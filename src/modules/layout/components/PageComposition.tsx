import { RootComponentInstance, createUniformApiEnhancer } from "@uniformdev/canvas";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";
import { ReactElement } from "react";
import Layout from "../templates";
import { UniformCompositionProps } from "types/uniformTypes";
import AccountLayout from "@modules/account/templates/account-layout";


  export default function PageComposition({
    preview,
    data:composition,
    nodes,
  }: UniformCompositionProps) {
    const contextualEditingEnhancer = createUniformApiEnhancer({
        apiUrl: "/api/preview"
    })
    return (
      <main>
        <UniformComposition 
          data={composition}
          contextualEditingEnhancer={contextualEditingEnhancer}>
          <UniformSlot name="header" />
          <UniformSlot name="content" />
          <UniformSlot name="footer" />
        </UniformComposition>
      </main>
    )
  }

  PageComposition.getLayout = (page: ReactElement) => {
    return getLayouBasedOnComposition(page);
  }
  
  const getLayouBasedOnComposition = (page: ReactElement) => {
    switch (page.props?.data?.type) {
      case "PageComposition":
        return <Layout>{page}</Layout>
      case "AccountPage":
        return <Layout><AccountLayout>{page}</AccountLayout></Layout>
      default:
        return <Layout>{page}</Layout>
  }
}