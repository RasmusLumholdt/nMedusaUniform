
import PageComposition  from '@modules/layout/components/PageComposition';
import '@modules/UniformComponents'
import { withUniformGetServerSideProps} from '@uniformdev/canvas-next/route';

export const getServerSideProps = withUniformGetServerSideProps();

export default PageComposition;
