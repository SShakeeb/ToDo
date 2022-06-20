import { atom } from "recoil";

export const todoState = atom({
    key: 'todoState', // unique ID (with respect to other atoms/selectors)
    default: 'Pending', // default value (aka initial value)
});