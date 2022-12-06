import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const clientId =
    "1079278707521-b1c7oh9isnopva3eknej65nh74ml50k7.apps.googleusercontent.com"; // add your own key
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem('auth')
    console.log("logout successfully ");
  };
  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={handleLogout}
    />
  );
};

export default LogoutButton;
