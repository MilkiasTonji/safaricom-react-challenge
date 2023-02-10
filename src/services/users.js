import axios from "axios"

const api_base_route = 'https://jsonplaceholder.typicode.com'

export const usersList = async () => {
    const result =  await axios.get(`${api_base_route}/users`)
    return result.data
}

export const userById = async (id) => {
    const result =  await axios.get(`${api_base_route}/users/${id}`)
    return result.data
}

export const deleteUser = async (id) => {
    const result =  await axios.delete(`${api_base_route}/users/${id}`)
    return result.data
}

export const updateUser = async (id) => {
    const result =  await axios.put(`${api_base_route}/users/${id}`)
    return result.data
}