import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Grid
} from "@material-ui/core";

export default function DeleteData({ open, onCancel, onDelete }) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Delete Records?</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete these record[s]?</Typography>
      </DialogContent>
      <DialogActions>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="fc7500"
            onClick={onCancel}
            style={{ backgroundColor: "white", color: "black" }}
            fullWidth
          >
            Cancel
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="secondary"
            onClick={onDelete}
            style={{ backgroundColor: "white", color: "black" }}
            fullWidth
          >
            Delete
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
