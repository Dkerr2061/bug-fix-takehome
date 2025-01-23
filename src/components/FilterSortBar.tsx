import { Box, MenuItem, TextField } from "@mui/material";

interface Props {
  updateSearchText: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  sortByDate: (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;
}

const FilterSortBar = ({ updateSearchText, sortByDate }: Props) => {
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
          onChange={(e) => sortByDate(e)}
          placeholder="Sort by Date"
          sx={{ backgroundColor: "#fff", border: "none", borderRadius: "10px" }}
        >
          <MenuItem value="Select" disabled>
            Sort by Date
          </MenuItem>
          <MenuItem value="Newest">Newest</MenuItem>
          <MenuItem value="Oldest">Oldest</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
};

export { FilterSortBar };
