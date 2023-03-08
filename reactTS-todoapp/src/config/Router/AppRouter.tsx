import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../screens/Home";
import LoginScreen from "../../screens/LoginScreen";
import SignupScreen from "../../screens/SignupScreen";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignupScreen />} path="signup" />
        <Route element={<LoginScreen />} path="login" />
      </Routes>
    </Router>
  );
}

export default AppRouter;
