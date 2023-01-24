import { Route, Routes } from "react-router-dom";

import SignUp from "./components/SignUp";
import { Container } from "react-bootstrap";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <Container
      style={{ minHeight: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>
        <SignUp />
      </div>
    </Container>
  );
}

// Having trouble with routing :/

export default App;
