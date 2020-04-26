import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Infographic from "./components/Flyer";
import SignIn from "./components/SIgnIn";
import Layout from "./components/Layout";
import { NAV_LIST } from "./config";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [page, setPage] = useState("flyers");
  const pageObj = NAV_LIST[page];

  return (
    <React.Fragment>
      {isAuth ? (
        <Layout
          title={pageObj.title}
          setPage={setPage}
          component={pageObj.component}
        />
      ) : (
        <SignIn setIsAuth={setIsAuth} />
      )}
    </React.Fragment>
  );
}

export default App;
