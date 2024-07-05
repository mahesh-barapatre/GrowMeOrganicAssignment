// src/components/UserForm.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";
import { FormData } from "../interfaces/Form";
import UseFormValidation from "../hooks/UseFormValidation";

const UserForm: React.FC = () => {
  const navigate = useNavigate();

  const initialState: FormData = {
    name: "",
    email: "",
    phone: "",
  };

  const { formData, errors, handleChange, handleSubmit } =
    UseFormValidation(initialState);

  const submitForm = () => {
    const { name, phone, email } = formData;
    if (name && phone && email) {
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ name, phone, email })
      );
      navigate("/second");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        First Page
      </Typography>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(e, submitForm)
        }
      >
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          helperText={errors.name}
          error={Boolean(errors.name)}
          required
        />

        <TextField
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          helperText={errors.phone}
          error={Boolean(errors.phone)}
          required
        />

        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          helperText={errors.email}
          error={Boolean(errors.email)}
          required
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default UserForm;
