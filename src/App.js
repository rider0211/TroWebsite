import React from 'react';
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import routes from "./routes";
import './style/App.css';

const AppRouter = () => {
  const content = useRoutes(routes);
  return (
    content
  );
}

function App() {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | River-VC"
        defaultTitle="River - VC"
      />
      <Router>
        <AppRouter />
      </Router>
    </HelmetProvider>
  )
}

export default App;
