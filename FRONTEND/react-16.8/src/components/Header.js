import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <div style={{ padding: 10 }}>
      <Grid container direction="row">
        <Grid item xs={4} md={1}>
          <img
            src="./images/abclogo.svg"
            alt="abc_logo"
            style={{
              width: "200px",
            }}
          />
        </Grid>
        <Grid item xs={4} md={10} container justifyContent="center">
          <img
            src="./images/hrclogo.svg"
            alt="hrc_logo"
            style={{
              width: "150px",
            }}
          />
        </Grid>
      </Grid>
      <Typography
        align="left"
        variant="h4"
        style={{
          fontSize: "1.5rem",
          paddingLeft: 10,
          color: "#db4437",
          paddingBottom: 4,
          paddingTop: 7,
        }}
      >
        <b>Invoice List</b>
      </Typography>
    </div>
  );
}

export default Header;
