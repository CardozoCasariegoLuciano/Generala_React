import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { UserNameProvider } from "./context/userContex";
import Tablero from "./pages/Tablero/Tablero";
import UserModal from "./pages/UserModal/UserModal";
import ComoJugar from "./pages/ComoJugar/ComoJugar";
import { GameProvider } from "./context/gameContext";
import NotFound from "./pages/NotFound/NotFound";
import { FinProvider } from "./context/finContext";

const App = () => {
  return (
    <div>
      <GameProvider>
        <FinProvider>
          <UserNameProvider>
            <BrowserRouter basename={"/generala"}>
              <Switch>
                <Route exact path="/" component={UserModal} />
                <Route exact path="/juego" component={Tablero} />
                <Route exact path="/comojugar" component={ComoJugar} />
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </UserNameProvider>
        </FinProvider>
      </GameProvider>
    </div>
  );
};

export default App;
