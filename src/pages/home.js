import Stack from 'react-bootstrap/Stack';
import { Container } from "react-bootstrap";
import BudgetModal from "../components/modalBudget";
import BudgetCard from "../components/budgetCard";
import { useContext } from "react";
import { BudgetContext } from '../contexts/budgetContext';

const Home = () => { 
const {budgets} = useContext(BudgetContext)
const {expenses} = useContext(BudgetContext)



    return ( 
        <>
          <Container className="mt-4">
          <Stack direction="horizontal" gap={2} >
            <h1 className="me-auto">Your Budgets</h1>
            <span className="me-2"><BudgetModal /></span>
          </Stack>
          <div className="d-flex flex-wrap">
            {budgets && budgets.map((budget)=>{
              const allBudgetExpenses = expenses.filter((expense)=>(
                expense.budgetId === budget.budgetId
              ))
              const amount = allBudgetExpenses.reduce((total, expense)=>(total + expense.amount), 0)
              return (
                <BudgetCard budget={budget} amount={amount}/>
                ) 
             })
            }                  
   
          </div>
        </Container>
        </>
     );
}
 
export default Home;