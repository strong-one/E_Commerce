// Form to move through as user goes throuth the purchasing process

import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";
// create steps
const steps = ["Shipping address", "Payment Details "];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  return (
    <>
      <div classsName={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          {/* stepper, component that mopves as user goes through steps */}
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {/* loop through all the steps */}
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
