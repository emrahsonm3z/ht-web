import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Home: FunctionComponent = () => (
  <div>
    <h1>Home page 2222</h1>

    <Link to="/feed">Go to feed</Link>
  </div>
);

export default Home;
