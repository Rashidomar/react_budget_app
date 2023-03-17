import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BudgetContext } from '../contexts/budgetContext';
import { Stack } from 'react-bootstrap';


const ViewExpenses = ({budgetId}) => {
    const {expenses, setExpense} = useContext(BudgetContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let allExpenses = expenses.filter((expense)=>{
      return expense.budgetId === budgetId
    })

    const handleDeleteExpense = (id)=>{
      setExpense(
        expenses.filter((expense)=>(expense.expenseId !== id ))
        
    )}

    return (  
        <>
        <Button variant="outline-secondary" onClick={handleShow}>View Expenses</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>View Expenses</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {
                  allExpenses.map((expense)=>(
                    <Stack direction="horizontal" gap={2} >
                      <span className="me-auto">{expense.description}</span>
                      <span className="me-2">{expense.amount}</span>
                      <Button size='sm' onClick={()=>{
                        handleDeleteExpense(expense.expenseId)
                      }} className="m-1" variant='outline-danger'>&times;</Button>
                    </Stack>
                      ))
                    }
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        </>
    );
}
 
export default ViewExpenses;