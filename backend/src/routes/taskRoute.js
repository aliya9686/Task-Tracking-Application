const express = require("express");
const {
  getTasks,
  getById,
  deleteById,
  addTask,
  updateById,
} = require("../controller/taskController");

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getById);
router.post("/", addTask);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

module.exports = router;
