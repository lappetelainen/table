import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Button, OutlinedInput, TableRow, TableCell } from '@material-ui/core';
import { get } from 'lodash';

const useStyles = makeStyles(theme => ({
  fullName: {
    width: '180px',
  },
  emailAddress: {
    width: '280px',
  },
  phoneNumber: {
    width: '180px',
  },
  input: {
    padding: '8px 0 8px 16px',
  },
  actions: {
    padding: '8px 16px 8px 0',
  },
  button: {
    marginRight: '6px',
    color: theme.palette.primary.main,
  },
}));

function UpdateParticipant({ participant }) {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.input}>
        <OutlinedInput name="fullName" value={get(participant, 'fullName')} className={classes.fullName} />
      </TableCell>
      <TableCell className={classes.input}>
        <OutlinedInput name="emailAddress" value={get(participant, 'emailAddress')} className={classes.emailAddress} />
      </TableCell>
      <TableCell className={classes.input}>
        <OutlinedInput name="phoneNumber" value={get(participant, 'phoneNumber')} className={classes.phoneNumber} />
      </TableCell>
      <TableCell align="right" className={classes.actions}>
        <Button variant="contained" color="secondary" className={classes.button}>
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </TableCell>
    </TableRow>
  );
}

UpdateParticipant.propTypes = {
  participant: PropTypes.object,
};

UpdateParticipant.defaultProps = {
  participant: {},
};

export default UpdateParticipant;
