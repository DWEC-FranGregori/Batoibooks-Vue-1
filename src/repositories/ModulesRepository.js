import axios from "axios";
const SERVER = import.meta.env.VITE_URL_API;

export default class ModulesRepository {

    async getAllModules() {
        try {
            const response = await axios.get(`${SERVER}/modules`)
            return response.data
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async removeBook(code) {
        try {
            await axios.delete(`${SERVER}/mocules/${id}`)
        } catch (error) {
            throw Error(`Error: ${error}`)
        }
    }
}