import React from 'react'

import View from '../componebts/View'
import Category from '../componebts/Category'
import { Link } from 'react-router-dom'
import Add from '../componebts/Add'
import { useState } from 'react'


function Home() {
  const[uploadVideoStatus , setUploadVideoStatus] = useState({})

  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <div className='add-videos'>
        <Add setUploadVideoStatus={setUploadVideoStatus}/>
      </div>
      <Link to={'/watch-history'} style={{textDecoration:'none',fontSize:'30px'}}>Watch History</Link>
    </div>
    <div className='container-fluid w-100 d-flex justify-content-between'>
      <div className='all-videos col-lg-9'>
        <h4 className='mb-5'>All Videos</h4>
        <View uploadVideoStatus={uploadVideoStatus}/>
      </div>
      <div className='category col=lg-3'>
        <Category/>
      </div>
    </div>
    </>
  )
}

export default Home
