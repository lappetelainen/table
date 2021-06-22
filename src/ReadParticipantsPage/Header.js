import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '32px',
    backgroundColor: '#9da6af',
    color: '#fff',
  },
  logo: {
    backgroundColor: '#fff',
    width: '32px',
    height: '32px',
    marginRight: '16px',
    content: "''",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logo} />
      <Typography variant="h3">Nord Software</Typography>
    </div>
  );
}

export default Header;
