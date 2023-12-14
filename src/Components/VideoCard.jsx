import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'



function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card >
        <Card.Img onClick={handleShow} height={'200px'} variant="top" src="https://www.hdwallpapers.in/download/vijay_shine_tom_chacko_pooja_hegde_selvaraghavan_hd_beast-1920x1080.jpg" />
        <Card.Body className='d-flex justify-content-between align-items-center '>
          <Card.Title>Video Title</Card.Title>
          <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
          
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe className='w-100' width="560" height="315" src="https://www.youtube.com/embed/WWr9086eWtY?si=aQLli3UN-WRwGC5K?rel=0&modestbranding=1&autohide=1&mute=0&showinfo=0&controls=0&autoplay=1"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard
