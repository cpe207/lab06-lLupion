// const axios = require("axios");
import axios from "axios";

interface User {
  id: number;
  name: string;
}

/* assign interface/type to the function definition properly */
const getUser = async (userId: number): Promise<string> => {
  try {
    const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = response.data;
    return user.name;
  } catch (error) {
    return "INVALID USER ID";
  }
};

//test case
const run = async () => {
  const input1 = 1;
  const input2 = 100;

  const result1 = await getUser(input1);
  const result2 = await getUser(input2);

  console.log(result1);
  console.log(result2);
};

run();
// module.exports = getUser;
export default getUser;
