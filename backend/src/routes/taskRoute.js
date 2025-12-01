const express=require("express");
const {getTasks,getById, deleteById}=require("../controller/taskController");

const router=express.Router();

//to get all tasks
router.get("/tasks",getTasks);


//to get task by id
router.get("/tasks/:id",getById);


//to delete task by id
router.delete("/tasks/:id",deleteById)
module.exports=router;