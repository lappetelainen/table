import React from 'react';

import { Container, makeStyles, Typography } from '@material-ui/core';

import Header from './Header';
import CreateParticipant from '../CreateParticipant';
import ReadParticipants from '../ReadParticipants';

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '64px',
    marginBottom: '32px',
  },
}));

function ReadParticipantsPage() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <div className={classes.title}>
          <Typography variant="h1" color="textPrimary">
            List of participants
          </Typography>
        </div>
        <CreateParticipant />
        <ReadParticipants />
      </Container>
    </div>
  );
}

export default ReadParticipantsPage;
