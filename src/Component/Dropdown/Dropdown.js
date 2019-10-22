import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '96%',
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  props.onchange(event)
  };

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
        {props.name}
        </InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('age')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
        <option value="" ></option>
 { props.data && props.data.map((v,i)=>{
    return <option value={v.data}>{v.data}</option>
   })
 }
        </Select>
      </FormControl>

    </div>
  );
}