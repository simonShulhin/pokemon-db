import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './sort-list.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const SortList = ({ types, handleChange }) => {
  const classes = useStyles();

  const [pokeType, setPokeType] = useState('');

  const onChange = (event) => {
    handleChange(event.target.value);
    setPokeType(event.target.value);
  };

  return (
    <div className='type-filter'>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel htmlFor='outlined-type-native-simple'>Sort by...</InputLabel>
        <Select
          native
          value={pokeType}
          onChange={onChange}
          label='Filter by type'
          inputProps={{
            name: 'type',
            id: 'outlined-type-native-simple',
          }}>
          <option aria-label='None' value='' />
          <option value='Lowest'>Lowest Number</option>
          <option value='Highest'>Highest Number</option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </Select>
      </FormControl>
    </div>
  );
};
