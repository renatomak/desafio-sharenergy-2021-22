import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import * as React from "react";
import { Div } from "./styled";

export default function RowRadioButtonsGroup(props: { choice: Function }) {
  const { choice } = props;

  return (
    <FormControl component="fieldset">
      <Div>
        <FormLabel component="legend" style={{ color: "var(--gray)" }} id="title-dashboard">
          Variáveis
        </FormLabel>
        <RadioGroup
          row
          aria-label="gender"
          name="row-radio-buttons-group"
          style={{ color: "var(--gray)" }}
          defaultValue="tensao"
        >
          <FormControlLabel
            value="tensao"
            control={<Radio />}
            label="Tensao"
            onClick={() => choice("tensao")}
          />
          <FormControlLabel
            value="corrente"
            control={<Radio />}
            label="Corrente"
            onClick={() => choice("corrente")}
          />
          <FormControlLabel
            value="potencia"
            control={<Radio />}
            label="Potencia"
            onClick={() => choice("potencia")}
          />
          <FormControlLabel
            value="temperatura"
            control={<Radio />}
            label="Temperatura"
            onClick={() => choice("temperatura")}
          />
        </RadioGroup>
      </Div>
    </FormControl>
  );
}
