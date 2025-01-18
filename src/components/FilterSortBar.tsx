import { TextField } from "@mui/material";

interface Props {
  updateSearchText: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FilterSortBar = ({ updateSearchText }: Props) => {
  return (
    <TextField
      fullWidth
      id="fullWidth"
      placeholder="Search bugs by priority or status"
      type="search"
      onChange={(e) => updateSearchText(e)}
      sx={{ borderRadius: "10px", border: "none", backgroundColor: "#fff" }}
    />
  );
};

export default FilterSortBar;
