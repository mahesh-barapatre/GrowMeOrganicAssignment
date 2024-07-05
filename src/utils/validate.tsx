import { FormData, FormErrors } from "../interfaces/Form";

const validate = (formData: FormData): FormErrors => {
  let formErrors: FormErrors = {};

  if (!formData.name) formErrors.name = "Name is required";
  if (!formData.email) {
    formErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    formErrors.email = "Email address is invalid";
  }
  if (!formData.phone) {
    formErrors.phone = "Phone no. is required";
  } else if (isNaN(Number(formData.phone)) || formData.phone.length !== 10) {
    formErrors.phone = "Phone no. must be a 10-digit number";
  }

  return formErrors;
};

export default validate;
