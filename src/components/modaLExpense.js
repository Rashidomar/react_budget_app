import React, { useState, useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { BudgetContext } from '../contexts/budgetContext';
import { v4 as uuid} from 'uuid';


const ExpenseModal = ({budgetId}) => {
    const {expenses, setExpense} = useContext( BudgetContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const amountRef = useRef()
    const descriptionRef = useRef()
    const handleExpense = (e)=>{
      e.preventDefault()
      const amount = parseInt(amountRef.current.value)
      const description = descriptionRef.current.value
      const id = uuid()
      setExpense([...expenses, {expenseId:id,description:description, amount:amount, budgetId:budgetId}])
      handleClose()

    }

    return ( 
        <>
        <Button variant="outline-primary" onClick={handleShow}>Add Expenses</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" ref={amountRef} placeholder="Enter Amount" autoFocus required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" ref={descriptionRef} placeholder="Enter your description" autoFocus required />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleExpense}>
                  Add Expense
                </Button>
              </Modal.Footer>
            </Modal>
        </>
     ); 
}
 
export default ExpenseModal;