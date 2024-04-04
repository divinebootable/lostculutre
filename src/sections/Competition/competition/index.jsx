/* eslint-disable react/self-closing-comp  */
/* eslint-disable arrow-body-style  */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import { getAllCompetitions } from 'src/features/competition/competition/competitionSlice';

import Header from 'src/components/Header/Header';

import AddCompetition from './addCompetition';

// const rows = [
//   { id: 1, competition: 'Lost Culture', start_date: '02/03/2020', end_date: '10/03/2020' },
// ];

export default function CompetitionRegistration() {
  const { competitions } = useSelector((store) => store.competition);
  const dispatch = useDispatch();
  console.log('COMPETE');
  console.log(competitions);

  useEffect(() => {
    dispatch(getAllCompetitions());
  }, [dispatch]);

  return (
    <div>
      <Box m="20px">
        <Header title="MANAGE COMPETITION" subtitle="ADD COMPETITION" />
        <Box m="40px 0 0 0">
          <AddCompetition />
        </Box>
        <Box m="40px 0 0 0" height="75vh">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Competition</TableCell>
                  <TableCell align="right">Start Date</TableCell>
                  <TableCell align="right">End Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {competitions.map((row) => {
                  return row.map((competition) => (
                    <TableRow
                      key={competition.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {competition.id}
                      </TableCell>
                      <TableCell align="right">{competition.name}</TableCell>
                      <TableCell align="right">{competition.start_date}</TableCell>
                      <TableCell align="right">{competition.end_date}</TableCell>
                    </TableRow>
                  ));
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
