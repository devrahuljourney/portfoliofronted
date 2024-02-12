import { apiConnector } from "../apiConnector";
import { coding } from "../apis";

const {GET_CODING_SKILL_API} = coding;

export const getCoding = async(loading) => {
    let result = null
    try {
        loading(true)
        const response = await apiConnector("GET",GET_CODING_SKILL_API);
        if(!response.data.success){
            throw new Error(response.data.message);
        }
        loading(false)
        console.log("response coding", response)
        result = response?.data?.data
        console.log("result coding", result)
        return result;
    } catch (error) {
        console.log("GET_CODING_SKILL_DETAILS_API............", error)
        
    }
}

