import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Chip,
  Grid
} from "@material-ui/core";

const initialFields = [
  { label: "Customer Order ID", name: "customerOrderId", value: [] },
  { label: "Customer Number", name: "customerNumber", value: [] },
  { label: "Sales Org", name: "salesOrg", value: [] },
];

const MAX_VALUES = 12;

export default function AdvancedSearch({ open, onCancel, onSearch }) {
  const [fields, setFields] = useState(initialFields);

  const getTotalValueCount = () => {
    return fields.reduce((count, field) => count + field.value.length, 0);
  };

  const canAddValue = () => {
    return getTotalValueCount() < MAX_VALUES;
  };

  const handleFieldChange = (name, values) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.name === name ? { ...field, value: values } : field
      )
    );
  };

  const handleAddValue = (name, value) => {
    if (!canAddValue()) {
      return;
    }
    
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.name === name
          ? { ...field, value: [...field.value, value] }
          : field
      )
    );
  };

  const handleDeleteValue = (name, index) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.name === name
          ? { ...field, value: field.value.filter((_, i) => i !== index) }
          : field
      )
    );
  };

  const handleSearch = () => {
    const searchParams = fields.reduce((params, field) => {
      if (field.value.length > 0) {
        params[field.name] = field.value;
      }
      return params;
    }, {});

    onSearch(searchParams);
  };

  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Advanced Search</DialogTitle>
      <DialogContent>
        {fields.map((field) => (
          <div key={field.name}>
            {field.value.map((value, index) => (
              <Chip
                key={index}
                label={value}
                onDelete={() => handleDeleteValue(field.name, index)}
                style={{ margin: "4px" }}
              />
            ))}
            <TextField
              label={field.label}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim() !== "") {
                  handleAddValue(field.name, e.target.value.trim());
                  e.target.value = "";
                }
              }}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} style={{borderColor:"black"}}>
            <Button onClick={onCancel} fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button onClick={handleSearch} fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
