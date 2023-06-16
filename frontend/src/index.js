import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
  </Router>

);
