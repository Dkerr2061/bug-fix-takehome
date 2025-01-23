import { BugProps } from "../types/bugTypes";
import { BugForm } from "./BugForm";
import { BugItem } from "./BugItem";
import { Box, Paper } from "@mui/material";
import { FilterSortBar } from "./FilterSortBar";

interface Props {
  bugs: BugProps[];
  addBug: (bug: BugProps) => void;
  removeBug: (id: string) => void;
  updateSearchText: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  sortByDate: (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;
}

const BugList = ({
  bugs,
  addBug,
  removeBug,
  updateSearchText,
  sortByDate,
}: Props) => {
  const displayBug = bugs.map((bug) => {
    return <BugItem key={bug.id} bugs={bug} removeBug={removeBug} />;
  });
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <BugForm addBug={addBug} />
      </Box>

      <Paper
        elevation={10}
        sx={{
          p: 3,
          mt: 3,
          width: "auto",
          display: "flex",
          flexDirection: "column",
          background: "#a6bfbc",
          placeItems: "center",
        }}
      >
        <Box sx={{ mt: 1, mb: 3, width: "100%" }}>
          <FilterSortBar
            updateSearchText={updateSearchText}
            sortByDate={sortByDate}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
            backgroundColor: "#ccc",
            m: 2,
            p: 2,
            borderRadius: "10px",
          }}
        >
          {displayBug}
        </Box>
      </Paper>
    </Box>
  );
};

export { BugList };
