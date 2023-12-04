"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarComponent = () => {
  return (
    <ProgressBar
      height="6px"
      color="#95d354"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default ProgressBarComponent;
