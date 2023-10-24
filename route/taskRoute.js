const express = require('express');
const router = express.Router();

const {
    getAllTask,
    getASingleTask,
    createTask,
    updateTask,
    deleteTask
}=require('../controller/taskController');

router.route('/').get(getAllTask).post(createTask)
router.route('/:taskId').get(getASingleTask).patch(updateTask).delete(deleteTask)
module.exports = router