import { errorObjI, formValueI } from "../types/interfaces";

export const validateForm = async (value: formValueI) => {
  let errors: errorObjI = {};
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!value.firstname) {
    errors.firstname = "Please enter your name";
  } else if (value.firstname.length < 3) {
    errors.firstname = "Please enter a valid name";
  } else if (Number(value.firstname)) {
    errors.firstname = "Please enter a valid name";
  }
  if (!value.lastname) {
    errors.lastname = "Please enter your lastname";
  } else if (value.lastname.length < 4) {
    errors.lastname = "Please enter a valid lastname";
  } else if (Number(value.lastname)) {
    errors.lastname = "Please enter a valid lastname";
  }
  if (!value.email) {
    errors.email = "Please enter your email";
  } else if (!emailRegex.test(value.email)) {
    errors.email = "Please enter valid email";
  }
  if (!value.message) {
    errors.message = "Please write a message";
  } else if (value.message.length < 5) {
    errors.message = "Please enter at least 5 characters";
  }

  return errors;
};
