import dbcon from "../utils/connection.js";

class TaskModel {
  getTaskList = () => {
    // Example query execution
    dbcon.query("SELECT * FROM users", function (error, results, fields) {
      if (error) {
        console.log("Error executing query: ", error);
        throw error;
      }

      //return results;
      console.log("Query results: ", results);
    });
  };
}

export default TaskModel;
