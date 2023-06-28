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

