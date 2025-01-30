import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";

import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Signup from "./pages/Signup";
import Features from "./pages/Features";
import Enterprise from "./pages/Enterprise";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Support from "./pages/Support";
import JsonServe from "./pages/ServerJson";
import ServerJsonDetails from "./pages/ServerJsonDetails";
import Shop from "./pages/Shop";
import StartechShop from "./pages/StartechShop";
import StartechDetails from "./pages/StartechDetails";
import TopLoadingBarComponent from "./components/TopLoadingBarComponent";

function App() {
  const BreadcrumbWithLocation = () => {
    const location = useLocation();
    return <Breadcrumb path={location.pathname} />;
  };
  // TopLoadingBarComponent
  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        /> */}
        <TopLoadingBarComponent progress={progress} />
        <Header />
        <BreadcrumbWithLocation />
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="*" element={<Nopage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support" element={<Support />} />
          <Route path="/product" element={<JsonServe />} />
          <Route path="/product/:id" element={<ServerJsonDetails />} />
          <Route
            path="/mobile"
            element={<StartechShop setProgress={setProgress} />}
          />
          <Route
            path="/mobile/:id"
            element={<StartechDetails setProgress={setProgress} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
