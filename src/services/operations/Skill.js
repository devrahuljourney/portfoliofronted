import { apiConnector } from "../apiConnector";
import {  skill } from "../apis";

const {GET_SKILL_DETAILS_API} = skill;

export const getSkill = async(loading) => {
    let result = null
    try {
        loading(true)
        const response = await apiConnector("GET",GET_SKILL_DETAILS_API);
        if(!response.data.success){
            throw new Error(response.data.message);
        }
        loading(false)
        console.log("response", response)
        result = response?.data?.data
        console.log("result", result)
        return result;
    } catch (error) {
        console.log("GET Skill DETAILS API ERROR............", error)
        
    }
}

