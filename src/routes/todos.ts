//built-in modules
//----------------
//3-party modules
import express from "express";
//------------------
//custom modules
import type { Todo } from "../models/todo.js";
//---------
const router = express.Router();
//-------
type RequestBody = { text: string };
type RequestParams = { todoId: string };
//------

let todos: Todo[] = [];

//routes
router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const body = req.body as RequestBody;

  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };

  todos.push(newTodo);

  res.status(201).json({ message: "Added todo", todo: newTodo, todos: todos });
});

router.put("/todo/:todoId", (req, res, next) => {
  const params = req.params as RequestParams;
  const tId = params.todoId;

  const todoIndex = todos.findIndex((todo) => {
    return todo.id === tId;
  });

  const todo = todos[todoIndex];

  if (todo) {
    todos[todoIndex] = { id: todo.id, text: req.body.text };
    return res.status(200).json({ message: "updated todo", todos: todos });
  }

  res.status(404).json({ message: "Couldn't find todo for this id" });
});

router.delete("/todo/:todoId", (req, res, next) => {
  const tid = req.params.todoId;

  todos = todos.filter((todo) => {
    return todo.id !== tid;
  });

  res.status(200).json({ message: "Deleted todo", todos: todos });
});
//---------------

//export
export default router;
//---------
