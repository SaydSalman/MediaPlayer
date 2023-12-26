// upload a video
import { SERVER_URL } from "./serverURL"
import { commonAPI } from "./commonAPI"

export const uploadNewVideoAPI =async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}
// get all videos

export const getAllVideoAPI =async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}
// view Single video
export const getAVideoAPI = async (id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}
// remove a video
export const removeVideoAPI =async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}
// INSERT video to history

export const addVideoToHistoryAPI =async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}
// get video from hsitory

export const getHistoryAPI =async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
// remove a video from hsitory
export const removeHistoryAPI =async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}
// add category

export const addCategoryAPI = async(category)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,category)
}
export const getAllCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

// remove category api
 export const removeCategoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
 }
//  update category

export const updateCategoryAPI = async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${id}`,categoryDetails)
}