import axios from "axios";
const SERVER = import.meta.env.VITE_URL_API;

export default class BooksRepository {

    async getAllBooks() {
        try {
            const response = await axios.get(`${SERVER}/books`)
            return response.data
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async removeBook(id) {
        try {
            console.log(await axios.delete(`${SERVER}/books/${id}`))
            await axios.delete(`${SERVER}/books/${id}`)
        } catch (error) {
            throw Error(`Error: ${error}`)
        }
    }
}