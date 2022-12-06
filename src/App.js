import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Login from "./Pages/login";
import PrivateRoute from "./privateRoute";
import "./App.css";
import "./styles.css";
import { useEffect } from "react";
import { gapi } from "gapi-script";

function App() {
  const clientId =
    "1079278707521-b1c7oh9isnopva3eknej65nh74ml50k7.apps.googleusercontent.com";
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId,
      });
    };
    gapi.load("client:auth2", start);
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to={"/login"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
