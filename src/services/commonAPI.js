import axios from "axios"


export const commonAPI = async (httpMethod,url,reqBody) =>{
    let reqConfig = {
        method:httpMethod,
        url,
        header:{
            "Content-Type":'application/json'
        },
        data:reqBody
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).then((err=>{
        return err
    }))
}