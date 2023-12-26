import {React,useState} from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadNewVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
  const [UploadVideo,setUploadVideo]= useState({
    id:"",caption:'',url:'',link:''
  })
  console.log(UploadVideo);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =  () => setShow(true);
  // generate data to history
  

  const getYoutubeEmbedLink  = (e)=>{
    const {value} =e.target
    if(value.includes("v=")){
      let videoId = value.split("v=")[1].slice(0,11)
      setUploadVideo({...UploadVideo,link:`https://www.youtube.com/embed/${videoId}`})
      
    }else{
      setUploadVideo({...UploadVideo,link:''})
    }
  }
  const handleUpload = async()=>{
    const {id,caption,url,link} = UploadVideo
    if(!id || !caption ||!url || !link){
      alert("please fill the form correctly")
    }else{
      // store the upload video in jsonserver
      const result = await uploadNewVideoAPI(UploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        // success
        handleClose()
        // reset uploadvideo
        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })
        // share result.data to view component
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }
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
        <Form.Control type="text" placeholder="Upload Video Id" onChange={e=>setUploadVideo({...UploadVideo,id:e.target.value})} />
      </FloatingLabel>
          
          <FloatingLabel
        controlId="floatingInput"
        label="Upload Video Caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Upload Video Caption" onChange={e=>setUploadVideo({...UploadVideo,caption:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Upload Video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Upload Video Image URL" onChange={e=>setUploadVideo({...UploadVideo,url:e.target.value})} />
      </FloatingLabel>
          <FloatingLabel
        controlId="floatingInput"
        label="Upload Video Youtube Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Upload Video Youtube Link" onChange={getYoutubeEmbedLink} />
      </FloatingLabel>
      
      
      

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
