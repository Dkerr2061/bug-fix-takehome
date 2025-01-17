import { useState } from "react";
import { BugProps } from "../types/bugTypes";
import BugForm from "./BugForm";
import BugItem from "./BugItem";
import { Box, Paper } from "@mui/material";

interface Props {
  bugs: BugProps[];
  addBug: (bug: BugProps) => void;
  removeBug: (id: number) => void;
}

const BugList = ({ bugs, addBug, removeBug }: Props) => {
  const displayBug = bugs.map((bug) => {
    return <BugItem key={bug.id} bugs={bug} removeBug={removeBug} />;
  });
  return (
    <div>
      <BugForm addBug={addBug} />
      <Paper elevation={10} sx={{ p: 1, mt: 3, background: "#a6bfbc" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            mt: 3,
            justifyItems: "center",
          }}
        >
          {displayBug}
        </Box>
      </Paper>
    </div>
  );
};

export default BugList;
