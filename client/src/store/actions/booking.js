export const BOOKING_SUCCESSFUL = "BOOKING_SUCCESSFUL";
export const BOOKING = "BOOKING";
export const BOOKING_UNSUCCESSFUL = "BOOKING_UNSUCCESSFUL";
export const BOOKING_RESET = "BOOKING_RESET";
export const APPROVE_BOOKING = "APPROVE_BOOKING";
export const APPROVE_BOOKING_FAILED = "APPROVE_BOOKING_FAILED";
export const APPROVE_BOOKING_SUCCESSFUL = "APPROVE_BOOKING_SUCCESSFUL";

export const bookingAction = (payload) => {
  return {
    type: BOOKING,
    payload,
  };
};

export const bookingSuccessfulAction = (payload) => {
  return {
    type: BOOKING_SUCCESSFUL,
    payload: {
      data: payload
    }
  };
};

export const bookingFailedAction = (errors) => {
  return {
    type: BOOKING_UNSUCCESSFUL,
    payload: {
      errors,
    },
  };
};

export const bookingResetAction = () => {
  return {
    type: BOOKING_RESET,
  };
};

export const approveBookingAction = (payload) => {
  return {
    type: APPROVE_BOOKING,
    payload: {
      data: payload.data,
      navigate: payload.navigate
    }
  };
};

export const approveBookingFailed = (payload) => {
  return {
    type: APPROVE_BOOKING_FAILED,
    payload,
  };
};

export const approveBookingSuccessAction = () => {
  return {
    type: APPROVE_BOOKING_SUCCESSFUL,
  };
};