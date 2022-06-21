import axios from 'axios';
import { TodoApiData, Todo } from "../types";
const BASE_URL = 'http://localhost:3001';
const TODO_LIST_EP = BASE_URL + '/api/todoRoutes';

export async function getTodo() {
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

export async function updateTodo(todo: Todo) {
    try{
        const response = await axios.patch<Todo>(
            TODO_LIST_EP + '/'+todo.id, {
                "status": todo.status
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log("received data:", response.data);
        return response.data || null;
    } catch (error) {
        throw new Error(
            `Error in 'axiosUpdateJsonData(${TODO_LIST_EP})':`
        )
    }
}
