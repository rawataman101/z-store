import "./App.css";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Products from "./Components/Products/Products";
import { Routes as Switch, Route } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

function App() {
  return (
    <SnackbarProvider>
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
    </SnackbarProvider>
  );
}

export default App;
