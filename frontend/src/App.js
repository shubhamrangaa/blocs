// views
import { WelcomePage } from "./react/views/";
import { Game } from "./react/views/Game";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
