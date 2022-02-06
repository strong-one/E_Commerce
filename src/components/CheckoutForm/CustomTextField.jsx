import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      {/* controller allows us to use any other input or text field  */}
      {/* <Controller
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullwidth
        required={required}
      /> */}

      <Controller
        control={control}
        name={name}
        render={({ field }) => <TextField fullWidth label={label} required />}
      />
    </Grid>
  );
};

export default FormInput;
