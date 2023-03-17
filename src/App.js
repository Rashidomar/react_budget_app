import Home from "./pages/home";
import NavBar from "./components/navbar";
import BudgetContextProvider from "./contexts/budgetContext";

function App() {
  return (
    <>
      <BudgetContextProvider>
        <NavBar />
        <Home />
      </BudgetContextProvider>
    </>
  );
}

export default App;
