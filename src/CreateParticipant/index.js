import React from 'react';

import { makeStyles, Button, OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '16px',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  fullName: {
    width: '180px',
  },
  emailAddress: {
    width: '280px',
    marginLeft: '16px',
  },
  phoneNumber: {
    width: '180px',
    marginLeft: '16px',
  },
  actions: {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

function CreateParticipant() {
  const classes = useStyles();
  return (
    <form className={classes.root}>
      <OutlinedInput name="fullName" placeholder="Full name" className={classes.fullName} />
      <OutlinedInput name="emailAddress" placeholder="E-mail address" className={classes.emailAddress} />
      <OutlinedInput name="phoneNumber" placeholder="Phone number" className={classes.phoneNumber} />
      <div className={classes.actions}>
        <Button variant="contained" color="secondary">
          Add new
        </Button>
      </div>
    </form>
  );
}

export default CreateParticipant;
