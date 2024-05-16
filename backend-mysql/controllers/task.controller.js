import TaskModel from "../models/task.model.js";

export const getTaskList = async (req, res) => {
  try {
    const taskObject = new TaskModel();

    let taskList = await taskObject.getTaskList();

    if (taskList.length > 0) {
      return res.status(200).send({
        success: true,
        msg: "Withdraw History !!",
        data: taskList,
      });
    } else {
      return res.status(200).send({
        success: false,
        msg: "No Data Found !!",
      });
    }
  } catch (err) {
    return res.status(200).send({
      success: false,
      msg: "Internal error",
      err,
    });
  }
};
