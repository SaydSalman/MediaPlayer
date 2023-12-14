import { useState } from 'react'
import React from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'




function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='d-grid'>
      <Button className='btn btn-info' onClick={handleShow}>
          Add New Category
        </Button>
    </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingCname"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Category Name" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category
