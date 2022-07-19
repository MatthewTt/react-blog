import React from 'react';
import {Outlet, useRoutes} from "react-router-dom";
import routes from "./routes";


function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Outlet />
      {element}
    </>
  );
}

export default App;
