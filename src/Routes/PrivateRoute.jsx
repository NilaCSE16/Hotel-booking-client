import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import ProgressBar from "@ramonak/react-progress-bar";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <ProgressBar completed={60} />;
  }
  if (user?.email) {
    return children;
  }
  return (
    <Navigate
      state={{ from: location.pathname }}
      to="/login"
      replace
    ></Navigate>
  );
};

export default PrivateRoute;
