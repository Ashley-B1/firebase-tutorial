import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import LogIn from "./components/LogIn";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

import { Container } from "react-bootstrap";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Container
      style={{ minHeight: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path='/' element={
                <PrivateRoute>
                  <DashBoard />
                </PrivateRoute>
              } />
              <Route path='/update-profile' element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              } />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
