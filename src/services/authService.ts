import axios from '../utils/config/axios.config'

/**
 * @param { string } email Email of the user
 * @param { string } pwd Password of the user
 * @returns 
 */
export const login = (email: string, pwd: string) => {
    // Declare Body to POST
    let body = {
        email,
        password: pwd
    }

    // Send POST request to login endpoint
    // http://localhost:8000/api/auth/login
    return axios.post('/auth/login', body)
}


/**
 * Register Method
 * @param {string} name Name of user 
 * @param {string} email Email of user 
 * @param {string} password Password of user 
 * @param {number} age Age of user 
 * @returns 
 */
 export const register = (name: string, email: string, password:string, age: number) => {

    // Declare Body to POST
    let body = {
        name: name,
        email: email,
        password: password,
        age: age
    }

    // Send POST request to login endpoint
    // http://localhost:8000/api/auth/login
    return axios.post('/auth/register', body)

}
