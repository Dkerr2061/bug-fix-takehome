import { BugProps } from "../types/bugTypes";
import { ExpandMore } from "./ExpandMore";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { formatDate } from "../utils/formatDate";
import { Chip } from "@mui/material";

interface Props {
  bugs: BugProps;
  removeBug: (id: number) => void;
}

const BugItem = ({ bugs, removeBug }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function handleDelete() {
    removeBug(bugs.id);
  }
  const formattedDate = formatDate(bugs.dateCreated);
  const cardStyle = {
    width: 400,
    minHeight: 200,
    height: expanded ? "auto" : 200,
    transition: "height 0.3s ease-in-out",
    overflow: "hidden",
  };
  const priorityChipColor =
    bugs.priority === "High"
      ? "error"
      : bugs.priority === "Medium"
      ? "warning"
      : bugs.priority === "Low"
      ? "success"
      : "default";
  return (
    <Card sx={cardStyle}>
      <CardHeader
        title={
          <Typography
            component={"h1"}
            variant="h5"
            sx={{ fontFamily: "sans-serif", fontWeight: "500" }}
          >
            {bugs.title}
          </Typography>
        }
        subheader={`Created on: ${formattedDate}`}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Chip
          variant="filled"
          size="medium"
          color="primary"
          label={bugs.status}
          sx={{ width: "50%", fontSize: "1rem" }}
        />

        <Chip
          variant="filled"
          size="medium"
          color={priorityChipColor}
          label={bugs.priority}
          sx={{ width: "25%", fontSize: "1rem" }}
        />
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Description:</Typography>
          <Typography sx={{ marginBottom: 2 }}>{bugs.description}</Typography>
        </CardContent>
        <CardContent>
          <Chip
            label="Edit"
            onClick={handleDelete}
            variant="filled"
            color="primary"
            icon={<ModeEditOutlineSharpIcon />}
            sx={{ m: 2, width: "30%", fontSize: "1rem" }}
          />
          <Chip
            label="Delete"
            onClick={handleDelete}
            icon={<DeleteForeverSharpIcon />}
            variant="filled"
            color="error"
            sx={{ m: 2, width: "30%", fontSize: "1rem" }}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BugItem;
