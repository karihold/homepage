import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "pages/frontpage/frontpage";
import Contact from "pages/contact/contact";
import NotFound from "pages/not-found/not-found";
import Header from "components/header/header";
import Footer from "components/footer/footer";

import HeaderIllustration from "assets/illustrations/header-illustration.svg";
import "./App.scss";

const renderTarget = document.querySelector("#render");

const App = () => {
  return (
    <>
      <Router>
        <img id="header-illustration" src={HeaderIllustration} />
        <Header />
        <main>
          <Routes>
            <Route path="/" index element={<Frontpage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

const root = createRoot(renderTarget);
root.render(<App />);
