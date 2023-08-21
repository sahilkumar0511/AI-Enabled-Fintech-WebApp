import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
export default function AddData() {
  const [formData, setFormData] = React.useState({
    customerOrderId: "",
    salesOrg: "",
    distributionChannel: "",
    customerNo: "",
    companyCode: "",
    orderCurrency: "",
    amountInUsd: "",
    orderCreationDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    axios
      .post(
        "http://localhost:8888/h2h_milestone/Add",
        formData
      )
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error(error);
      });
    // Handle form submission
    // ...
  };

  const handleClear = () => {
    setFormData({
      customerOrderId: "",
      salesOrg: "",
      distributionChannel: "",
      customerNo: "",
      companyCode: "",
      orderCurrency: "",
      amountInUsd: "",
      orderCreationDate: "",
    });
  };

  const inputStyle = {
    backgroundColor: "white",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  };
  const buttonStyle = {
    backgroundColor: "#fc7500",
    color: "white", // customize the text color
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <TextField
          name="customerOrderId"
          label="Customer Order ID"
          variant="filled"
          value={formData.customerOrderId}
          onChange={handleChange}
          style={inputStyle}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          name="salesOrg"
          label="Sales Org"
          variant="filled"
          value={formData.salesOrg}
          onChange={handleChange}
          style={inputStyle}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="distributionChannel"
          label="Distribution Channel"
          variant="filled"
          value={formData.distributionChannel}
          onChange={handleChange}
          style={inputStyle}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          name="customerNo"
          label="Customer Number"
          variant="filled"
          value={formData.customerNo}
          onChange={handleChange}
          style={inputStyle}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          name="companyCode"
          label="Company Code"
          variant="filled"
          value={formData.companyCode}
          onChange={handleChange}
          style={inputStyle}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          name="orderCurrency"
          label="Order Currency"
          variant="filled"
          value={formData.orderCurrency}
          onChange={handleChange}
          style={inputStyle}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          name="amountInUsd"
          label="Amount in USD"
          variant="filled"
          value={formData.amountInUsd}
          onChange={handleChange}
          style={inputStyle}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          name="orderCreationDate"
          label="Order Creation Date"
          type="date"
          variant="filled"
          value={formData.orderCreationDate}
          onChange={handleChange}
          style={inputStyle}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="filled"
          color="fc7500"
          onClick={handleAdd}
          style={buttonStyle}
          fullWidth
        >
          Add
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClear}
          style={{ backgroundColor: "#db4437", color: "white" }}
          fullWidth
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  );
}
