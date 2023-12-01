import { ChangeEvent, FormEvent, useState } from "react";
import { codes } from "../stores/bankStore";
import { bankType } from "../types/bankType";
import {
  Container,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createData } from "../services/apiService";

const Create = ({ value }: { value: bankType }) => {
  const bank = value.name;
  const details = codes(bank);
  const navigate = useNavigate();

  const [customer, setCustomer] = useState<bankType[]>([
    {
      name: "",
      account: 0,
      type: "",
      ifsc: "",
    },
  ]);

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setCustomer((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await createData(customer);
      console.log("Data added", result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack>
            <TextField name="name" onChange={handleChange}></TextField>
            <TextField name="type" onChange={handleChange}></TextField>
            <TextField name="account" onChange={handleChange}></TextField>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                name="ifsc"
                label="Age"
                onChange={handleChange}
              >
                {details.map((detail) => (
                  <MenuItem value={detail}>{detail}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit">Submit</Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default Create;
