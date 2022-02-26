import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      {/* controller allows us to use any other input or text field  */}

      <Controller
        control={control}
        name={name}
        render={() => (
          <TextField defaultValue="" fullWidth label={label} required />
        )}
      />
    </Grid>
  );
};

export default FormInput;
