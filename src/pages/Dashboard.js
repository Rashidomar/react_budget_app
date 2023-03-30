import Stack from 'react-bootstrap/Stack';
import BudgetModal from "../components/modalBudget";
import BudgetCard from "../components/budgetCard";
import { useContext, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { BudgetContext } from '../contexts/budgetContext';
// import verifyService from '../utils/privateRoute';
import useVerifyToken from '../hooks/useVerifyToken';
import useLocalStoral from '../hooks/useLocalsotrage';



const Dashboard = () => { 

    const navigate = useNavigate();
    const {budgets,expenses} = useContext(BudgetContext)
    const { checkTokenState } = useVerifyToken()
    const {setAuth} = useLocalStoral()

    useEffect(() => {
      checkTokenState().then(data=>{
       setAuth(data.auth)
        if (!data.auth) {
          navigate("/login");
          window.location.reload();
      }
    },[])
    
      });

    return ( 
        <>
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
                <BudgetCard key={budget.budgetId} budget={budget} amount={amount}/>
                ) 
             })
            }                  
   
          </div>
        </>
     );
}
 
export default Dashboard;