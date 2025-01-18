import { Box, MenuItem, TextField } from "@mui/material";
import { BugProps } from "../types/bugTypes";

interface Props {
  updateSearchText: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  bugs: BugProps[];
}

const FilterSortBar = ({ updateSearchText, bugs }: Props) => {
  console.log(bugs);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "auto",
      }}
    >
      <Box sx={{ width: "85%" }}>
        <TextField
          fullWidth
          id="fullWidth"
          placeholder="Search bugs by priority or status"
          type="search"
          onChange={(e) => updateSearchText(e)}
          sx={{
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#fff",
          }}
        />
      </Box>
      <Box sx={{ width: "10%" }}>
        <TextField
          variant="outlined"
          select
          defaultValue="Select"
          placeholder="Sort by Date"
          sx={{ backgroundColor: "#fff", border: "none", borderRadius: "10px" }}
        >
          <MenuItem value="Select">Sort by Date</MenuItem>
          <MenuItem value="Newest">Newest</MenuItem>
          <MenuItem value="Oldest">Oldest</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
};

export default FilterSortBar;
