import { useState } from "react";
import { TaskItem } from "../Task/TaskItem";
import TopBar from "../Task/TopBar";
import { Button, Stack, TextField } from "@mui/material";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      isCompleted: true,
      name: "Learn React",
    },
    {
      isCompleted: false,
      name: "Learn Hook",
    },
    {
      isCompleted: false,
      name: "Keep on Keeping on",
    },
  ]);

  const [textValue, setTextValue] = useState("");


  const newTask = (name) => {
    const newTask = {
      isCompleted: false,
      name: name,
    };

    setTasks([...tasks, newTask]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newTask(textValue);
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextValue(value);
  };

  return (
    <main>
      <TopBar />
      <Stack maxWidth="xs" spacing={3} direction="column" alignItems="center" marginTop={3}>
        <form onSubmit={handleSubmit}>
          <TextField size="small" value={textValue} onChange={handleTextChange} type="text" label="Task Name" />
          <Button variant="contained" type="submit">Create Task</Button>
        </form>
        {tasks.map((task, index) => {
          return (
            <TaskItem isCompleted={task.isCompleted} taskName={task.name} />
          )
        })}
      </Stack>
    </main >
  );
}
