import axios from '../utils/config/axios.config'

/**
 * 
 * @param { string } email Email of the user
 * @param { string } pwd Password of the user
 * @returns 
 */
export const login = (email: string, pwd: string) => {
    // Declare Body to POST
    let body = {
        email,
        pwd
    }

    // Send POST request to login endpoint
    // http://localhost:8000/api/auth/login
    return axios.post('/auth/login', body)
}

/**
 * 
 * @param { string } name Name of the user
 * @param { string } email Email of the user
 * @param { string } pwd Password of the user
 * @param { nummber } age Age of the user
 * @returns 
 */
export const register = (name: string, email: string, pwd: string, age: number) => {
    // Declare Body to POST
    let body = {
        name,
        email,
        pwd,
        age
    }

    // Send POST request to register endpoint
    // http://localhost:8000/api/auth/register
    return axios.post('/auth/register', body)
}