import React from "react";
import {Button} from "@material-ui/core";
import { createTheme, ThemeProvider, Box } from "@material-ui/core";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8800", // Set your custom primary color
    },
  },
});

const GridButtons = ({ onRefresh, onEdit, onDelete, onPredict }) => {
  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  const handlePredict = () => {
    if (onPredict) {
      onPredict();
    }
  };

  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          onClick={handleRefresh}
          color="primary"
          sx={{ color: "white" }}
          
        >
          Refresh Data
        </Button>
        <Button
          variant="contained"
          onClick={handleEdit}
          color="primary"
          sx={{ color: "white" }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          onClick={handleDelete}
          color="primary"
          sx={{ color: "white" }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          onClick={handlePredict}
          color="primary"
          sx={{ color: "white" }}
        >
          Predict
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default GridButtons;
