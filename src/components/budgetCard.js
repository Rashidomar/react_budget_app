import { Card, ProgressBar, Button  } from "react-bootstrap";
import ExpenseModal from "./modaLExpense";
import ViewExpenses from "./viewExpenses";
import { BudgetContext } from "../contexts/budgetContext";
import { useContext } from "react";
import {getcurrentFormat, getProgress} from "../utils/helpers";


const BudgetCard = ({budget, amount}) => {

    const {budgets, setBudget} = useContext(BudgetContext)
    
    const handleDeleteBudget = (id)=>{
        setBudget(
          budgets.filter((budget)=>(budget.budgetId !== id ))
          
      )}

    return ( 
        <>
            <Card style={{ width: '600px' }} className="mx-2 my-2 bg-opacity-10 shadow p-1 bg-secondary">
                <Button style={{ width: '60px'}} onClick={()=>{handleDeleteBudget(budget.budgetId)}} className="ms-auto btn-close p-2" variant='outline-danger'></Button>
                <Card.Body>
                    <div className="d-flex">
                        <Card.Title className="me-auto">{budget.name}</Card.Title>
                        <span className="me-2"> {`${getcurrentFormat(amount, budget.currency )}/${getcurrentFormat(budget.maxAmount, budget.currency)}`} </span>
                    </div>
                        <Card.Text className="mb-6">
                            <ProgressBar animated variant={getProgress(amount, budget.maxAmount)} now={amount} max={budget.maxAmount} min={0} />
                        </Card.Text>
                    <div className="d-flex justify-content-end mt-4">
                        <div className="m-2"><ExpenseModal budgetId={budget.budgetId}/></div>
                        <div className="m-2"><ViewExpenses budgetId={budget.budgetId}/></div>
                    </div>
                </Card.Body>
            </Card>    
        </>
     );
}
 
export default BudgetCard;