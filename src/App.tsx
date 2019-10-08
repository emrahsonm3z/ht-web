import { hot } from "react-hot-loader/root";
import React, { FunctionComponent } from "react";

import Routes from "./routes";

const App: FunctionComponent = () => (
  <>
    <header>Header</header>
    <Routes />
    <footer>Footer</footer>
  </>
);

export default hot(App);
