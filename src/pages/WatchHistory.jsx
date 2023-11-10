import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteAHistory, getAllHistory } from '../services/allAPI'
import { useEffect } from 'react'

function WatchHistory() {
   const [history, setHistory] =useState([])

  const WatchAllHistory = async()=>{
    const {data} = await getAllHistory()
   // console.log(data);
    setHistory(data)
  }
  console.log(history);
  //function to remove a particular history
  const removeAHistory = async (id)=>{
    await deleteAHistory(id)
    //to get the remainig history
    WatchAllHistory()
  }

  useEffect(()=>{
    WatchAllHistory()
  },[])
  return (
  
 <>
      <div className='container d-flex justify-content-between'>
        <h3 className='mt-5 mb-5'>Watch history</h3>
        <Link  style={{textDecoration:'none', fontSize:'20px'}} to={'/home'} className='d-flex align-items-center'> <i class="fa-solid fa-arrow-right fa-rotate-180 me-2"></i> Back to home</Link>
        </div>
        <table className='table container'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history.length>0?
            history.map((item,index)=>(<tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td><a href={item.embedLink} target='_blank'>{item.embedLink}</a></td>
              <td>{item.timestamp}</td>
              <td><button onClick={()=>{removeAHistory(item?.id)}} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button></td>
            </tr>))
            :
            <p className='fw-bolder fs-5 text-danger m-4'>nothing to display</p>}
          </tbody>
        </table>
 </>
  )
}

export default WatchHistory