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
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

// create steps
const steps = ["Shipping address", "Payment Details "];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  const Confirmation = () => <div>Confirmation</div>;

  // choosing what form to render depending on what step user is on
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          {/* stepper, component that moves as user goes through steps */}
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {/* loop through all the steps */}
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* if on last step  */}
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
