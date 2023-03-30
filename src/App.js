import Home from "./pages/Home";
import NavBar from "./components/navbar";
import { Container } from "react-bootstrap";
import BudgetContextProvider from "./contexts/budgetContext";
import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Sigup";
import Dashboard from "./pages/Dashboard";
// import UserContextProvider from "./contexts/userContent";
// import ProtectedRoutes from "./utils/protecedRoutes";
// import { useContext, useState, useEffect } from "react";
// import { UserContext } from "./contexts/userContent";
// import ProtectDasboard from "./utils/protecedRoutes";


function App() {


  return (
    <>
      {/* <UserContextProvider> */}
        <BudgetContextProvider>
            <NavBar />
              <Container className="mt-4">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/dashboard" element={<ProtectDasboard><Dashboard /></ProtectDasboard>} /> */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                  </Routes>
              </Container>
        </BudgetContextProvider>
      {/* </UserContextProvider> */}
    </>
  );
}

export default App;
