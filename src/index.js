import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routing/App";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
 const basename = process.env.PUBLIC_URL || "/";
root.render(
    <BrowserRouter basename={basename}> 
      <App />
    </BrowserRouter>
  );
