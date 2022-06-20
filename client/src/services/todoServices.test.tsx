import { TodoList, getTestTodo } from "../tests/Fixtures";
import getTodo from "./todoServices";

describe("TodoServices", () => {
    describe("getTodo", () => {
        it("should return list of Todo", async () => {
            const result = await getTodo();
            expect(result).toEqual(getTestTodo());
        })
    });
});