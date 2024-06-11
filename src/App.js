import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import ResMenu from "./Components/ResMenu";
import Profile from "./Components/Profile";
//import InstaMart from "./Components/InstaMart";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./Components/Cart";

const InstaMart = lazy(() => import("./Components/InstaMart"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile", // (/) means from the root, here we need from about so we wont add / to it
            element: <Profile />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <ResMenu /> },
      {
        path: "/instaMart",
        element: (
          <Suspense>
            <InstaMart />
          </Suspense>
        ),
      },
      { path: "/Cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
