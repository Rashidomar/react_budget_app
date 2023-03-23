import Home from "./pages/Home";
import NavBar from "./components/navbar";
import { Container } from "react-bootstrap";

import BudgetContextProvider from "./contexts/budgetContext";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Sigup";

function App() {
  return (
    <>
      <BudgetContextProvider>
          <NavBar />
            <Container className="mt-4" >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
            </Container>
      </BudgetContextProvider>
    </>
  );
}

export default App;
