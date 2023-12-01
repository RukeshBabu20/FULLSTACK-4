import {
  Container,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { banks, codes } from "../stores/bankStore";
import { ChangeEvent, useState } from "react";
import Create from "./Create";

const Generate = () => {
  const [users, setUsers] = useState([
    {
      name: "",
    },
  ]);

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setUsers((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <Container>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select Banks</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              name="name"
              label="Age"
              onChange={handleChange}
            >
              {banks.map((list) => (
                <MenuItem value={list}>{list}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Container>
      <Create value={users} />
    </>
  );
};
export default Generate;
