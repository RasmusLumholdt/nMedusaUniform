import AlphaSecretLoginTemplate from "@modules/account/templates/alpha-secret-login-template";
import Head from "@modules/common/components/head";
import Layout from "@modules/layout/templates";
import { NextPageWithLayout } from "types/global";


const AlphaSecretLogin: NextPageWithLayout = () => {
    return (
        <>
        <Head title="Shhhh" description="10hif9s" />
        <AlphaSecretLoginTemplate />
        </>
    )
}


AlphaSecretLogin.getLayout = (page) => {
    return <Layout>{page}</Layout>
}
export default AlphaSecretLogin