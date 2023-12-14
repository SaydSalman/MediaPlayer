import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'350px'}} className='w-100 container'>
      <div className='d-flex justify-content-between mt-5'>
        <div className='d-flex flex-column  '>
        <div className='d-flex text-white'>
        <i  class="fa-solid fa-face-smile fa-3x me-2 "></i>
            <h2 style={{height:'70px'}}><>Media Player</></h2>
        </div>
          <div>
            <p style={{color:'white'}} >Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.  Esse laborum consectetur dolores, <br /> recusandae sunt fuga veritatis ullam temporibus <br /> qui molestiae assumenda quo unde id dignissimos <br /> atque nostrum, ad, neque dicta.</p>
          </div>
        </div>
        <div className='Links d-flex flex-column'>
        <h3 style={{height:'55px'}}>Links</h3>
        <Link style={{textDecoration:'none',color:'white'}} to={"/"} ><a style={{color:'white',textDecoration:'none'}} className="text-decoration-none" >landing Page</a></Link>
        <Link style={{textDecoration:'none',color:'white'}} to={"/home"}><a style={{color:'white',textDecoration:'none'}}  className="text-decoration-none">Home</a></Link>
        <Link style={{textDecoration:'none',color:'white'}} to={"/history"}><a style={{color:'white',textDecoration:'none'}} className="text-decoration-none" >Watch History</a></Link>
        </div>
        <div className='Guides d-flex flex-column'>
          <h3 style={{height:'55px'}}>Guides</h3>
          <a style={{color:'white'}} className="text-decoration-none" href="">React</a>
          <a style={{color:'white'}} className="text-decoration-none" href="">React Bootstrap</a>
          <a style={{color:'white'}} className="text-decoration-none" href="">React Routing</a>
        </div>
        <div className='Contact Us d-flex flex-column classname="text-decoration-none"'>
        <h3 style={{height:'55px'}}>Contact Us</h3>
        <div className='d-flex '>
          <input className='form-control' type="text" placeholder='Enter your Mail' />
          <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="icons text-white d-flex justify-content-between mt-3">
        <i style={{height:'50px'}} class="fa-solid fa-envelope fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-twitter fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-youtube fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-instagram fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-github fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-linkedin fa-2x"></i>
        </div>
        </div>
      </div>
      <p className='text-center text-white'>Copyright @ 2023 Media Player . Built with React</p>
      
    </div>
  )
}

export default Footer
