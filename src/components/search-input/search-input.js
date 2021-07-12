import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const SearchInput = ({ handleChange }) => {
  const classes = useStyles();

  const [state, setState] = useState('');

  const onChange = (e) => {
    setState(e.target.value);
    handleChange(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete='off' onSubmit={(e) => e.preventDefault()}>
      <TextField className='search-input' id='outlined-basic' label='Search' variant='outlined' value={state} onChange={onChange}></TextField>
    </form>
  );
};
