const BASE_URL = "http://localhost:4000/api/v1";

export const endpoints = {
    LOGIN_API : BASE_URL + "/admin/login",
    LOGOUT_API : BASE_URL + "/admin/logout",
}

export const profile = {
    CREATE_PROFILE_API : BASE_URL + "/admin/createuser",
    GET_PROFILE_DETAILS_API : BASE_URL + "/getuser"
}

export const skill = {
    GET_CODING_SKILL_DETAILS_API : BASE_URL + "/get-skill"
}

export const coding = {
    GET_CODING_SKILL_API : BASE_URL + "/get-coding-profile"
}
export const project = {
    GET_PROJECTS_DETAILS_API : BASE_URL + "/getproject"
}