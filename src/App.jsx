import { useDispatch } from "react-redux";
import "./App.css";
import { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch;

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  });

  return !loading ? (
    <div className=" text-3xl">
      <h1>Test</h1>
    </div>
  ) : null;
}

export default App;
