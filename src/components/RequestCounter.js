import React, { useContext } from "react";
import { ApplicationContext } from "../App";

const RequestCounter = () => {
  const appContext = useContext(ApplicationContext);
  const requestsCount = appContext.requestsCount;

  return (
    <div>
      <span>Requests: {requestsCount}</span>
    </div>
  );
};

export default RequestCounter;
