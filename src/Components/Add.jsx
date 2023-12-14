import {React,useState} from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-plus fa-2x"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>PLease fill the Details.</p>
          <FloatingLabel
        controlId="floatingInput"
        label="Upload Video Id"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Upload Video Id" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Upload Video Caption">
        <Form.Control type="password" placeholder="Upload Video Caption" />
      </FloatingLabel>
      <FloatingLabel className='mt-3' controlId="floatingPassword" label="Upload Video Image URL">
        <Form.Control type="password" placeholder="Upload Video Image URL" />
      </FloatingLabel>
      <FloatingLabel className='mt-3' controlId="floatingPassword" label="Upload Video Youtube Link">
        <Form.Control type="password" placeholder="Upload Video Youtube Link" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
