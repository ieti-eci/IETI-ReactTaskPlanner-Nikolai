import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";

export default function TaskForm() {
    const [taskName, setTaskName] = useState("");

    const SecondPage = props => {
        const location = useLocation();

        useEffect(() => {
            setTaskName(location.state.name)
        }, [location])
    }

    SecondPage()

    return (
        <div>
            <TopBar />

            <Stack direction="column" justifyContent="center" alignItems="flex-start" maxWidth="xs" sx={{ ml: 10, mt: 4 }}>
                <Typography sx={{  fontSize: 30, fontStyle: "Arial" }}>Name</Typography>
                <Typography sx={{ fontSize: 22, pl: 5 }}>{taskName}</Typography>
                <Typography sx={{ fontSize: 30, fontStyle: "Arial", mt: 3 }}>Description</Typography>
                <Typography align="justify" sx={{ fontSize: 22, pl: 5, mr: 50 }}>...</Typography>
                <Typography sx={{  fontSize: 30, fontStyle: "Arial", mt: 3 }}>Due Date</Typography>
                <Typography align="justify" sx={{ fontSize: 22, pl: 5, mr: 50 }}>...</Typography>
                <Typography sx={{ fontSize: 30, fontStyle: "Arial", mt: 3 }}>Assigned To</Typography>
                <Typography align="justify" sx={{ fontSize: 22, pl: 5, mr: 50 }}>...</Typography>
                <Typography sx={{ fontSize: 30, fontStyle: "Arial", mt: 3 }}>Status</Typography>
                <Typography align="justify" sx={{ fontSize: 22, pl: 5, mr: 50 }}>...</Typography>
            </Stack>

        </div>
    );
}