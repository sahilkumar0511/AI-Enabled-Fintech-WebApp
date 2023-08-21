import React, { useState } from "react";
import {
  Tabs,
  Tab,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import Table from "./Table";
import AddData from "./AddData";
import AnalyticsView from "./AnalyticsView";
import FetchedResult from "./FetchedResult";
import AdvancedSearch from "./AdvancedSearch";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgb(109, 111, 113)",
  },
  indicator: {
    backgroundColor: "white",
  },
  tabLabel: {
    color: "white",
  },
  advancedSearchButton: {
    backgroundColor: "#8fd163",
    minWidth: "100px",
    maxWidth: "150px",
    color: "grey",
    whiteSpace: "pre-line",
    lineHeight: 1.2,
    margin: "8px 12px",
    "&:hover": {
      backgroundColor: "#8fd163",
    },
  },
  clearButton: {
    backgroundColor: "red",
    margin: "8px",
    color: "white",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  // dialogTitle: {
  //   backgroundColor: "lightgreen",
  //   color: "white",
  // },
  // dialogContent: {
  //   margin: "16px",
  // },
  // advancedSearchTitle: {
  //   color: "white",
  // },
}));

const MyTab = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isAdvancedSearchOpen, setAdvancedSearchOpen] = useState(false);
  const [isSearchViewVisible, setSearchViewVisible] = useState(false);
  const [customerId, setCustomerId] = useState("");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setSearchViewVisible(false);
      setSearchResults([]);
    }
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchViewVisible(true);
      setValue(3);
      setCustomerId(searchQuery);
      setSearchQuery("");
    }
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleOpenDialogAdv = () => {
    setAdvancedSearchOpen(true);
  };

  const handleCloseDialogAdv = () => {
    setAdvancedSearchOpen(false);
  };

  const handleAdvanceSearch = () => {
    setAdvancedSearchOpen(true);
    console.log("Advanced Search button clicked");
  };

  const handleClear = () => {
    setValue(0);
    setSearchViewVisible(false);
    setSearchResults([]);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgb(109, 111, 113)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleTabChange}
          classes={{ root: classes.root, indicator: classes.indicator }}
        >
          <Tab classes={{ root: classes.tabLabel }} label="Home Page" />
          <Tab classes={{ root: classes.tabLabel }} label="Add Data" />
          <Tab classes={{ root: classes.tabLabel }} label="Analytics View" />
          {isSearchViewVisible && <Tab label="Search View" />}
        </Tabs>
        {value !== 3 ? (
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              placeholder="Search Customer Order ID"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              onKeyPress={handleSearch}
              variant="outlined"
              size="small"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            />
            {value !== 3 && (
              <Button
                className={classes.advancedSearchButton}
                // variant="outlined"
                color="primary"
                onClick={handleAdvanceSearch}
              >
                Advanced Search
              </Button>
            )}
          </div>
        ) : (
          <div>
            <TextField
              placeholder="Search Customer ID"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              onKeyPress={handleSearch}
              variant="outlined"
              size="small"
              style={{ backgroundColor: "white", borderRadius: "5px" }}
            />
            <Button
              className={classes.clearButton}
              variant="outlined"
              color="primary"
              onClick={handleClear}
            >
              Clear
            </Button>
          </div>
        )}
      </div>
      <div style={{ backgroundColor: "rgb(109, 111, 113)", padding: "16px" }}>
        {value === 0 && <Table />}
        {value === 1 && <AddData />}
        {value === 2 && <AnalyticsView />}
        {value === 3 && isSearchViewVisible && (
          <div>
            <FetchedResult
              customerId={customerId}
              searchResults={searchResults}
            />
          </div>
        )}
      </div>
      <AdvancedSearch
        open={isAdvancedSearchOpen}
        onCancel={handleCloseDialogAdv}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default MyTab;
