import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Shop } from "./pages/shop";
import { Gallery } from "./pages/gallery";
import { Faq } from "./pages/faq";
import { AboutUs } from "./pages/aboutus";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ResetPass } from "./pages/resetpass";
import Private from "./pages/private";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Sidebar } from "./component/sidebar";
import { Footer } from "./component/footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Shop />} path="/shop" />
                        <Route element={<Gallery />} path="/gallery" />
                        <Route element={<Faq />} path="/faq" />
                        <Route element={<AboutUs />} path="/aboutus" />
                        <Route path="/login" element={<Login />} />
                        <Route path="/private" element={<Private />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/resetpassword" element={<ResetPass />} />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Sidebar />
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
