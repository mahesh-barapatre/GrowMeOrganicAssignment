// src/components/SecondPage.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import DataGridComponent from "../components/DataGridComponent"; // Component for displaying data grid
import DepartmentList from "../components/DepartmentList"; // Component for displaying department list

const SecondPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    if (!userDetails) {
      navigate("/");
      alert("Enter user details properly!");
    }
  }, [navigate]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Second Page
      </Typography>
      <Typography variant="h5" gutterBottom>
        Component 1
      </Typography>
      <DataGridComponent />
      <Typography variant="h5" gutterBottom>
        Component 2
      </Typography>
      <DepartmentList />
    </Container>
  );
};

export default SecondPage;
