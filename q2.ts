// const axios = require("axios");
import axios from "axios";

interface Todo {
  userId: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
}

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    const todoResponse = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = todoResponse.data;

    const userResponse = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
    const user = userResponse.data;

    const result = {
      owner: user.name,
      title: todo.title,
      completed: todo.completed,
    };

    return result;
  } catch (error) {
    return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));


export default getTodo;
