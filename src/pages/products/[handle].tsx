import { medusaClient } from "@lib/config"
import { IS_BROWSER } from "@lib/constants"
import { getProductHandles } from "@lib/util/get-product-handles"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import ProductTemplate from "@modules/products/templates"
import SkeletonProductPage from "@modules/skeletons/templates/skeleton-product-page"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { CANVAS_DRAFT_STATE, CANVAS_PUBLISHED_STATE } from "@uniformdev/canvas"
import { withUniformGetStaticProps  } from "@uniformdev/canvas-next/route"
import { UniformComponent, UniformComposition, UniformSlot } from "@uniformdev/canvas-react"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { ReactElement } from "react"
import { NextPageWithLayout, PrefetchedPageProps } from "types/global"
import { LayoutProps } from "types/uniformTypes"
import { getCompositionById, globalCompositionId, mergeGlobalCompositions } from "utils/canvas"
import '@modules/UniformComponents'

interface Params extends ParsedUrlQuery {
  handle: string
}

const fetchProduct = async (handle: string) => {
  return await medusaClient.products
    .list({ handle })
    .then(({ products }) => products[0])
}
//: NextPageWithLayout<PrefetchedPageProps, LayoutProps> = ({ notFound}, {data:pageComposition}) => {
const ProductPage : NextPageWithLayout<PrefetchedPageProps, LayoutProps> = ({ notFound, data:composition}) => {
  const { query, isFallback, replace } = useRouter()
  const handle = typeof query.handle === "string" ? query.handle : ""

  const { data, isError, isLoading, isSuccess } = useQuery(
    [`get_product`, handle],
    () => fetchProduct(handle),
    {
      enabled: handle.length > 0,
      keepPreviousData: true,
    }
  )

  if (notFound) {
    if (IS_BROWSER) {
      replace("/404")
    }

    return <SkeletonProductPage />
  }

  if (isFallback || isLoading || !data) {
    return <SkeletonProductPage />
  }

  if (isError) {
    replace("/404")
  }

  if (isSuccess) {
    return (
      <>
     
        <Head
          description={data.description}
          title={data.title}
          image={data.thumbnail}
        />
         <UniformComposition data={composition}>
          <ProductTemplate product={data} />
          
            <UniformSlot name="footer" />
          </UniformComposition>
      </>
    )
  }

  return <></>
}

ProductPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const handles = await getProductHandles()
  return {
    paths: handles.map((handle) => ({ params: { handle } })),
    fallback: true,
  }
}

export const getStaticProps = withUniformGetStaticProps({
  requestOptions: {
    state: process.env.NODE_ENV === 'development' ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE,
  },
  param: 'slug',
  handleComposition: async (routeResponse, _context) => {
    const { composition } = routeResponse.compositionApiResponse || {};
    // const breadcrumbs = await getBreadcrumbs(composition._id, Boolean(_context.preview));
    // fetching global composition for header navigation and footer
    const globalComposition = await getCompositionById(globalCompositionId, _context as { preview: boolean });
    // merging two compositions
    const pageComposition = mergeGlobalCompositions(composition, globalComposition);
    
      const handle = _context.params?.handle as string
      const queryClient = new QueryClient()

      await queryClient.prefetchQuery([`get_product`, handle], () =>
        fetchProduct(handle)
      )

  const queryData = await queryClient.getQueryData([`get_product`, handle])
    return {
      props: {
        preview: Boolean(_context.preview),
        data: pageComposition || null,
        context: {
          
        },
        dehydratedState: dehydrate(queryClient),
      },
    };
  },
});
export default ProductPage
