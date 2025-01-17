import { BugProps } from "../types/bugTypes";
import BugForm from "./BugForm";
import BugItem from "./BugItem";
import { Box, Paper } from "@mui/material";

interface Props {
  bugs: BugProps[];
  addBug: (bug: BugProps) => void;
  removeBug: (id: string) => void;
}

const BugList = ({ bugs, addBug, removeBug }: Props) => {
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
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
          background: "#a6bfbc",
          placeItems: "center",
        }}
      >
        {displayBug}
      </Paper>
    </Box>
  );
};

export default BugList;
