// * Created this component to clean up the BugItem component

import { styled } from "@mui/material/styles";
import { Typography, TypographyProps } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends TypographyProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return (
    <Typography
      variant="body1"
      sx={{
        cursor: "pointer",
        textDecoration: "underline",
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
      {...other}
    >
      Read Description
      <ExpandMoreIcon
        sx={{
          transform: expand ? "rotate(180deg)" : "rotate(0deg)",
          transition: (theme) =>
            theme.transitions.create("transform", {
              duration: theme.transitions.duration.shortest,
            }),
        }}
      />
    </Typography>
  );
})(({ theme }) => ({
  marginLeft: "auto",
  marginRight: theme.spacing(1),
}));

export { ExpandMore };
