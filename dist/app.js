// built-in modules
//---------------
//3-party modules
import express from "express";
//----------------------
//custom modules
import todosRoutes from "./routes/todos.js";
//------
//server
const app = express();
//middleware
app.use(express.json());
//--------
//routes
app.use(todosRoutes);
//------------
//-----------------
//port listen
app.listen(5000, () => {
    console.log("server running on port 5000");
});
//-------------
//# sourceMappingURL=app.js.map