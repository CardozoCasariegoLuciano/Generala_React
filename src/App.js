import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { UserNameProvider } from "./context/userContex";
import Tablero from "./pages/Tablero/Tablero";
import UserModal from "./pages/UserModal/UserModal";

const App = () => {
  return (
    <div>
      <UserNameProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UserModal} />
            <Route exact path="/juego" component={Tablero} />
          </Switch>
        </BrowserRouter>
      </UserNameProvider>
    </div>
  );
};

export default App;
