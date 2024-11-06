import React, { Fragment } from "react";
import { Typography, Stepper, StepLabel, Step } from "@mui/material";
import {
  LocalShipping,
  LibraryAddCheck,
  AccountBalance,
} from "@mui/icons-material";
import ErrorBoundary from "../../app/ErrorBoundary";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: <LocalShipping />,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <LibraryAddCheck />,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <AccountBalance />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <Fragment>
      <ErrorBoundary>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          style={stepStyles}
          className="p-4" // Tailwind padding
        >
          {steps.map((item, index) => (
            <Step
              key={index}
              active={activeStep === index}
              completed={activeStep >= index}
              className="stepper-step"
            >
              <StepLabel
                style={{
                  color:
                    activeStep >= index ? "tomato" : "rgba(0, 0, 0, 0.649)",
                }}
                icon={item.icon}
                className="text-center"
              >
                <Typography
                  variant="body1"
                  className={`${
                    activeStep >= index ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </ErrorBoundary>
    </Fragment>
  );
};

export default CheckoutSteps;
