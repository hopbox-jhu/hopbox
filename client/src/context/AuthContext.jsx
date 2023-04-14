import { createContext, useContext, useState, useEffect } from "react";
import * as postApi from "../api";
import { Navigate} from "react-router-dom";
import { Notification } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import { Affix, Button, Text, Transition, rem } from "@mantine/core";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// function RequireAuth({ children }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { isAuth, setIsAuth } = useContext(AuthContext);
//   console.log(isAuth);
//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       postApi.getAuth().then((res) => {
//         console.log(res);
//         if (res.status === 200) {
//           setIsAuth(true);
//         } else {
//           setIsAuth(false);
//           setTimeout(() => {
//             navigate("/login", { state: { from: location } });
//           }, 1000);
//         }
//       });
//     } else {
//       setIsAuth(true);
//     }
//   });
  
//   if (isAuth) {
//     return <div>{children}</div>;
//   } else {
//     return <Notification title="Login required" loading message="Please login to continue" color="red" />;
//   }
// }

//export { AuthProvider, useAuth };
