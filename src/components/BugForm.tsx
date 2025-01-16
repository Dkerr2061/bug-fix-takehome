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
} from "@mui/material";

const BugForm = () => {
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
        >
          <TextField
            id="outlined-helperText"
            label="Title"
            placeholder="Quick snapshot of the bug"
            sx={{ mb: 2 }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
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
                value=""
                label="Priority"
                onChange={(e) => console.log(e)}
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
                value=""
                label="Status"
                onChange={(e) => console.log(e)}
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
