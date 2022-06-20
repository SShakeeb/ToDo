import { useRecoilState } from "recoil";
import { todoState } from "../atoms";

const useTodoHook = () => {
    const [todo, setTodo] = useRecoilState(todoState);
    return {todo, setTodo}  
}

export default useTodoHook;