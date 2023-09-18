import { Outlet } from "@remix-run/react";
import  Footer  from '~/routes/_public.public/footer';
export default function IndexRoute() {
    return(
        <main>
            <Outlet/>
            <Footer/>
        </main>
    )
}