import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from 'react-bootstrap/Image';
import stats from '../../assets/img/fee.png';
import Card from "./customCard";
import { FcStatistics,FcComboChart,FcClock,FcFilingCabinet,FcPlanner } from "react-icons/fc";

const HighlightSectionWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#fffff",
  padding: theme.spacing(4),
}));

const HighlightSection = () => {
  return (
    <div>
 <Image  style={{ maxHeight: '250px' }}  src={stats} rounded  />
    </div>



    // <HighlightSectionWrapper>
    //   {/* <Typography variant="h6" align="center" gutterBottom>
    //     Highlight Section
    //   </Typography> */}
    //   <Grid container spacing={3} justifyContent="center">
    //     <Grid item xs={12} sm={6} md={4}>
    //       <Card
    //         icon={< FcStatistics />}
    //         title="Statistic 1"
    //         value="1000"
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={4}>
    //       <Card
    //         icon={<FcComboChart />}
    //         title="Statistic 2"
    //         value="500"
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6} md={4}>
    //       <Card
    //         icon={<FcPlanner />}
    //         title="Statistic 3"
    //         value="750"
    //         color="#6200EA"
    //       />
    //     </Grid>
    //   </Grid>
    // </HighlightSectionWrapper>
  );
};

export default HighlightSection;
