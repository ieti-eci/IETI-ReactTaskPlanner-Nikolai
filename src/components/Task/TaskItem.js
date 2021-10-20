import Button from "@mui/material/Button"
import { useHistory } from "react-router-dom";

export const TaskItem = ({ taskName, isCompleted }) => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push({
      pathname: "/task-info",
      search: `?task=${taskName}`,
      state: {
        name: `${taskName}`
      }
    })
  }

  return (
    <div>
      <Button variant="outlined" disabled={isCompleted === true} onClick={handleRedirect}>{taskName}</Button>
    </div>
  );
};
