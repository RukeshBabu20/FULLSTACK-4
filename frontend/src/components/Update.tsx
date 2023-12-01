import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { createData, updateData } from "../services/apiService";
import * as api from "../services/apiService";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState<bankType>({
    name: "",
    account: 0,
    type: "",
    ifsc: "",
  });

  useEffect(() => {
    const fetchData = async (id: string) => {
      try {
        const result = await api.showIdData(id);
        setCustomer(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(id);
  }, [id]);

  console.log(customer);

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
      const result = await updateData(id, customer);
      console.log("Data updated", result);
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
            <TextField
              name="name"
              value={customer.name}
              onChange={handleChange}
            ></TextField>
            <TextField
              name="type"
              value={customer.type}
              onChange={handleChange}
            ></TextField>
            <TextField
              name="account"
              value={customer.account}
              onChange={handleChange}
            ></TextField>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={customer.ifsc}
                name="ifsc"
                label="Age"
                onChange={handleChange}
              >
                {/* {details.map((detail) => (
                  <MenuItem value={detail}>{detail}</MenuItem>
                ))} */}
              </Select>
            </FormControl>
            <Button type="submit">Submit</Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default Update;
