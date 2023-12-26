import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addVideoToHistoryAPI, removeVideoAPI } from '../services/allAPI';



function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const removeVideo = async(id)=>{
    await removeVideoAPI(id)
    setDeleteVideoResponse(true)
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);
    // generate data to history
  const {caption,link} = video
  let today = new Date()
  let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:"2-digit",day:'2-digit',
    hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    let videoHistory = {caption,link,timeStamp}
    // make api call
    await addVideoToHistoryAPI(videoHistory)
  }
  const dragStart = (e,Id)=>{
    console.log("Drag Started... Video ID:"+Id);
    e.dataTransfer.setData("videoId",Id)
  }
    
  

  return (
    <>
      <Card draggable onDragStart={e=>dragStart(e,video?.id)} >
        <Card.Img onClick={handleShow} height={'250px'} variant="top" src={video?.url} />
        <Card.Body className='d-flex justify-content-between align-items-center '>
          <h6>{video?.caption}</h6>
          {insideCategory?null:<button onClick={()=>removeVideo(video?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>}
          
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe className='w-100' width="560" height="315" src={`${video?.link}?si=aQLli3UN-WRwGC5K?rel=0&modestbranding=1&autohide=0&mute=0&showinfo=1&controls=1&autoplay=1`}  title  ={video?.caption} frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard
