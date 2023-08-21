import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import GridButtons from "./GridButtons";
import { GridPagination } from "@mui/x-data-grid";
import "./GridButtons.css";

const columns = [
  {
    field: "id",
    headerName: "sl_no",
    width: 120,
    editable: true,
  },
  {
    field: "CUSTOMER_ORDER_ID",
    headerName: "CUSTOMER ORDER ID",
    width: 150,
    editable: true,
  },
  {
    field: "SALES_ORG",
    headerName: "SALES ORG",
    width: 140,
    editable: true,
  },
  {
    field: "DISTRIBUTION_CHANNEL",
    headerName: "DISTRIBUTION CHANNEL",
    width: 190,
    editable: true,
  },
  {
    field: "COMPANY_CODE",
    headerName: "COMPANY CODE",
    width: 160,
    editable: true,
  },
  {
    field: "ORDER_CREATION_DATE",
    headerName: "ORDER CREATING DATE",
    width: 170,
    editable: true,
  },
  {
    field: "OrderAmount",
    headerName: "ORDER_AMOUNT",
    width: 150,
    editable: true,
  },
  {
    field: "ORDER_CURRENCY",
    headerName: "ORDER CURRENCY",
    width: 180,
    editable: true,
  },
  {
    field: "CUSTOMER_NUMBER",
    headerName: "CUSTOMER NUMBER",
    width: 170,
    editable: true,
  },
];

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiDataGrid-root": {
      backgroundColor: "#a9a9a9", // Change the background color here
    },
    "& .MuiDataGrid-row": {
      borderBottom: "1px solid white", // Change the line color here
    },
    "& .MuiDataGrid-cell": {
      color: "white", // Change the text color here
    },
    "& .MuiDataGrid-columnHeader": {
      color: "white", // Change the text color here
    },
    "& .MuiDataGrid-checkboxInput": {
      color: "white", // Change the checkbox color here
    },
    height: 500,
    width: "100%",
    position: "relative",
  },
  dataGrid: {
    flexGrow: 1,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
}));

const baseURL = "http://localhost:8181/h2h_milestone_3/Read";

export default function FetchedResult({ customerId, searchResults }) {
  const classes = useStyles();
  const [post, setPost] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);
  const [filteredData, setFilteredData] = React.useState([]);
  console.log(customerId);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const handleEdit = () => {
    console.log("Edit button clicked");
  };

  const handleDelete = () => {
    console.log("Delete button clicked");
  };

  const handlePredict = () => {
    console.log("Predict button clicked");
  };

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  React.useEffect(() => {
    if (!post) return; // Add a return statement here

    const modifiedData = post.map((row) => ({
      ...row,
      id: row.Sl_no,
    }));

    const filteredResults = modifiedData.filter(
      (result) => result.CUSTOMER_ORDER_ID === Number(customerId)
    );
    setFilteredData(filteredResults);
  }, [post, customerId]); // Include 'post' dependency in the useEffect dependency array

  const CustomFooter = ({ pagination }) => (
    <div className={classes.footer}>
      <div className={classes.buttonContainer}>
        <GridButtons
          onRefresh={handleRefresh}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onPredict={handlePredict}
        />
      </div>
      <div style={{ flexGrow: 1 }}></div>
      {pagination}
    </div>
  );

  if (!post) return null; // Return null if 'post' is null

  return (
    <div className={classes.root} style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={filteredData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Footer: (props) => (
            <CustomFooter {...props} pagination={<GridPagination />} />
          ),
        }}
        key={refresh}
      />
    </div>
  );
}
