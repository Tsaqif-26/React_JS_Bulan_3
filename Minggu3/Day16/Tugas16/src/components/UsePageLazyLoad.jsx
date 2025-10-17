import { lazy, Suspense, useState } from "react";

const Home = lazy(() => import("./Home"))
const About = lazy(() => import("./About"))
const Contact = lazy(() => import("./Contact"))

export function UsePageLazyLoad() {

    const [page, setPage] = useState("home")

    const renderPage = () => {
        switch (page) {
            case "about":
                return <About/>
            case "contact":
                return <Contact/>
            default:
                return <Home/>
        }
    }

    const PageComponent = (
        <Suspense fallback={<h2>Loading......</h2>}>{renderPage()}</Suspense>
    )

    return {page,setPage,PageComponent}
}