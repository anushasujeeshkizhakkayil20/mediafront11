import { commonAPI } from "./commonAPI"
import {serverURL} from "./serverURL"

//upload videos

export const uploadAllVideo=async(reqBody)=>{
return await  commonAPI('POST',`${serverURL}/videos`,reqBody)
}

// get all video from json server

export const getAllVideos = async()=>{
  return  await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete a video
export const deleteAVideo = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//API To add data to watch history
export const addToHistory = async(videoDetails)=>{
  return await commonAPI('post' ,`${serverURL}/history`,videoDetails)

}

//api to get all history from json server

export const getAllHistory = async()=>{
  return  await commonAPI('GET',`${serverURL}/history`,"")
}

// api to delete history 

export const deleteAHistory = async(id)=>{
  return  await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}


// api to add category

export const addToCategory = async(body)=>{
  return  await commonAPI('POST',`${serverURL}/category`,body)
}

//api to get Category
export const getAllCategory = async()=>{
  return await commonAPI('GET',`${serverURL}/category`,"")
}

//api to delete category
export const deleteACategory = async(id)=>{
  return  await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}
//api to get a particular video
export const getAVideo = async(id)=>{
 return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}
//api to update category
 export const updateCategory = async(id, body)=>{
 return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}


