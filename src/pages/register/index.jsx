/* eslint-disable react/self-closing-comp  */
import * as React from 'react';

import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import Header from 'src/components/Header/Header';

import Registration from './Registration';

const rows = [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, Status: false }];

export default function ContestantRegistration() {
  return (
    <div>
      <Box m="20px">
        <Header title="CONTEST" subtitle="Register for contest" />
        <Box m="40px 0 0 0">
          <Registration />
        </Box>
        <Box m="40px 0 0 0" height="75vh">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Firstname</TableCell>
                  <TableCell align="right">Lastname</TableCell>
                  <TableCell align="right">age</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.firstName}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.Status ? 'Active' : 'Pending'}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
