import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import * as React from "react";

export default function RowRadioButtonsGroup(props: { choice: Function}) {
  const { choice } = props;
  
  return (
    <FormControl component="fieldset" >
      <FormLabel component="legend" style={{ color: "var(--gray)"}}>Variáveis</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group" style={{ color: "var(--gray)"}}>
        <FormControlLabel value="tensao" control={<Radio />} label="Tensao" onClick={(e) => choice('tensao')} />
        <FormControlLabel value="corrente" control={<Radio />} label="Corrente" onClick={(e) => choice('corrente')} />
        <FormControlLabel value="potencia" control={<Radio />} label="Potencia" onClick={(e) => choice('potencia')}/>
        <FormControlLabel value="temperatura" control={<Radio />} label="Tmperatura" onClick={(e) => choice('temperatura')}/>
      </RadioGroup>
    </FormControl>
  );
}
