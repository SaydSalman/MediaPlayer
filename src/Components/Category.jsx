import { useEffect, useState } from 'react'
import React from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row,Collapse } from 'react-bootstrap'
import { addCategoryAPI, getAVideoAPI, getAllCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';




function Category({dropResponse}) {
  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName]= useState("");
  const [allCategories,setAllCategories] = useState([])
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    getAllCategories()
  },[dropResponse])
  const getAllCategories = async()=>{
    const {data} = await getAllCategoryAPI()
    setAllCategories(data)
  }
  const handleAdd = async ()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName,allVideos:[]})
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getAllCategories()
      }else{
        alert(result.message)
      }

    }else{
      alert('Please enter category name')
    }
  }
  const removeCategory = async(id)=>{
    await removeCategoryAPI(id)
    getAllCategories()
  }
  const dragOver = (e)=>{
    console.log("Video Card dragging over the category");
    e.preventDefault()
  }
  const videoDragStarted = (e,videoId,categoryId)=>{
    let dataShare = {videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }
  const videoDrop = async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log("Video id:"+videoId+" dropped !!!, Inside the category:"+categoryId);
    const {data} = await getAVideoAPI(videoId)
    const selectedCategory = allCategories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    getAllCategories()
  }
  console.log(allCategories);
  return (
    <>
    <div className='d-grid'>
      <Button className='btn btn-info' onClick={handleShow}>
          Add New Category
        </Button>
    </div>
    {
      allCategories?.length>0?allCategories.map(category=>(
        <div className="border rounded p-3 mt-2" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
          <div onClick={() => setOpen(!open)} className="d-flex justify-content-between align-items-center">
            <h6>{category?.categoryName}</h6>
            <button onClick={()=>removeCategory(category?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </div>
          <Collapse in={open}>
            <Row>
              {
                category?.allVideos?.length>0?category?.allVideos.map(card=>(
                  <Col draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)} sm={12} className="mb-2">
                    <VideoCard video={card} insideCategory={true}/>
                  </Col>
                )):null
              }
            </Row>
          </Collapse>
        </div>
      )):<p className=' fw-bolder text-warning mt-2'>No Categories are added yet!!!</p>
    }

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
        <Form.Control type="text" placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category
