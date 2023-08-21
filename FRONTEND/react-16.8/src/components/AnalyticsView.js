// import React , {useState, useEffect} from "react";
// import { Typography, TextField, Button, Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import axios from "axios";

// const useStyles = makeStyles(() => ({
//   formContainer: {
//     border: "2px solid white",
//     padding: "20px",
//     marginTop: "20px",
//     marginBottom: "20px",
//     borderRadius: "5px"
//   },
//   buttonRow: {
//     display: "flex",
//     justifyContent: "flex-end",
//   },
// }));

// const Form = ({onFormSubmit}) => {
//   const classes = useStyles();
//   const [distributionChannel, setDistributionChannel] = useState("");
//   const [customerNumber, setCustomerNumber] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       distributionChannel,
//       customerNumber,
//     };
//     onFormSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container spacing={2} className={classes.formContainer}>
//         <Grid item xs={12} sm={12} alignItems="center">
//           <TextField
//             name="distributionChannel"
//             label="Distribution Channel"
//             variant="filled"
//             value={distributionChannel}
//             onChange={(e) => setDistributionChannel(e.target.value)}
//             style={{
//               color: "black",
//               backgroundColor: "white",
//               borderTopLeftRadius: "5px",
//               borderTopRightRadius: "5px",
//             }}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={12} alignItems="center">
//           <TextField
//             name="customernumber"
//             label="Customer Number"
//             variant="filled"
//             value={customerNumber}
//             onChange={(e) => setCustomerNumber(e.target.value)}
//             style={{
//               color: "black",
//               backgroundColor: "white",
//               borderTopLeftRadius: "5px",
//               borderTopRightRadius: "5px",
//             }}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={12}>
//           <Button
//             type="submit"
//             variant="outlined"
//             //   color="secondary"
//             //   onClick={handleClear}
//             style={{
//               color: "white",
//               backgroundColor: "rgb(109, 111, 113)",
//               borderColor: "white",
//             }}
//             fullWidth
//           >
//             View
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// };

// const BarGraph = ({ data }) => {
//   const chartOptions = {
//     chart: {
//       type: "column",
//     },
//     title: {
//       text: "Distribution Channel vs Customer Number",
//     },
//     xAxis: {
//       categories: data.map(item => item.distributionChannel),
//     },
//     yAxis: {
//       title: {
//         text: "Count",
//       },
//     },
//     series: [
//       {
//         name: "Customer Number",
//         data: data.map(item => item.customerNumber),
//       },
//     ],
//   };

//   return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
// };

// const PieChart = ({ data }) => {
//   const chartOptions = {
//     chart: {
//       type: "pie",
//     },
//     title: {
//       text: "Distribution Channel vs Customer Number",
//     },
//     series: [
//       {
//         name: "Count",
//         data: data.map((item) => ({
//           name: item.DISTRIBUTION_CHANNEL,
//           y: item.CUSTOMER_NUMBER
//         })),
//       },
//     ],
//   };

//   return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
// };

// const AnalyticsView = () => {
  
//   const [postData, setPostData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   const handleFormSubmit = (formData) => {
//     // Filter the data based on the entered distribution channel or customer number
//     const filtered = postData.filter((item) => {
//       return (
//         item.DISTRIBUTION_CHANNEL === formData.distributionChannel ||
//         item.CUSTOMER_NUMBER === formData.customerNumber.toString
//       );
//     });

//     setFilteredData(filtered);
//   };

//   useEffect(() => {
//     // Fetch data from the API and update the postData state
//     const baseURL = "http://localhost:8181/h2h_milestone_3/Read";
//     axios.get(baseURL).then((response) => {
//       setPostData(response.data);
//     });
//   }, []);

  
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={4}>
//         <Form onFormSubmit={handleFormSubmit}/>
//       </Grid>
//       <Grid item xs={4}>
//         <Typography variant="h6">Bar Graph</Typography>
//         <BarGraph data={filteredData} />
//         {/* Include your bar graph component here */}
//       </Grid>
//       <Grid item xs={4}>
//         <Typography variant="h6">Pie Chart</Typography>
//         <PieChart data={filteredData} />
//         {/* Include your pie chart component here */}
//       </Grid>
//     </Grid>
//   );
// };

// export default AnalyticsView;
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const useStyles = makeStyles(() => ({
  formContainer: {
    border: "2px solid white",
    padding: "20px",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "5px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

const Form = ({ onFormSubmit }) => {
  const classes = useStyles();
  const [DISTRIBUTION_CHANNEL, setDistributionChannel] = useState("");
  const [CUSTOMER_NUMBER, setCustomerNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      DISTRIBUTION_CHANNEL,
      CUSTOMER_NUMBER,
    };
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} className={classes.formContainer}>
        <Grid item xs={12} sm={12} alignItems="center">
          <TextField
            name="distributionChannel"
            label="Distribution Channel"
            variant="filled"
            value={DISTRIBUTION_CHANNEL}
            onChange={(e) => setDistributionChannel(e.target.value)}
            style={{
              color: "black",
              backgroundColor: "white",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} alignItems="center">
          <TextField
            name="customerNumber"
            label="Customer Number"
            variant="filled"
            value={CUSTOMER_NUMBER}
            onChange={(e) => setCustomerNumber(e.target.value)}
            style={{
              color: "black",
              backgroundColor: "white",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            type="submit"
            variant="outlined"
            style={{
              color: "white",
              backgroundColor: "rgb(109, 111, 113)",
              borderColor: "white",
            }}
            fullWidth
          >
            View
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const BarGraph = ({ data }) => {
  const chartOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: "Distribution Channel vs Customer Number",
    },
    xAxis: {
      categories: data.map((item) => item.DISTRIBUTION_CHANNEL),
    },
    yAxis: {
      title: {
        text: "Count",
      },
    },
    series: [
      {
        name: "Customer Number",
        data: data.map((item) => item.CUSTOMER_NUMBER),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

const PieChart = ({ data }) => {
  const chartOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Distribution Channel vs Customer Number",
    },
    series: [
      {
        name: "Count",
        data: data.map((item) => ({
          name: item.DISTRIBUTION_CHANNEL,
          y: item.CUSTOMER_NUMBER,
        })),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

const AnalyticsView = () => {
  const [postData, setPostData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleFormSubmit = (formData) => {
    // Filter the data based on the entered distribution channel or customer number
    const filtered = postData.filter((item) => {
      return (
        item.DISTRIBUTION_CHANNEL === formData.DISTRIBUTION_CHANNEL ||
        item.CUSTOMER_NUMBER === formData.CUSTOMER_NUMBER.toString
      );
    });

    setFilteredData(filtered);
  };

  useEffect(() => {
    // Fetch data from the API and update the postData state
    const baseURL = "http://localhost:8888/h2h_milestone/Read";
    axios.get(baseURL).then((response) => {
      setPostData(response.data);
    });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Form onFormSubmit={handleFormSubmit} />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">Bar Graph</Typography>
        <BarGraph data={filteredData} />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">Pie Chart</Typography>
        <PieChart data={filteredData} />
      </Grid>
    </Grid>
  );
};

export default AnalyticsView;