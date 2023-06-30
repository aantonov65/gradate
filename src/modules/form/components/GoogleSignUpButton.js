import React, { useContext } from "react";
import googleLogo from "../../../assets/images/logos/google.png";
import { auth, googleProvider } from "../../../config/firebase";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

const GoogleSignUpButton = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((userCredentials) => {
        const user = userCredentials.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/daily-tasks");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleGoogleSignUp();
      }}
      className="form__google-btn">
      <img className="form__google-logo" src={googleLogo} alt="google logo" />
      Continue with Google
    </button>
  );
};

export default GoogleSignUpButton;
