import React, { useState } from 'react';
import clsx from 'clsx';

import { get, map } from 'lodash';

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

import { ArrowDownward, Delete, Edit } from '@material-ui/icons';

import UpdateParticipant from '../UpdateParticipant';

const initialParticipants = [
  {
    fullName: 'Tyrion Lannister',
    emailAddress: 'Tyrion.Lannister@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Cersei Lannister',
    emailAddress: 'Cersei.Lannister@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Robert Baratheon',
    emailAddress: 'Robert.Baratheon@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Jaime Lannister',
    emailAddress: 'Jaime.Lannister@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Catelyn Stark',
    emailAddress: 'Catelyn.Stark@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Daenerys Targaryen',
    emailAddress: 'Daenerys.Targaryen@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Jorah Mormont',
    emailAddress: 'Jorah.Mormont@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Viserys Targaryen',
    emailAddress: 'Viserys.Targaryen@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Jon Snow',
    emailAddress: 'Jon.Snow@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Robb Stark',
    emailAddress: 'Robb.Stark@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Sansa Stark',
    emailAddress: 'Sansa.Stark@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Arya Stark',
    emailAddress: 'Arya.Stark@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Theon Greyjoy',
    emailAddress: 'Theon.Greyjoy@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Bran Stark',
    emailAddress: 'Bran.Stark@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Joffrey Baratheon',
    emailAddress: 'Joffrey.Baratheon@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Sandor Clegane',
    emailAddress: 'Sandor.Clegane@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Petyr Baelish',
    emailAddress: 'Petyr.Baelish@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Davos Seaworth',
    emailAddress: 'Davos.Seaworth@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Samwell Tarly',
    emailAddress: 'Samwell.Tarly@gmail.com',
    phoneNumber: '040050060',
  },
  {
    fullName: 'Stannis Baratheon',
    emailAddress: 'Stannis.Baratheon@gmail.com',
    phoneNumber: '040050060',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  fullName: {
    paddingTop: '2px',
    paddingBottom: '2px',
    width: 'calc(180px + 16px)',
  },
  emailAddress: {
    width: 'calc(280px + 16px)',
  },
  phoneNumber: {
    width: 'calc(180px + 16px)',
  },
  button: {
    marginLeft: '16px',
  },
  actions: {
    paddingTop: '14px',
    paddingBottom: '14px',
  },
  active: {
    color: theme.palette.text.primary,
  },
}));

function ReadParticipants() {
  const classes = useStyles();
  const [participants] = useState(initialParticipants);
  return (
    <TableContainer className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head" className={clsx(classes.fullName, classes.active)}>
              Name
              <IconButton className={clsx(classes.button, classes.active)}>
                <ArrowDownward />
              </IconButton>
            </TableCell>
            <TableCell variant="head" className={classes.emailAddress}>
              E-mail address
            </TableCell>
            <TableCell variant="head" className={classes.phoneNumber}>
              Phone number
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {map(participants, (participant, index) => {
            if (index <= 0) {
              return <UpdateParticipant participant={participant} />;
            }
            return (
              <TableRow>
                <TableCell>{get(participant, 'fullName')}</TableCell>
                <TableCell>{get(participant, 'emailAddress')}</TableCell>
                <TableCell>{get(participant, 'phoneNumber')}</TableCell>
                <TableCell align="right" className={classes.actions}>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton className={classes.button}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReadParticipants;
