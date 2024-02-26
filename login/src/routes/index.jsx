import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignUp = lazy(() => import("../auth/SignUp"));

const Login = lazy(() => import("../auth/SignIn"));

const Index = () => {
  return (
    <Routes>
      <Route path="/signup" key="signUp" element={<SignUp />} />
      <Route path="/signin" key="signIn" element={<Login />} />
    </Routes>
  );
};

export default Index;
