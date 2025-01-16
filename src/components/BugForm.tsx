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

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewBug((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setNewBug((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
            value={newBug.title}
            onChange={handleTextChange}
            placeholder="Quick snapshot of the bug"
            sx={{ mb: 2 }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            name="description"
            value={newBug.description}
            onChange={handleTextChange}
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
                value={newBug.priority}
                label="Priority"
                onChange={handleSelectChange}
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
                value={newBug.status}
                name="status"
                label="Status"
                onChange={handleSelectChange}
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
