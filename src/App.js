import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { UserNameProvider } from "./context/userContex";
import Tablero from "./pages/Tablero/Tablero";
import UserModal from "./pages/UserModal/UserModal";
import ComoJugar from "./pages/ComoJugar/ComoJugar"

const App = () => {
  return (
    <div>
      <UserNameProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UserModal} />
            <Route exact path="/juego" component={Tablero} />
            <Route exact path="/comojugar" component={ComoJugar} />
          </Switch>
        </BrowserRouter>
      </UserNameProvider>
    </div>
  );
};

export default App;
