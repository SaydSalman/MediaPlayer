import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div className='container mt-5'>
      <div className="row justify-content-between align-items-center m-5">
        <div className="col-lg-5">
          <h4 style={{height:'80px'}} >Welcome to <span className='text-warning'>Media Player</span></h4>
          <p className='text-white' style={{textAlign:'justify'}}> Media Player App . will allow you to add and remove their uploaded videos , also helps to arrange them in different categories by providing drag and drop functionalities</p>
          <Link to={"/home"} className='btn btn-info mt-5 fw-bolder'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid rounded shadow' src="https://i.pinimg.com/originals/4c/58/27/4c58276469623b3db6c3cadd270863c1.gif" alt="No Image" />
        </div>
      </div>
      <div className="features">
        <h3 style={{height:'70px'}} className='text-center'>Features</h3>
        <div className="cards mt-5 d-flex justify-content-between gap-2">
        <Card style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'250px'}} variant="top" src="https://i.pinimg.com/originals/04/a2/cc/04a2cc1c7d7b194d56c70c6d90bb80cc.gif" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Managing Videos</Card.Title>
        <Card.Text>
          User can Upload,view and remove the videos
        </Card.Text>
        
      </Card.Body>
    </Card>
      
        <Card style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%',height:'250px'}} variant="top" src="https://media3.giphy.com/media/tOuUPGJhZUsrXvd2Zl/giphy.gif" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Categorize Videos</Card.Title>
        <Card.Text>
          User can categorize the videos according to their prefernces using drag and drop features
        </Card.Text>
        
      </Card.Body>
    </Card>
      
        <Card style={{ width: '22rem' }}>
      <Card.Img  style={{width:'100%',height:'250px'}} className='img-fluid' variant="top" src="https://media1.giphy.com/media/emeRVtm8ktZ2JU2At7/giphy.gif" />
      <Card.Body>
        <Card.Title style={{height:'30px'}}>Watch History</Card.Title>
        <Card.Text>
          Users are able to see the History of watched videos
        </Card.Text>
        
      </Card.Body>
    </Card>
      
        </div>
      </div>
      <div className="row mt-5 border rounded p-5">
        <div className="col-lg-5">
        <h3 style={{height:'100px'}} className='text-warning mb-5'>Simple, Fast and Powerfull</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos ratione neque dolorem ipsum error quis excepturi</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos ratione neque dolorem ipsum error quis excepturi</p>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Watch Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eos ratione neque dolorem ipsum error quis excepturi</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
        <iframe className='mt-5' width="688" height="387" src="https://www.youtube.com/embed/3wDiqlTNlfQ?si=GTrtXx_DcCxcsub9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
