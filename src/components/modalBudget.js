import React, { useState, useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { BudgetContext } from '../contexts/budgetContext';
import { v4 as uuid} from 'uuid';

const BudgetModal = () => {
    const {budgets, setBudget} = useContext(BudgetContext)
    const nameRef = useRef()
    const amountRef = useRef()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleBudget = (e) => {
      e.preventDefault()
      const name =  nameRef.current.value
      const amount = parseInt(amountRef.current.value) 
      const id = uuid()
      setBudget([...budgets, {budgetId:id, name:name, maxAmount:amount}])
      handleClose()
    };

    return ( 
        <>
        <Button variant="outline-primary" onClick={handleShow}>Add Budget</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Budget</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} placeholder="Enter the name of your budget" required autoFocus />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Max Amount</Form.Label>
                    <Form.Control type="number" ref={amountRef} placeholder="Enter the amount of your budget" min={0} required autoFocus />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleBudget}>Add Budget</Button>
              </Modal.Footer>
            </Modal>
        </>
     ); 
}
 
export default BudgetModal;