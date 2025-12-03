const pool = require("../../db");

// Get all tasks
async function getAllTasks() {
  const result = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
  return result.rows;
}

// Get task by ID
async function getTaskById(id) {
  const result = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);
  return result.rows[0];
}

// Create task
async function addTaskService(data) {
  const { title, description, assigneeId, status, dueDate } = data;
  const result = await pool.query(
    "INSERT INTO tasks (title, description, assigneeId, status, dueDate) VALUES ($1,$2,$3,$4,$5) RETURNING *",
    [title, description, assigneeId, status, dueDate]
  );
  return result.rows[0];
}

async function updateByIdService(id, data) {
  const result = await pool.query(
    `UPDATE tasks 
     SET 
      title = COALESCE($1, title),
      description = COALESCE($2, description),
      assigneeId = COALESCE($3, assigneeId),
      status = COALESCE($4, status),
      dueDate = COALESCE($5, dueDate)
     WHERE id = $6
     RETURNING *`,
    [
      data.title ?? null,
      data.description ?? null,
      data.assigneeId ?? data.assigneeid ?? null,
      data.status ?? null,
      data.dueDate ?? data.duedate ?? null,
      id
    ]
  );

  return result.rows[0];
}

// Delete task
async function deleteTaskById(id) {
  return await pool.query("DELETE FROM tasks WHERE id=$1", [id]);
}

module.exports = {
  getAllTasks,
  getTaskById,
  addTaskService,
  updateByIdService,
  deleteTaskById,
};
