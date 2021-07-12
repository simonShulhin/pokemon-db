import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './type-filter.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const TypeFilter = ({ types, handleChange }) => {
  const classes = useStyles();

  const [pokeType, setPokeType] = useState('');

  const onChange = (event) => {
    handleChange(event.target.value);
    setPokeType(event.target.value);
  };

  const options = types.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ));

  return (
    <div className='type-filter'>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel htmlFor='outlined-type-native-simple'>Filter by type</InputLabel>
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
          {options}
        </Select>
      </FormControl>
    </div>
  );
};
