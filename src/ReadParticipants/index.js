import React from 'react';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  IconButton,
  makeStyles,
} from '@material-ui/core';

import { ArrowDownward } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  fullName: {
    color: theme.palette.text.primary,
  },
  fullNameIcon: {
    color: theme.palette.text.primary,
    padding: '0',
    marginLeft: '16px',
  },
}));

const participants = [
  {
    fullName: '',
  },
];

function ReadParticipants() {
  const classes = useStyles();
  return (
    <TableContainer className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head" className={classes.fullName}>
              Name
              <IconButton className={classes.fullNameIcon}>
                <ArrowDownward />
              </IconButton>
            </TableCell>
            <TableCell variant="head">E-mail address</TableCell>
            <TableCell variant="head">Phone number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReadParticipants;
