import { useState } from "react";
import validate from "../utils/validate";
import { FormErrors, FormData } from "../interfaces/Form";

const UseFormValidation = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    callback: () => void
  ) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    // console.log(Object.keys(validationErrors).length === 0);
    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default UseFormValidation;
