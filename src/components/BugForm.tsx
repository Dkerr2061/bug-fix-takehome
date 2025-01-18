import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { BugProps } from "../types/bugTypes";

interface BugFormState {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
}
interface BugFormProps {
  addBug: (bug: BugProps) => void;
}

const BugForm = ({ addBug }: BugFormProps) => {
  const [newBug, setNewBug] = useState<BugFormState>({
    id: uuidv4(),
    title: "",
    description: "",
    priority: "",
    status: "",
  });

  function handleOnChange(
    e:
      | SelectChangeEvent
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setNewBug({ ...newBug, [name]: value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addBug(newBug as unknown as BugProps);
    setNewBug({
      id: uuidv4(),
      title: "",
      description: "",
      priority: "",
      status: "",
    });
  }

  return (
    <Container>
      <Paper
        elevation={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 800,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{ textAlign: "center", fontFamily: "sans-serif", pt: 5, mb: 3 }}
        >
          Report Bug:
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", p: 2, flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-helperText"
            label="Title"
            name="title"
            required
            value={newBug.title}
            onChange={handleOnChange}
            placeholder="Short title"
            sx={{ mb: 2 }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            name="description"
            required
            value={newBug.description}
            onChange={handleOnChange}
            multiline
            rows={4}
            placeholder="Please discribe what the bug that was found..."
            sx={{ mb: 2 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="priority"
                required
                value={newBug.priority}
                label="Priority"
                onChange={handleOnChange}
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="status"
                required
                value={newBug.status}
                label="Status"
                onChange={handleOnChange}
              >
                <MenuItem value="Open">Open</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Resolved">Resolved</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" type="submit" sx={{ m: 2 }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default BugForm;
