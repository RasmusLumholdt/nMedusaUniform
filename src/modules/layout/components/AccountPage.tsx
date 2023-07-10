import { RootComponentInstance, createUniformApiEnhancer } from "@uniformdev/canvas";
import { UniformComposition, UniformSlot } from "@uniformdev/canvas-react";
import { ReactElement } from "react";
import Layout from "../templates";
import { UniformCompositionProps } from "types/uniformTypes";
import AccountLayout from "@modules/account/templates/account-layout";



  export default function AccountPage({
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
          <UniformSlot name="pageContent" />
          <UniformSlot name="footer" />
        </UniformComposition>
      </main>
    )
  }

  AccountPage.getLayout = (page: ReactElement) => {
    return <AccountLayout>{page}</AccountLayout>
  }