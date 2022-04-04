import React from "react";


// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import Landingpage from "./landingpage";
import LoginPage from "./loginPage";
const routes = [
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "Login",
    element: <LoginPage />,
  },
];

export default routes;
