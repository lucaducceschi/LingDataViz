import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const rows = [
  { date: '2024-01-01', systolic: 120, diastolic: 80, heartRate: 70 },
  { date: '2024-01-02', systolic: 130, diastolic: 85, heartRate: 72 },
  { date: '2024-01-03', systolic: 125, diastolic: 83, heartRate: 68 },
  // Add more data as needed
];

function HealthTable() {
  return (
    <Paper>
      <Typography variant="h5" component="div" style={{ padding: 16 }}>
        Health Indicators Table
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Systolic</TableCell>
              <TableCell>Diastolic</TableCell>
              <TableCell>Heart Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.systolic}</TableCell>
                <TableCell>{row.diastolic}</TableCell>
                <TableCell>{row.heartRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default HealthTable;
