import { dbcon } from "../utils/connection.js";

const connection = dbcon();

export const getTaskList = async () => {
  // Example query execution
  connection.query("SELECT * FROM users", function (error, results, fields) {
    if (error) {
      console.log("Error executing query: ", error);
      throw error;
    }
    console.log("Query results: ", results);
  });

  return result;
};
