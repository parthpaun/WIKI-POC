import GoogleLogin from "react-google-login";

const LoginButton = ({ onLoginSucess, onLoginFailure }) => {
  const clientId =
    "1079278707521-b1c7oh9isnopva3eknej65nh74ml50k7.apps.googleusercontent.com"; // add your own key
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Google Login"
      onFailure={onLoginFailure}
      onSuccess={onLoginSucess}
      cookiePolicy="single_host_origin"
      isSignedIn={true}
    />
  );
};

export default LoginButton;
