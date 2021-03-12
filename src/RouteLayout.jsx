import React from "react";
import { Route } from "react-router-dom";

import Layout from "./Layout";

const RouteLayout = ({ children, path, title }) => {
  return (
    <Route path={path}>
      <Layout title={title}>{children}</Layout>
    </Route>
  );
};

export default RouteLayout;
