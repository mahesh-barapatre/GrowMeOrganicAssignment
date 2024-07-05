// src/components/DepartmentList.tsx
import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Checkbox,
} from "@mui/material";
import { Department } from "../interfaces/Departments";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const departments: Department[] = [
  {
    id: 1,
    name: "customer_service",
    subDepartments: [
      { id: 11, name: "support" },
      { id: 12, name: "customer_success" },
    ],
  },
  {
    id: 2,
    name: "design",
    subDepartments: [
      { id: 21, name: "graphic_design" },
      { id: 22, name: "product_design" },
      { id: 23, name: "web_design" },
    ],
  },
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<{ [key: number]: boolean }>({});
  const [checked, setChecked] = useState<{ [key: number]: boolean }>({});

  const handleToggle = (id: number) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCheck = (id: number, parentId?: number) => {
    setChecked((prev) => {
      let newChecked = { ...prev, [id]: !prev[id] };
      if (parentId !== undefined) {
        const parentChecked =
          departments
            .find((dep) => dep.id === parentId)
            ?.subDepartments.every((sub) => newChecked[sub.id]) ?? false;
        newChecked[parentId] = parentChecked;
      } else {
        departments
          .find((dep) => dep.id === id)
          ?.subDepartments.forEach((sub) => {
            newChecked[sub.id] = newChecked[id];
          });
      }
      return newChecked;
    });
  };

  return (
    <List>
      {departments.map((department) => (
        <div key={department.id}>
          <ListItem button onClick={() => handleToggle(department.id)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked[department.id] || false}
                tabIndex={-1}
                disableRipple
                onClick={(e) => {
                  e.stopPropagation();
                  handleCheck(department.id);
                }}
              />
            </ListItemIcon>
            <ListItemText primary={department.name} />
            {open[department.id] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[department.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((sub) => (
                <ListItem key={sub.id} button style={{ paddingLeft: 32 }}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked[sub.id] || false}
                      tabIndex={-1}
                      disableRipple
                      onClick={() => handleCheck(sub.id, department.id)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={sub.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;
