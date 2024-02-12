import { apiConnector } from "../apiConnector";
import { project } from "../apis";

const {GET_PROJECTS_DETAILS_API} = project;

export const getProject = async(loading) => {
    let result = null
    try {
        loading(true)
        const response = await apiConnector("GET",GET_PROJECTS_DETAILS_API);
        if(!response.data.success){
            throw new Error(response.data.message);
        }
        loading(false)
        console.log("response", response)
        result = response?.data?.projects
        console.log("result", result)
        return result;
    } catch (error) {
        console.log("GET PROFILE DETAILS API ERROR............", error)
        
    }
}

