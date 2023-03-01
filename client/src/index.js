import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import HttpClient from "./network/http";
import reportWebVitals from "./reportWebVitals";
import ExtensionBlockService from "./service/extensionBlockService";

const root = ReactDOM.createRoot(document.getElementById("root"));
const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const extensionBlockService = new ExtensionBlockService(httpClient);
root.render(
  <React.StrictMode>
    <App ExtensionBlockRepository={extensionBlockService} />
  </React.StrictMode>
);
reportWebVitals();
