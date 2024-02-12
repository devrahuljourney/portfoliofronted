import { toast } from "react-toastify";
import { apiConnector, axiosInstance } from "../apiConnector";
import { contact } from "../apis";

const {CONTACT_API} = contact;

// export const sendMessage = async(loading, data) => {
//     let result = null
//     try {
//         loading(true)
//         const response = await apiConnector("POST",CONTACT_API,data);
//         if(!response.data.success){
//             throw new Error(response.data.message);
//         }
//         loading(false)
//         console.log("response coding", response)
//         // result = response?.data?.data
//         // console.log("result coding", result)
//         // return result;
//     } catch (error) {
//         console.log("GET_CODING_SKILL_DETAILS_API............", error)
        
//     }
// }



export const sendMessage = async(loading, data) => {
    try {
        loading(true);
        const result = axiosInstance.post(CONTACT_API, data);
        loading(false)
        console.log("result data", result.data)
        toast.success("Message send successfully")
        return (await result).data;
    } catch (error) {
        console.log("error in sendMessage" , error)
    }
}