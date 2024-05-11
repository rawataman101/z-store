import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Products from "./Components/Products/Products";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route
          path="/products"
          element={
            <>
              <Header />
              <Products />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Landing />
            </>
          }
        />
      </Switch>
    </div>
  );
}

export default App;
