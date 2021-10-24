import { Footer } from "../Footer"
import { HeaderNav } from "../HeaderNav"
import { StyledApp } from "../../styles/styledApp"


export const Layout = ({children})=>{
    return(
        <>
        <HeaderNav />
        {/* <StyledApp>
        </StyledApp> */}
        {children}
        <Footer />
        </>

    )
}