'use client'
import OverlayImage from "./components/OverlayImage/OverlayImage";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Examples from "./components/Examples/Examples";
import Services from "./components/Services/Services";
import Clients from "./components/Clients/Clinets";
import Footer from "./components/Footer/Footer";

export default function Home() {
    return (
        <div>
            <OverlayImage>
                <Header/>
                <Main/>
            </OverlayImage>
            {/*<Examples/>*/}
            {/*<Services/>*/}
            {/*<Clients/>*/}
            {/*<Footer/>*/}
        </div>
    );
}
