import {toUpdate, getTestTodo, updateTestTodo } from "../tests/Fixtures";
import { getTodo, updateTodo } from "./todoServices";

describe("TodoServices", () => {
    describe("getTodo", () => {
        it("should return list of Todo", async () => {
            const result = await getTodo();
            expect(result).toEqual(getTestTodo());
        })
    });
    describe("updateTodo", () => {
        it("should return list of Todo", async () => {
            const result = await updateTodo(toUpdate);
            console.log(result);
            expect(result).toEqual(updateTestTodo());
        })
    });
});