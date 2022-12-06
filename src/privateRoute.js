import { useEffect, useState } from "react";
import { json, Navigate } from "react-router-dom";

function PrivateRoute({ component: RouteComponent, ...rest }) {
  const isAuth = localStorage.getItem("isAuth");
  const [isAuthp, setIsAuth] = useState(false);
  const isAuthenticated = () => {
    const authObj = JSON.parse(localStorage.getItem("auth"));
    const currentTime = Date.now();
    if (authObj?.access_token && authObj?.expires_at > currentTime) {
      return true;
    }
    return false;
  };

  if (isAuthenticated()) {
    return <RouteComponent />;
  }
  return <Navigate to="/login" />;
}

export default PrivateRoute;
