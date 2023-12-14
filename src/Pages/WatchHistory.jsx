import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function WatchHistory() {
  return (
    <div className='container mt-5 mb-5'>
      <div className='d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'} style={{textDecoration:'none',color:'white',fontSize:'30px',fontWeight:'bold'}}><i class="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home</Link>
      </div>
      <Table className='mt-5 shadow container' striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th className='text-center'><i class="fa-solid fa-ellipsis "></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Leo Trailer</td>
          <td><a href="https://youtu.be/Po3jStA673E?si=05pemjnciqTw47gM" target='_blank'>https://youtu.be/Po3jStA673E?si=05pemjnciqTw47gM</a></td>
          <td>13/12/2023</td>
          <td className='text-center'><button className='btn '><i class="fa-solid fa-trash text-danger"></i></button></td>
          
        </tr>
        
        
      </tbody>
    </Table>
    </div>
  )
}

export default WatchHistory
