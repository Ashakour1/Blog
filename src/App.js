import Header from "./components/Header";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import { Routes, Route } from "react-router-dom";

import Blogs from "./pages/Blogs";
import Footer from "./components/footer";
import Page from "./pages/Page";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section />
              <Section2 />
            </>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:title" element={<Page />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
