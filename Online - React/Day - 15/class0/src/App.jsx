import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Kodr from "./pages/Kodr";
import Kodex from "./pages/Kodex";
import Footer from "./components/Footer";

const App = () => {
  // const allRoutes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  //   {
  //     path: "/courses",
  //     element: <Courses />,
  //     children: [
  //       {
  //         path: "kodex",
  //         element: <Kodex />,
  //       },
  //       {
  //         path: "kodr",
  //         element: <Kodr />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <div>
      <Navbar />

      {/* <RouterProvider router={allRoutes} /> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses/kodr" element={<Kodr />}></Route>
          <Route path="/courses/kodex" element={<Kodex />}></Route>
        </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
