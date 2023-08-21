import React from "react";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import GridButtons from "./GridButtons";
import { GridPagination } from "@mui/x-data-grid";
import EditData from "./EditData";
import "./GridButtons.css";
import DeleteData from "./DeleteData";
const queryString = require("query-string");
const columns = [
  {
    field: "id",
    headerName: "SL No",
    width: 120,
    editable: true,
    wrap: true,
  },
  {
    field: "CUSTOMER_ORDER_ID",
    headerName: "CUSTOMER ORDER ID",
    width: 240,
    editable: true,
    wrap: true,
  },
  {
    field: "SALES_ORG",
    headerName: "SALES ORG",
    width: 160,
    editable: true,
    wrap: true,
  },
  {
    field: "DISTRIBUTION_CHANNEL",
    headerName: "DISTRIBUTION CHANNEL",
    width: 240,
    editable: true,
    wrap: true,
  },
  {
    field: "COMPANY_CODE",
    headerName: "COMPANY CODE",
    width: 200,
    editable: true,
    wrap: true,
  },
  {
    field: "ORDER_CREATION_DATE",
    headerName: "ORDER CREATING DATE",
    width: 250,
    editable: true,
    wrap: true,
  },
  {
    field: "ORDER_CURRENCY",
    headerName: "ORDER CURRENCY",
    width: 220,
    editable: true,
    wrap: true,
  },
  {
    field: "CUSTOMER_NUMBER",
    headerName: "CUSTOMER NUMBER",
    width: 230,
    editable: true,
    wrap: true,
  },
  {
    field: "AMOUNT_IN_USD",
    headerName: "AMOUNT IN USD",
    width: 190,
    editable: true,
    wrap: true,
  },
  {
    field: "ORDER_AMOUNT",
    headerName: "ORDER_AMOUNT",
    width: 200,
    editable: true,
    wrap: true,
  },
];

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
    position: "relative",
    "& .MuiDataGrid-root": {
      backgroundColor: "rgb(109, 111, 113)",
      border: "rgb(109, 111, 113)", // Change the background color here
    },
    "& .MuiDataGrid-row": {
      borderBottom: "1px solid white", // Change the line color here
    },
    "& .MuiDataGrid-cell": {
      color: "white",
      whiteSpace: "pre-wrap", // Change the text color here
    },
    "& .MuiDataGrid-columnHeader": {
      color: "white", // Change the text color here
      whiteSpace: "pre-wrap",
    },
    "& .MuiDataGrid-checkboxInput": {
      color: "white", // Change the checkbox color here
    },
    "& .MuiTablePagination-root .MuiTablePagination-caption, & .MuiTablePagination-root .MuiTablePagination-select":
      {
        color: "white", // Change the text color of the "Rows per Page" and page number text here
      },
    "& .MuiTablePagination-root .MuiSvgIcon-root": {
      fill: "white", // Change the color of the arrows here
    },
    "& .MuiTablePagination-root .Mui-disabled .MuiSvgIcon-root": {
      fill: "rgba(255, 255, 255, 0.3)", // Change the disabled arrow color here
    },
  },
  dataGrid:{
    flexGrow: 1,
  },
  footer:{
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  }
}));



const baseURL = "http://localhost:8888/h2h_milestone/Read";

export default function Table() {
  const classes = useStyles();

  const [post1, setPost1] = React.useState(null);
  const [pageSize, setPageSize] = React.useState(8);
  const [refresh, setRefresh] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [editedRowData, setEditedRowData] = React.useState(null);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const handleRefresh = () => {
    // Perform the refresh logic here
    setRefresh(!refresh);
  };
// const handleRefresh = () => {
//   axios
//     .get(baseURL)
//     .then((response) => {
//       setPost1(response.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// };

  // const handleEdit = (rowData) => {
  //   console.log(rowData)
  //   setEditedRowData(rowData);
  //   setEditOpen(true);
  //   // Handle the edit button click here
  //   console.log("Edit button clicked");
  // };

  const handleEdit = () => {
    if (selectedRows.length === 1) {
      const selectedRowId = selectedRows[0];
      const selectedRowData = modifiedData.find(
        (row) => row.id === selectedRowId
      );
      console.log("Selected row")
      console.log(selectedRowData);
      setEditedRowData(selectedRowData);
      setEditOpen(true);
      console.log("Edit button clicked");
    }
  };

  const handleEditCancel = () =>{
    setEditOpen(false);
  }

  const handleEditSave = (rowData) => {
    console.log("Saved data")
    console.log(rowData)
    axios
      .post("/h2h_milestone_3/Edit",rowData)
      .then((response) => {
        // Handle the success response
        console.log("Data updated successfully");
        // You can perform any additional actions, such as refreshing the table
      })
      .catch((error) => {
        // Handle the error response
        console.error("Error updating data:", error);
        // You can display an error message or handle the error in any other way
      });
    setEditOpen(false);
  };

  const handleDelete = () => {
    setDeleteOpen(true);
    // Handle the delete button click here
    console.log("Delete button clicked");
  };

  // const handleDeleteConfirm = () => {
  //    const updatedData = post1.filter((row) => !selectedRows.includes(row.id));
  //    console.log(updatedData)
  //    axios
  //      .get("http://localhost:8181/h2h_milestone_3/Delete", selectedRows)
  //      .then((response) => {
  //        console.log("Data deleted successfully");
  //        setPost1(updatedData);
  //        setDeleteOpen(false);
  //      })
  //      .catch((error) => {
  //        console.error("Error deleting data:", error);
  //        // Handle the error in an appropriate way
  //      });
  // };

const handleDeleteConfirm = () => {
  if (selectedRows.length === 1) {
    const selectedRowId = selectedRows[0];
    const selectedRowData = modifiedData.find(
      (row) => row.id === selectedRowId
    );

    axios
      .delete(
        `http://localhost:8888/h2h_milestone/Delete?Sl_no=${selectedRowData.id}`
      )
      .then((response) => {
        console.log("Data deleted successfully");
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }
};

  // Function to handle delete cancel
  const handleDeleteCancel = () => {
    setDeleteOpen(false);
  };
  const handlePredict = () => {
    // Handle the predict button click here
    console.log("Predict button clicked");
  };

  const handleSelectionModelChange = (selectionModel) => {
    setSelectedRows(selectionModel);
  };

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost1(response.data);
    });
  }, []);

  if (!post1) return null;

  const modifiedData = post1.map((row) => ({
    ...row,
    id: row.Sl_no,
  }));

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

  return (
    <div className={classes.root} style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={modifiedData}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[8, 10, 20, 50, 100]}
        // pagination
        // {...modifiedData}
        checkboxSelection
        disableSelectionOnClick
        selectionModel={selectedRows}
        onSelectionModelChange={setSelectedRows}
        components={{
          Footer: (props) => (
            <CustomFooter {...props} pagination={<GridPagination />} />
          ),
        }}
        key={refresh}
      />
      <EditData
        open={editOpen}
        onCancel={handleEditCancel}
        onSave={handleEditSave}
        rowData={editedRowData}
      />
      <DeleteData
        open={deleteOpen}
        rowData={editedRowData}
        onCancel={() => setDeleteOpen(false)}
        onDelete={handleDeleteConfirm}
      />
    </div>
  );
}

// function CustomHeader({ columns }) {
//   return <div style={{ whiteSpace: "pre-wrap" }}>{columns.headerName}</div>;
// }

function CustomCell({ value }) {
  return <div style={{ whiteSpace: "pre-wrap" }}>{value}</div>;
}
