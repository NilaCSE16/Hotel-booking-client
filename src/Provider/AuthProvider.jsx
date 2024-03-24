import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const SignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      if (currentUser) {
        fetch("https://hotel-booking-client-tau.vercel.app//jwt", {
          method: "POST",
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        }).then(() => {
          // console.log(data);
        });
      } else {
        fetch("https://hotel-booking-client-tau.vercel.app//logout", {
          method: "POST",
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        }).then(() => {
          // console.log("data: ", data);
        });
      }
    });
    return () => {
      return unsubscribe;
    };
  }, [user?.email]);

  const authInfo = {
    user,
    loading,
    SignUp,
    SignIn,
    LogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
