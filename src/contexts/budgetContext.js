import { createContext, useState, useEffect } from "react";


export const BudgetContext = createContext()

const BudgetContextProvider = ({children})=>{
    const [budgets, setBudget] = useState(() => {
        const savedBugets = localStorage.getItem("Budgets");
        if (savedBugets) {
          return JSON.parse(savedBugets);
        } else {
          return [];
        }
         });

    const [expenses, setExpense] = useState(()=>{
        const savedExpenses = localStorage.getItem("Expenses");
        if (savedExpenses) {
          return JSON.parse(savedExpenses);
        } else {
          return [];
        }
    })
        useEffect(()=>{
          localStorage.setItem('Budgets', JSON.stringify(budgets))
          localStorage.setItem('Expenses', JSON.stringify(expenses))
        },[budgets,expenses])

    
    return (
        <BudgetContext.Provider value={{budgets, setBudget, expenses, setExpense}}>
          {children}
        </BudgetContext.Provider>
      );
}

export default BudgetContextProvider