import axios from 'axios';
import { TodoApiData } from "../types";
const BASE_URL = 'http://localhost:3001';
const TODO_LIST_EP = BASE_URL + '/api/todoRoutes';

async function getTodo() {
    try{
        const response = await axios.get<TodoApiData>(
            TODO_LIST_EP
        );
        console.log("received data:", response.data);
        return response.data || [];
    } catch (error) {
        throw new Error(
            `Error in 'axiosGetJsonData(${BASE_URL})':`
            );
    }
}
export default getTodo;