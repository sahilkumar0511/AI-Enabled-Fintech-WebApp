import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  dialog: {
    "& .MuiDialogTitle-root": {
      backgroundColor: "white",
      color: "black",
    },
    "& .MuiDialogContent-root": {
      backgroundColor: "white",
    },
    "& .MuiDialogActions-root": {
      backgroundColor: "white",
    },
    "& .MuiButton-textPrimary": {
      color: "black",
    },
    "& .MuiButton-textSecondary": {
      color: "black",
    },
  },
}));

export default function EditData({ open, onCancel, onSave, rowData }) {
    const classes = useStyles();
  const [orderCurrency, setOrderCurrency] = React.useState("");
  const [companyCode, setCompanyCode] = React.useState("");
  const [distributionChannel, setDistributionChannel] = React.useState("");
    const [selected, setSelected] = React.useState(false);
  const handleOrderCurrencyChange = (event) => {
    setOrderCurrency(event.target.value);
  };

  const handleCompanyCodeChange = (event) => {
    setCompanyCode(event.target.value);
  };

  const handleDistributionChannelChange = (event) => {
    setDistributionChannel(event.target.value);
  };
//   const handleSelectedChange = (event) => {
//     setSelected(event.target.checked);
  const handleSave = () => {
    const editedRowData = {
      ...rowData,
      ORDER_CURRENCY: orderCurrency,
      COMPANY_CODE: companyCode,
      DISTRIBUTION_CHANNEL: distributionChannel,
    };
    console.log("Edited data")
    console.log(editedRowData)
    onSave(editedRowData);
  };

  return (
    <Dialog open={open} onClose={onCancel} className={classes.dialog}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Order Currency"
              variant="filled"
              value={orderCurrency}
              onChange={handleOrderCurrencyChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Company Code"
              variant="filled"
              value={companyCode}
              onChange={handleCompanyCodeChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Distribution Channel"
              variant="filled"
              value={distributionChannel}
              onChange={handleDistributionChannelChange}
              fullWidth
              margin="normal"
              style={{ backgroundColor: "white", color: "black" }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="fc7500"
            onClick={handleSave}
            style={{ backgroundColor: "white", color: "black" }}
            fullWidth
          >
            Edit
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="secondary"
            onClick={onCancel}
            style={{ backgroundColor: "white", color: "black" }}
            fullWidth
          >
            Cancel
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
