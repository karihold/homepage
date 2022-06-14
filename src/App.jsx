import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "pages/frontpage/frontpage";
import Contact from "pages/contact/contact";
import NotFound from "pages/not-found/not-found";
import Header from "components/header/header";
import Footer from "components/footer/footer";

const renderTarget = document.querySelector("#render");

const App = () => {
  return (
    <Router>
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
  );
};

render(<App />, renderTarget);
