import { useParams, useNavigate } from "react-router-dom";
import { BugProps } from "../types/bugTypes";
import { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { db } from "../config/firebase";
import { getDoc, doc } from "firebase/firestore";

// interface BugResponse {
//   id: string;
//   title: string;
//   description: string;
//   priority: "" | "Low" | "Medium" | "High";
//   status: "" | "Open" | "In Progress" | "Resolved";
//   dateCreated: string;
// }

interface Props {
  editBug: (id: string, bug: BugProps) => void;
}

const BugDetail = ({ editBug }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bug, setBug] = useState<BugProps | null>(null);
  const [bugToEdit, setBugToEdit] = useState<BugProps>({
    id: "",
    title: "",
    description: "",
    status: "",
    priority: "",
    dateCreated: "",
  });

  // * This useEffect is used to get the corresponding bug from the database.

  useEffect(() => {
    const currentBug = async () => {
      try {
        const docRef = doc(db, "bugs", id as string);
        const res = await getDoc(docRef);
        const data = { ...res.data(), id: res.id } as BugProps;
        setBug(data);
        setBugToEdit({
          id: data.id,
          title: data.title,
          description: data.description,
          status: data.status,
          priority: data.priority,
          dateCreated: data.dateCreated,
        });
      } catch (error) {
        console.log(error);
      }
    };
    currentBug();
  }, [id]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    bug ? editBug(bug.id, { ...bugToEdit }) : "No bug to edit.";
    navigate("/");
  }
  function handleOnChange(
    e:
      | SelectChangeEvent
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setBugToEdit({ ...bugToEdit, [name]: value });
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
            value={bugToEdit.title}
            onChange={handleOnChange}
            placeholder="Short title"
            sx={{ mb: 2 }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            name="description"
            value={bugToEdit.description}
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
                value={bugToEdit.priority}
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
                value={bugToEdit.status}
                name="status"
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

export { BugDetail };
