import React from "react";
import useTodoHook from "../stateHooks/useTodoHook";

const HomePage = () => {
    const {todo, setTodo} = useTodoHook();
    return(
        <p>I am in a HomePage</p>
    );
}
export default HomePage;