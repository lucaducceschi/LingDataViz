import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import BloodPressureChart from './MentalHealthChart';
import HealthTable from './HealthTable';

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper>
            <BloodPressureChart />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <HealthTable />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
