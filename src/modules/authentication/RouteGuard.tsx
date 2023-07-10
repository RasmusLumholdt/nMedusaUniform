import { NextRouter, useRouter } from 'next/router';
import Spinner from "@modules/common/icons/spinner"
// import publicPaths from '../data/publicPaths';


import {
    JSXElementConstructor,
    ReactElement,
    useEffect,
    useState,
} from 'react';
import { useAccount } from '@lib/context/account-context';

const RouteGuard = (props: {
    children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}) => {
    const { children } = props;

    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const { checkSession, customer, retrievingCustomer } = useAccount()
    //See if i can find preview secret from the url and use it here
    useEffect(() => {
        
        const authCheck = () => {
            let q = router.query;
            if (
                !router.isPreview &&
                !customer &&
                !retrievingCustomer &&
                !router.asPath.includes('account/login')
            ) {
                setAuthorized(false);
                router.push('/account/login');
            } else {
                setAuthorized(true);
            }
        };

        authCheck();
 
        
        const preventAccess = () => setAuthorized(false);

        router.events.on('routeChangeStart', preventAccess);
        router.events.on('routeChangeComplete', authCheck);

        return () => {
            router.events.off('routeChangeStart', preventAccess);
            router.events.off('routeChangeComplete', authCheck);
        };
    }, [router, router.events, customer, retrievingCustomer]);

    return authorized ? (
        children
    ) : (
       <></>
    );
};

const routeHasMatchingPreviewSecret = (q: any):boolean => {
    const previewSecret = q['previewSecret'];
    if(previewSecret && previewSecret === process.env.UNIFORM_PREVIEW_SECRET){
        return true;
    }
     return false;

}

export default RouteGuard;